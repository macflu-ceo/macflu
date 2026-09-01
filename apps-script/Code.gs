/**
 * Macflu 문의 폼 수신기 — Google Apps Script 웹앱
 *
 * 하는 일: 사이트에서 온 문의를 (1) 시트에 한 줄 기록하고 (2) 담당 메일로 보낸다.
 * 배포 방법은 같은 폴더의 README.md 참고.
 *
 * 아래 세 값만 채우면 된다.
 */
const SHEET_ID = 'PASTE_SHEET_ID_HERE';   // 시트 URL의 /d/ 와 /edit 사이 문자열
const TAB_NAME = '문의';
const TOKEN    = 'PASTE_TOKEN_HERE';      // form-config.js 의 token 과 같은 값

// 유형별 수신 주소. cast@ 는 항상 참조로 들어간다.
const TO_BY_KIND = {
  creator: 'cast@macflu.com',
  brand:   'brand@macflu.com',
  other:   'cast@macflu.com',
};
const ALWAYS_CC = 'cast@macflu.com';

const KIND_LABEL = { creator: 'Creator', brand: 'Brand', other: 'Other' };
const HEADER = ['접수일시', '티켓', '유형', '이름', '이메일', 'SNS / 웹사이트', '내용', '언어', '유입 페이지'];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    if (body.token !== TOKEN) return json({ ok: false, error: 'unauthorized' });

    // 허니팟 — 사람 눈에 안 보이는 칸이 채워졌으면 봇이다. 조용히 성공으로 응답.
    if (body.company) return json({ ok: true, ticket: 'MF00000' });

    if (!throttleOk()) return json({ ok: false, error: 'rate_limited' });

    const name  = clip(body.name, 100);
    const email = clip(body.email, 150);
    if (!name || !email) return json({ ok: false, error: 'missing_fields' });

    const kind    = TO_BY_KIND[body.kind] ? body.kind : 'other';
    const sns     = clip(body.sns, 300);
    const message = clip(body.message, 3000);
    const lang    = clip(body.lang, 10);
    const page    = clip(body.page, 300);

    const now = new Date();
    const ticket = makeTicket(now);

    appendRow([
      Utilities.formatDate(now, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss'),
      ticket, KIND_LABEL[kind], name, email, sns, message, lang, page,
    ]);

    notify(kind, ticket, name, email, sns, message, lang, page);

    return json({ ok: true, ticket: ticket });
  } catch (err) {
    // 실패해도 기록은 남긴다. 사이트에는 실패를 알려 메일 안내로 넘긴다.
    try { console.error(err); } catch (ignore) {}
    return json({ ok: false, error: 'server_error' });
  }
}

// 브라우저에서 배포 URL을 열었을 때 살아있는지 확인용
function doGet() {
  return json({ ok: true, service: 'macflu-contact' });
}

function appendRow(row) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(TAB_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER);
    sheet.getRange(1, 1, 1, HEADER.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(row);
}

function notify(kind, ticket, name, email, sns, message, lang, page) {
  const to = TO_BY_KIND[kind];
  const cc = (to === ALWAYS_CC) ? '' : ALWAYS_CC;
  const subject = '[' + KIND_LABEL[kind] + '] ' + name + ' — macflu.com 문의 (' + ticket + ')';
  const lines = [
    '유형    ' + KIND_LABEL[kind],
    '이름    ' + name,
    '이메일  ' + email,
    'SNS/웹  ' + (sns || '-'),
    '',
    message || '(내용 없음)',
    '',
    '—',
    '티켓 ' + ticket + ' · 언어 ' + (lang || '-') + ' · 유입 ' + (page || '-'),
    '이 메일에 그대로 답장하면 문의한 분에게 갑니다.',
  ];
  const options = { name: 'Macflu 문의', replyTo: email };
  if (cc) options.cc = cc;
  MailApp.sendEmail(to, subject, lines.join('\n'), options);
}

// 분당 상한. 봇이 몰아쳐도 시트와 메일 할당량을 지킨다.
function throttleOk() {
  const cache = CacheService.getScriptCache();
  const key = 'rate:' + Math.floor(Date.now() / 60000);
  const n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 120);
  return n <= 20;
}

function makeTicket(now) {
  const stamp = Utilities.formatDate(now, 'Asia/Seoul', 'yyMMdd');
  const rand = Math.floor(Math.random() * 900 + 100);
  return 'MF' + stamp + rand;
}

function clip(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
