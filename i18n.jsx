// i18n.jsx — Macflu 한국어 / English / 简体中文
// 컴포넌트는 렌더 시점에 전역 T를 읽는다. App이 렌더 본문에서 setLangData(lang)를
// 먼저 호출하므로, 자식이 그리기 전에 T가 항상 해당 언어로 맞춰져 있다.

const LANGS = ['ko', 'en', 'zh'];
const LANG_LABEL = { ko: '한국어', en: 'English', zh: '简体中文' };
const LANG_SHORT = { ko: 'KO', en: 'EN', zh: '中' };
const HTML_LANG  = { ko: 'ko', en: 'en', zh: 'zh-Hans' };

const I18N = {
  // ────────────────────────────────────────────────────────────── 한국어
  ko: {
    nav: { main: 'Macflu', brink: 'Brink', contact: 'Contact', cta: '문의하기 →' },

    meta: {
      main: {
        title: '맥플루 Macflu — 명품 공급 인프라 위에서 만든 패션 MCN',
        desc: '맥플루는 명품 공급사가 만든 패션 MCN입니다. 부티크 직계약, 정품 검수, 국내 물류를 갖춘 인프라 위에서 브랜디드 콘텐츠·라이브 커머스·RS 위탁판매로 브랜드와 크리에이터를 잇습니다.',
      },
      brink: {
        title: 'Brink — 광고비 0원 커머스 인프라 | 맥플루 Macflu',
        desc: 'Brink는 맥플루가 직접 개발한 커머스 OS입니다. 입점·재고·주문·결제·배송·정산을 자동화해 브랜드는 광고비 없이 매출 기반 수익 쉐어로 시작합니다.',
      },
      contact: {
        title: '문의하기 — 크리에이터·브랜드 | 맥플루 Macflu',
        desc: '크리에이터 지원은 cast@macflu.com, 브랜드·광고주 문의는 brand@macflu.com. 평균 3일 이내 답신드립니다.',
      },
    },

    hero: {
      floatWords: ['Influence.', 'Curated.', 'Seoul ↔ Worldwide'],
      metaLeft: '맥플루 · MACFLU',
      subLine1: '브랜드에 영향력을 입히는 패션 MCN.',
      subLine2: '글로벌 부티크 직계약과 한국 명품 인프라 위에서.',
      index: '01 / 08 — Identity · 항해의 시작',
      scroll: 'SCROLL',
    },

    marquee: [
      '글로벌 No.1 패션 MCN이 되겠습니다',
      '해외 크리에이터 영입',
      '해외 플랫폼에서 국내 크리에이터의 활동 지원',
      '국내 브랜드의 해외 진출',
      '해외 마켓 진출',
      '해외 명품 브랜드 수입 및 공급 / 협찬',
    ],

    identity: {
      h1: '패션의 자산을,',
      h2: '콘텐츠로.',
      p1: '명품 브랜드부터, 스트릿까지.',
      p2: '패션 브랜드와 영향력을 잇고.',
      p3pre: '브랜드와 크리에이터를, 광고가 아닌 ',
      p3strong: '콘텐츠로',
      p3post: ' 잇는다.',
    },

    edge: {
      index: 'The Edge',
      headMeta: '핵심 자산. 시작하는 자리가 높습니다.',
      titlePre: '시작하는 자리가, ',
      titleAcc: '높습니다.',
      sub: '명품 공급 인프라 위에서 시작합니다. 해외 부티크 50+ 공식 직계약, 50억 규모 국내 재고, 국내 No.1 공급사 네트워크. 이 자산을 콘텐츠로 푸는 것이 맥플루의 일입니다.',
      metrics: [
        { num: '50', plus: true, label: '해외 부티크 공식 직계약' },
        { num: '50', unit: '억+', label: '국내 명품 재고 보유' },
        { num: 'No.1', label: '국내 명품 공급사 네트워크' },
        { num: '공식', label: '수입 인프라 직계약' },
      ],
    },

    operate: {
      index: 'Operate',
      headMeta: '한국에서 시작. 한국에서 끝나지 않는다.',
      hLine1: '글로벌 시장에서 결과를',
      hLine2: '만드는 것을 목표로 합니다.',
      flows: [
        { t1: '해외 브랜드', t2: '컨택', body: '부티크 직계약 네트워크. 시즌마다 새 라인업.' },
        { t1: '해외 크리에이터', t2: '영입', body: '한국 콘텐츠와 통하는 해외 크리에이터. 톤과 시장을 함께 연결.' },
        { t1: '다채널', t2: '콘텐츠', body: '하나의 캠페인을, 여러 플랫폼의 호흡으로.' },
        { t1: '글로벌', t2: '커머스', body: '콘텐츠가 본 즉시, 살 수 있는 거리. 다국가 결제·배송 자동화.' },
      ],
    },

    models: {
      index: 'Commercial Models',
      headMeta: '우리가 중개하는 방식',
      hLine1: '세 가지 방식으로',
      hLine2: '중개합니다.',
      prev: '이전',
      next: '다음',
      slide: '슬라이드 ',
      cards: [
        { name1: 'Branded', name2: 'Content', small: '브랜디드 콘텐츠',
          quote: '광고가 아닌, 브랜드 톤을 살린 에디토리얼.',
          bodyStrong: '시즌 단위 발행.', bodyRest: ' 멀티 플랫폼 동시 송출. 크리에이터의 톤과 브랜드의 톤을, 한 호흡으로.' },
        { name1: 'Live', name2: 'Commerce', small: '라이브 커머스',
          quote: '콘텐츠에서 구매까지, 한 화면.',
          bodyPre: '인스타·틱톡·유튜브 라이브 + ', bodyStrong: 'macflu.com', bodyRest: ' 연동. 다국가 결제·배송 자동화.' },
        { name1: 'RS 판매구조', name2: '', small: 'Revenue Share · 위탁판매',
          quote: '광고비 0원. 매출에 따른 수익 쉐어.',
          bodyPre: '위탁판매 기반 RS 구조. ', bodyStrong: '브랜드 진입 리스크 0.', bodyRest: ' 셀러 파트너 풀과 자동 연결.' },
      ],
    },

    creators: {
      index: 'For Creators',
      headMeta: '크리에이터의 성장이 먼저',
      hPre: '크리에이터의 ', hAcc: '성장이', hPost: '먼저.',
      sub: '기획부터 정산까지. 함께 짓는 동료의 호흡으로 운영합니다.',
      supports: [
        { title: '콘텐츠 가이드·기획', body: '기획부터 톤·매너까지. 시즌 단위로 함께 짭니다.' },
        { title: '매니지먼트', body: '분석·일정·계약·정산. 풀패키지 운영.' },
        { title: '협찬·콜라보', body: '명품 부티크 직계약 자산 활용. 진짜 제품으로 진짜 콘텐츠.' },
        { title: '촬영 지원', body: '장소·스타일링·제작 백업. 작품에만 집중하도록.' },
      ],
      cta: '지원하기',
    },

    brinkEntry: {
      hLine1: '맥플루의', hLine2: '자동화 인프라.',
      subLine1: '브랜드와 셀러를, 시스템이 잇는다.',
      subLine2: '외부 SaaS가 아닌 — 맥플루의 자체 시스템.',
      cta: 'Brink 알아보기',
    },

    origin: {
      quoteLine1: '한국 No.1 명품 공급사가 만든 패션 MCN.',
      quoteLine2: '인프라 위에서 콘텐츠를 짓습니다.',
      quoteLine3: '진열장 너머의 옷을, 콘텐츠로 입혀냅니다.',
      sign: '— Founder · 맥플루',
      ctaSub: '— FINAL · GET IN TOUCH',
      cta: 'Contact.',
    },

    footer: {
      desc: '한국 No.1 명품 공급사가 만든 패션 MCN. 브랜드와 영향력을, 콘텐츠로 잇습니다.',
      colPages: 'Pages',
      colContact: 'Contact',
      tagCreator: '크리에이터',
      tagBrand: '브랜드',
      avg: '평균 응답 3일',
      biz: {
        name: '상호', ceo: '대표자', reg: '사업자등록번호',
        tel: '대표번호', privacy: '개인정보보호책임자', addr: '주소',
        nameV: '맥플루', ceoV: '이긍정',
        addrV: '서울특별시 강남구 도곡로84길 6, B1층 23호(대치동)',
      },
      copy: '© 2026 Macflu — 맥플루',
      edition: 'EDITION 01 · SS 26 · SEOUL ↔ WORLDWIDE',
    },

    contact: {
      meta: '— CONTACT · 한 화면 · 한 줄',
      h: 'Contact.',
      sub: '짧게 적어주세요. 평균 3일 이내 답신드립니다.',
      tabs: ['Creator', 'Brand', 'Other'],
      successH: '잘 받았습니다 — ', successAcc: '곧 답신.',
      successP: '평균 3일 이내에 답신드립니다.',
      labelName: '— 이름 / Name',
      phName: '이름을 적어주세요', phNameBrand: 'Brand or company',
      labelEmail: '— 이메일 / Email',
      labelSnsCreator: '— SNS · 인스타·틱톡·유튜브 등',
      labelSnsBrand: '— 웹사이트 / SNS',
      labelSnsOther: '— 링크 (선택)',
      phSnsCreator: '@your_handle', phSnsOther: 'brand.com 또는 SNS',
      labelMsg: '— 한 줄로 (간단히)',
      phMsgCreator: '함께 짓고 싶은 동행을, 한 줄로.',
      phMsgBrand: '필요한 무게. 시즌, 카테고리, 채널.',
      phMsgOther: '무엇에 대한 얘기인지 한 줄.',
      hint: '권장 1문장 — 길게 적지 않으셔도 괜찮습니다.',
      send: '보내기 / Send',
      sending: '보내는 중…',
      errorH: '전송이 되지 않았습니다',
      errorP: '잠시 후 다시 시도해 주세요. 급하시면 아래 버튼으로 바로 메일을 보내실 수 있습니다.',
      errorCta: '메일로 보내기',
      retry: '다시 시도',
      asideMeta: '— DIRECT LINES',
      asideHPre: '가장 빠른 ', asideHAcc: '길.',
      chCreator: '— Creator · 크리에이터 지원',
      chBrand: '— Brand · 브랜드 · 광고주',
      chPress: '— Press / Deck',
      pressValue: 'Pitch deck — PDF ↓',
      pressToast: 'Pitch deck PDF — 준비 중',
      avgLabel1: '평균 응답', avgLabel2: 'Avg. response',
    },

    brink: {
      heroMetaLeft: '맥플루 / 브링크 · MACFLU / BRINK',
      heroHLine1: '맥플루의', heroHLine2: '자동화 커머스 인프라.',
      heroSub: '브랜드의 상품을, 검증된 셀러에게 — 시스템이 잇는다. 외부 SaaS가 아닙니다. 맥플루의 자체 운영 시스템.',
      howHeadMeta: '사람이 손대는 시간은, 거의 0',
      howHPre: '어떻게 ', howHAcc: '작동하는가.',
      steps: [
        { title: '공급사가 상품 등록', body: '브랜드사가 상품 시트 한 번 등록. 이미지·사이즈·가격·재고가 시스템에 통합.' },
        { title: '셀러 채널에 자동 업로드', body: '시스템이 검증된 셀러 채널 — 스마트스토어·11번가·머스트잇 등 — 으로 일괄 게시.' },
        { title: '재고·환율·사이즈 실시간 동기화', body: '하나의 상품이 N개 채널에서 팔려도, 재고는 항상 한 곳에서 진실. 환율·가격은 자동.' },
        { title: '판매 발생 시 발주 데이터 자동 전송', body: '셀러에서 결제가 일어나면 공급사로 발주 데이터가 즉시. 사람의 손은 거의 닿지 않습니다.' },
      ],
      stepChips: [
        ['SUPPLIER', 'ONBOARDING'],
        ['스마트스토어', '11번가', '머스트잇', '+ 외 10'],
        ['SYNC', '실시간'],
        ['AUTO-PO', '발주 자동화'],
      ],
      tag: '사람이 손대는 시간',
      forSupplierLabel: '— 03A · For Suppliers / 브랜드사',
      forSupplierH: ['브랜드의', '판매 채널을', '자동 확장.'],
      forSupplierList: [
        '신규 판매 채널이 자동으로 확장',
        '맥플루가 검증한 셀러만 연결',
        '재고·발주 외주 운영 없이',
        '가격·노출 채널별 컨트롤 가능',
      ],
      forSupplierCta: '공급사로 합류하기 →',
      forSellerLabel: '— 03B · For Sellers / 셀러',
      forSellerH: ['퀄리티', '보장된 상품.', '사입 부담 0.'],
      forSellerList: [
        '맥플루가 직접 등록한 상품만 취급',
        '사입 부담 없는 위탁판매 구조',
        '자동화로 운영 인력 최소화',
        '판매 데이터 대시보드 제공',
      ],
      forSellerCta: '셀러로 합류하기 →',
      curationHeadMeta: '공급 품목·셀러 컨트롤',
      curationPull1pre: '맥플루가 ', curationPull1strong: '직접 골라낸 셀러만,',
      curationPull2pre: '맥플루가 ', curationPull2strong: '직접 등록한 상품만.',
      curationCards: [
        { h: '— Channel-level control', p: '공급사가 채널별·셀러별로 노출 품목을 직접 컨트롤. 자동 확장이지만, 자동 노출은 아닙니다.' },
        { h: '— Curated supply', p: '모든 상품이 모든 셀러에게 열려있지 않다. 큐레이션의 권위로, 시장의 신뢰를 짓습니다.' },
      ],
      ctaHeadMeta: '합류하기',
      ctaSupplierH: ['공급사로', '합류하기.'],
      ctaSellerH: ['셀러로', '합류하기.'],
    },
  },

  // ────────────────────────────────────────────────────────────── English
  en: {
    nav: { main: 'Macflu', brink: 'Brink', contact: 'Contact', cta: 'Get in touch →' },

    meta: {
      main: {
        title: 'Macflu — A Fashion MCN Built on Luxury Supply Infrastructure',
        desc: 'Macflu is a fashion MCN built by a luxury supplier. On infrastructure of direct boutique contracts, authentication and Korean logistics, we connect brands and creators through branded content, live commerce and revenue-share consignment.',
      },
      brink: {
        title: 'Brink — Zero Ad Spend Commerce Infrastructure | Macflu',
        desc: 'Brink is the commerce OS Macflu built in-house. Listing, stock, orders, payment, shipping and settlement are automated, so brands start with no ad spend and share revenue on what actually sells.',
      },
      contact: {
        title: 'Contact — Creators & Brands | Macflu',
        desc: 'Creator support at cast@macflu.com, brand and advertiser enquiries at brand@macflu.com. We reply within three days on average.',
      },
    },

    hero: {
      floatWords: ['Influence.', 'Curated.', 'Seoul ↔ Worldwide'],
      metaLeft: 'MACFLU',
      subLine1: 'A fashion MCN that dresses brands in influence.',
      subLine2: 'Built on direct boutique contracts and Korean luxury supply infrastructure.',
      index: '01 / 08 — Identity · Where the voyage begins',
      scroll: 'SCROLL',
    },

    marquee: [
      'Becoming the world’s No.1 fashion MCN',
      'Signing creators abroad',
      'Backing Korean creators on global platforms',
      'Taking Korean brands overseas',
      'Entering overseas marketplaces',
      'Importing, supplying and seeding global luxury brands',
    ],

    identity: {
      h1: 'Fashion’s assets,',
      h2: 'turned into content.',
      p1: 'From luxury houses to street.',
      p2: 'We connect fashion brands with influence.',
      p3pre: 'Brands and creators, joined by ',
      p3strong: 'content',
      p3post: ' — not advertising.',
    },

    edge: {
      index: 'The Edge',
      headMeta: 'Core assets. We start from higher ground.',
      titlePre: 'We start from ',
      titleAcc: 'higher ground.',
      sub: 'We begin on luxury supply infrastructure: 50+ official direct contracts with overseas boutiques, ₩5bn of luxury stock held in Korea, and Korea’s No.1 luxury supply network. Turning that into content is Macflu’s work.',
      metrics: [
        { num: '50', plus: true, label: 'Official direct contracts with overseas boutiques' },
        { num: '5', unit: 'bn+', label: 'Luxury stock held in Korea (KRW)' },
        { num: 'No.1', label: 'Korea’s luxury supply network' },
        { num: 'Official', label: 'Import infrastructure, contracted direct' },
      ],
    },

    operate: {
      index: 'Operate',
      headMeta: 'It starts in Korea. It does not end there.',
      hLine1: 'Our aim is results',
      hLine2: 'in the global market.',
      flows: [
        { t1: 'Overseas brand', t2: 'contact', body: 'A direct boutique contract network. A new line-up every season.' },
        { t1: 'Overseas creator', t2: 'signing', body: 'Creators abroad who speak to Korean content. Tone and market, connected together.' },
        { t1: 'Multi-channel', t2: 'content', body: 'One campaign, carried in the rhythm of each platform.' },
        { t1: 'Global', t2: 'commerce', body: 'From seeing it to buying it, one step. Multi-country payment and shipping, automated.' },
      ],
    },

    models: {
      index: 'Commercial Models',
      headMeta: 'How we broker',
      hLine1: 'Three ways',
      hLine2: 'we broker.',
      prev: 'Previous',
      next: 'Next',
      slide: 'Slide ',
      cards: [
        { name1: 'Branded', name2: 'Content', small: 'Editorial, not advertising',
          quote: 'Editorial that carries the brand’s own tone — not an ad.',
          bodyStrong: 'Published by season.', bodyRest: ' Simultaneous multi-platform release. The creator’s tone and the brand’s, in one breath.' },
        { name1: 'Live', name2: 'Commerce', small: 'Live commerce',
          quote: 'From content to checkout, on one screen.',
          bodyPre: 'Instagram, TikTok and YouTube Live, wired to ', bodyStrong: 'macflu.com', bodyRest: '. Multi-country payment and shipping, automated.' },
        { name1: 'Revenue', name2: 'Share', small: 'Revenue share · consignment',
          quote: 'Zero ad spend. A share of what actually sells.',
          bodyPre: 'A consignment-based RS structure. ', bodyStrong: 'Zero entry risk for the brand.', bodyRest: ' Connected automatically to our vetted seller pool.' },
      ],
    },

    creators: {
      index: 'For Creators',
      headMeta: 'The creator grows first',
      hPre: 'The creator ', hAcc: 'grows', hPost: 'first.',
      sub: 'From planning to settlement. We run it the way colleagues build something together.',
      supports: [
        { title: 'Content direction', body: 'From concept to tone and manner. Planned together, season by season.' },
        { title: 'Management', body: 'Analytics, scheduling, contracts, settlement. Full package.' },
        { title: 'Seeding & collabs', body: 'Drawing on direct boutique contracts. Real products make real content.' },
        { title: 'Production support', body: 'Location, styling, production backup. So you can stay on the work.' },
      ],
      cta: 'Apply',
    },

    brinkEntry: {
      hLine1: 'Macflu’s', hLine2: 'automation layer.',
      subLine1: 'A system that joins brands and sellers.',
      subLine2: 'Not third-party SaaS — Macflu’s own.',
      cta: 'Explore Brink',
    },

    origin: {
      quoteLine1: 'A fashion MCN built by Korea’s No.1 luxury supplier.',
      quoteLine2: 'We build content on top of infrastructure.',
      quoteLine3: 'The clothes behind the vitrine, dressed in content.',
      sign: '— Founder · Macflu',
      ctaSub: '— FINAL · GET IN TOUCH',
      cta: 'Contact.',
    },

    footer: {
      desc: 'A fashion MCN built by Korea’s No.1 luxury supplier. We join brands and influence through content.',
      colPages: 'Pages',
      colContact: 'Contact',
      tagCreator: 'Creators',
      tagBrand: 'Brands',
      avg: 'Avg. reply in 3 days',
      biz: {
        name: 'Company', ceo: 'Representative', reg: 'Business reg. no.',
        tel: 'Tel', privacy: 'Privacy officer', addr: 'Address',
        nameV: 'Macflu', ceoV: 'Lee Geung-jeong',
        addrV: 'B1 #23, 6 Dogok-ro 84-gil, Gangnam-gu, Seoul, Korea',
      },
      copy: '© 2026 Macflu',
      edition: 'EDITION 01 · SS 26 · SEOUL ↔ WORLDWIDE',
    },

    contact: {
      meta: '— CONTACT · ONE SCREEN · ONE LINE',
      h: 'Contact.',
      sub: 'Keep it short. We reply within three days on average.',
      tabs: ['Creator', 'Brand', 'Other'],
      successH: 'Received — ', successAcc: 'we’ll be in touch.',
      successP: 'We reply within three days on average.',
      labelName: '— Name',
      phName: 'Your name', phNameBrand: 'Brand or company',
      labelEmail: '— Email',
      labelSnsCreator: '— SNS · Instagram, TikTok, YouTube',
      labelSnsBrand: '— Website / SNS',
      labelSnsOther: '— Link (optional)',
      phSnsCreator: '@your_handle', phSnsOther: 'brand.com or SNS',
      labelMsg: '— In one line',
      phMsgCreator: 'The partnership you want to build, in one line.',
      phMsgBrand: 'What you need. Season, category, channel.',
      phMsgOther: 'What this is about, in one line.',
      hint: 'One sentence is plenty — no need to write long.',
      send: 'Send',
      sending: 'Sending…',
      errorH: 'That didn’t send',
      errorP: 'Please try again in a moment. If it’s urgent, the button below opens an email instead.',
      errorCta: 'Send by email',
      retry: 'Try again',
      asideMeta: '— DIRECT LINES',
      asideHPre: 'The fastest ', asideHAcc: 'way.',
      chCreator: '— Creator · creator support',
      chBrand: '— Brand · brands & advertisers',
      chPress: '— Press / Deck',
      pressValue: 'Pitch deck — PDF ↓',
      pressToast: 'Pitch deck PDF — coming soon',
      avgLabel1: 'Avg.', avgLabel2: 'response',
    },

    brink: {
      heroMetaLeft: 'MACFLU / BRINK',
      heroHLine1: 'Macflu’s', heroHLine2: 'automated commerce infrastructure.',
      heroSub: 'A brand’s products, delivered to vetted sellers — joined by a system. Not third-party SaaS. Macflu operates its own.',
      howHeadMeta: 'Human hours: close to zero',
      howHPre: 'How it ', howHAcc: 'works.',
      steps: [
        { title: 'The supplier registers products', body: 'The brand submits one product sheet. Images, sizes, prices and stock are unified in the system.' },
        { title: 'Auto-published to seller channels', body: 'The system publishes in bulk to vetted seller channels — SmartStore, 11st, MUSTIT and more.' },
        { title: 'Stock, FX and sizing sync in real time', body: 'One product sold across N channels, one source of truth for stock. Currency and pricing follow automatically.' },
        { title: 'Purchase orders fire on every sale', body: 'The moment a seller takes payment, the PO reaches the supplier. Almost no hands touch it.' },
      ],
      stepChips: [
        ['SUPPLIER', 'ONBOARDING'],
        ['SmartStore', '11st', 'MUSTIT', '+ 10 more'],
        ['SYNC', 'REALTIME'],
        ['AUTO-PO', 'ORDER AUTOMATION'],
      ],
      tag: 'Human hours',
      forSupplierLabel: '— 03A · For Suppliers / Brands',
      forSupplierH: ['Your sales', 'channels,', 'expanded automatically.'],
      forSupplierList: [
        'New sales channels open automatically',
        'Only sellers Macflu has vetted',
        'No outsourced stock or order operations',
        'Price and exposure controlled per channel',
      ],
      forSupplierCta: 'Join as a supplier →',
      forSellerLabel: '— 03B · For Sellers',
      forSellerH: ['Quality-', 'assured stock.', 'Zero buy-in.'],
      forSellerList: [
        'Only products Macflu registered directly',
        'Consignment structure with no buy-in burden',
        'Automation keeps headcount low',
        'A sales dashboard, included',
      ],
      forSellerCta: 'Join as a seller →',
      curationHeadMeta: 'Control over supply and sellers',
      curationPull1pre: 'Only sellers ', curationPull1strong: 'Macflu picked,',
      curationPull2pre: 'only products ', curationPull2strong: 'Macflu registered.',
      curationCards: [
        { h: '— Channel-level control', p: 'Suppliers control which items appear, per channel and per seller. Expansion is automatic; exposure is not.' },
        { h: '— Curated supply', p: 'Not every product is open to every seller. Trust is built on the authority of the curation.' },
      ],
      ctaHeadMeta: 'Join',
      ctaSupplierH: ['Join as a', 'supplier.'],
      ctaSellerH: ['Join as a', 'seller.'],
    },
  },

  // ────────────────────────────────────────────────────────────── 简体中文
  zh: {
    nav: { main: 'Macflu', brink: 'Brink', contact: '联系', cta: '联系我们 →' },

    meta: {
      main: {
        title: 'Macflu 麦弗鲁 — 建立在奢侈品供应链之上的时尚 MCN',
        desc: '麦弗鲁是由奢侈品供应商打造的时尚 MCN。在买手店直签、正品验货与韩国本地物流的基础之上，以品牌内容、直播电商与代销分成连接品牌与达人。',
      },
      brink: {
        title: 'Brink — 零广告费的电商基础设施 | Macflu 麦弗鲁',
        desc: 'Brink 是麦弗鲁自研的电商 OS。上架、库存、订单、支付、物流与结算全流程自动化，品牌无需广告费，按实际销售分成。',
      },
      contact: {
        title: '联系我们 — 达人与品牌 | Macflu 麦弗鲁',
        desc: '达人合作请联系 cast@macflu.com，品牌与广告主请联系 brand@macflu.com。平均 3 日内回复。',
      },
    },

    hero: {
      floatWords: ['Influence.', 'Curated.', 'Seoul ↔ Worldwide'],
      metaLeft: 'MACFLU',
      subLine1: '为品牌披上影响力的时尚 MCN。',
      subLine2: '建立在海外买手店直签与韩国奢侈品供应链之上。',
      index: '01 / 08 — Identity · 启航',
      scroll: 'SCROLL',
    },

    marquee: [
      '成为全球第一的时尚 MCN',
      '签约海外达人',
      '助力韩国达人进入海外平台',
      '带韩国品牌出海',
      '进入海外市场',
      '海外奢侈品牌进口、供货与商务合作',
    ],

    identity: {
      h1: '把时尚的资产，',
      h2: '变成内容。',
      p1: '从奢侈品牌，到街头。',
      p2: '连接时尚品牌与影响力。',
      p3pre: '用',
      p3strong: '内容',
      p3post: '而非广告，连接品牌与达人。',
    },

    edge: {
      index: 'The Edge',
      headMeta: '核心资产。我们的起点更高。',
      titlePre: '我们的起点，',
      titleAcc: '更高。',
      sub: '我们从奢侈品供应链起步：50+ 家海外买手店官方直签，50 亿韩元规模的韩国本地库存，韩国第一的奢侈品供应网络。把这些资产转化为内容，就是麦弗鲁做的事。',
      metrics: [
        { num: '50', plus: true, label: '海外买手店官方直签' },
        { num: '50', unit: '亿韩元+', label: '韩国本地奢侈品库存' },
        { num: 'No.1', label: '韩国奢侈品供应网络' },
        { num: '官方', label: '官方进口链路直签' },
      ],
    },

    operate: {
      index: 'Operate',
      headMeta: '始于韩国，但不止于韩国。',
      hLine1: '我们的目标，是在',
      hLine2: '全球市场做出结果。',
      flows: [
        { t1: '海外品牌', t2: '对接', body: '买手店直签网络。每一季都有新阵容。' },
        { t1: '海外达人', t2: '签约', body: '与韩国内容合拍的海外达人。语调与市场，一起打通。' },
        { t1: '多渠道', t2: '内容', body: '一场企划，用不同平台的节奏呈现。' },
        { t1: '全球', t2: '电商', body: '看到即可买到。多国支付与物流全自动。' },
      ],
    },

    models: {
      index: 'Commercial Models',
      headMeta: '我们的三种合作方式',
      hLine1: '以三种方式',
      hLine2: '进行对接。',
      prev: '上一个',
      next: '下一个',
      slide: '第 ',
      cards: [
        { name1: 'Branded', name2: 'Content', small: '品牌内容',
          quote: '不是广告，而是保留品牌语调的内容企划。',
          bodyStrong: '按季度发布。', bodyRest: ' 多平台同步分发。达人的语调与品牌的语调，一气呵成。' },
        { name1: 'Live', name2: 'Commerce', small: '直播电商',
          quote: '从看到内容到完成下单，同一个画面。',
          bodyPre: 'Instagram、TikTok、YouTube 直播联动 ', bodyStrong: 'macflu.com', bodyRest: '。多国支付与物流全自动。' },
        { name1: 'Revenue', name2: 'Share', small: '收益分成 · 代销',
          quote: '零广告费，按实际销售分成。',
          bodyPre: '基于代销的分成结构。', bodyStrong: '品牌进入风险为零。', bodyRest: ' 自动对接经过审核的卖家资源池。' },
      ],
    },

    creators: {
      index: 'For Creators',
      headMeta: '达人的成长排在第一位',
      hPre: '达人的', hAcc: '成长', hPost: '排在第一位。',
      sub: '从企划到结算，以同伴的节奏一起经营。',
      supports: [
        { title: '内容企划与指导', body: '从企划到调性把控，按季度共同制定。' },
        { title: '经纪运营', body: '数据、日程、合约、结算，全包式运营。' },
        { title: '商务与联名', body: '动用买手店直签资源。用真货做真内容。' },
        { title: '拍摄支持', body: '场地、造型、制作全程支援。让你专注作品本身。' },
      ],
      cta: '申请加入',
    },

    brinkEntry: {
      hLine1: '麦弗鲁的', hLine2: '自动化基础设施。',
      subLine1: '让系统连接品牌与卖家。',
      subLine2: '不是外部 SaaS —— 是麦弗鲁的自研系统。',
      cta: '了解 Brink',
    },

    origin: {
      quoteLine1: '由韩国第一的奢侈品供应商打造的时尚 MCN。',
      quoteLine2: '我们在基础设施之上构建内容。',
      quoteLine3: '把橱窗之外的衣服，用内容穿上身。',
      sign: '— Founder · 麦弗鲁',
      ctaSub: '— FINAL · GET IN TOUCH',
      cta: 'Contact.',
    },

    footer: {
      desc: '由韩国第一的奢侈品供应商打造的时尚 MCN。用内容连接品牌与影响力。',
      colPages: 'Pages',
      colContact: '联系',
      tagCreator: '达人',
      tagBrand: '品牌',
      avg: '平均 3 日内回复',
      biz: {
        name: '公司名称', ceo: '法定代表人', reg: '营业执照号',
        tel: '电话', privacy: '个人信息保护负责人', addr: '地址',
        nameV: 'Macflu 麦弗鲁', ceoV: 'Lee Geung-jeong',
        addrV: '韩国首尔特别市江南区道谷路84街6号 B1层23号',
      },
      copy: '© 2026 Macflu',
      edition: 'EDITION 01 · SS 26 · SEOUL ↔ WORLDWIDE',
    },

    contact: {
      meta: '— CONTACT · 一屏 · 一行',
      h: 'Contact.',
      sub: '简单写几句就好。平均 3 日内回复。',
      tabs: ['达人', '品牌', '其他'],
      successH: '已收到 —— ', successAcc: '稍后回复。',
      successP: '平均 3 日内回复。',
      labelName: '— 姓名 / Name',
      phName: '请填写姓名', phNameBrand: '品牌或公司名',
      labelEmail: '— 邮箱 / Email',
      labelSnsCreator: '— 社交账号 · 小红书·抖音·Instagram 等',
      labelSnsBrand: '— 官网 / 社交账号',
      labelSnsOther: '— 链接（选填）',
      phSnsCreator: '@your_handle', phSnsOther: 'brand.com 或社交账号',
      labelMsg: '— 一句话说明',
      phMsgCreator: '想一起做的事，一句话。',
      phMsgBrand: '需要的量级。季度、品类、渠道。',
      phMsgOther: '关于什么，一句话。',
      hint: '一句话就够 —— 不必写长。',
      send: '发送 / Send',
      sending: '发送中…',
      errorH: '没有发送成功',
      errorP: '请稍后再试。如果着急，可以点下面的按钮直接发邮件。',
      errorCta: '用邮件发送',
      retry: '重试',
      asideMeta: '— DIRECT LINES',
      asideHPre: '最快的', asideHAcc: '路径。',
      chCreator: '— Creator · 达人合作',
      chBrand: '— Brand · 品牌与广告主',
      chPress: '— Press / Deck',
      pressValue: 'Pitch deck — PDF ↓',
      pressToast: 'Pitch deck PDF —— 准备中',
      avgLabel1: '平均回复', avgLabel2: 'Avg. response',
    },

    brink: {
      heroMetaLeft: 'MACFLU / BRINK',
      heroHLine1: '麦弗鲁的', heroHLine2: '自动化电商基础设施。',
      heroSub: '把品牌的商品交到经过审核的卖家手中 —— 由系统完成连接。不是外部 SaaS，而是麦弗鲁自研自营的系统。',
      howHeadMeta: '需要人工介入的时间，几乎为零',
      howHPre: '它如何', howHAcc: '运作。',
      steps: [
        { title: '供应商登记商品', body: '品牌方提交一次商品表。图片、尺码、价格、库存统一进入系统。' },
        { title: '自动上架到卖家渠道', body: '系统批量发布至经过审核的卖家渠道 —— SmartStore、11st、MUSTIT 等。' },
        { title: '库存·汇率·尺码实时同步', body: '同一商品在 N 个渠道售卖，库存始终以一处为准。汇率与价格自动跟随。' },
        { title: '成交即自动生成采购单', body: '卖家端完成支付，采购数据立刻回到供应商。几乎无需人工经手。' },
      ],
      stepChips: [
        ['SUPPLIER', 'ONBOARDING'],
        ['SmartStore', '11st', 'MUSTIT', '+ 10'],
        ['SYNC', '实时'],
        ['AUTO-PO', '采购自动化'],
      ],
      tag: '人工介入时间',
      forSupplierLabel: '— 03A · For Suppliers / 品牌方',
      forSupplierH: ['品牌的', '销售渠道，', '自动扩张。'],
      forSupplierList: [
        '新销售渠道自动扩张',
        '只对接麦弗鲁审核过的卖家',
        '无需外包库存与订单运营',
        '价格与曝光可按渠道单独控制',
      ],
      forSupplierCta: '成为供应商 →',
      forSellerLabel: '— 03B · For Sellers / 卖家',
      forSellerH: ['品质', '有保障的商品。', '零囤货压力。'],
      forSellerList: [
        '只经手麦弗鲁亲自登记的商品',
        '无需囤货的代销结构',
        '自动化让运营人力降到最低',
        '提供销售数据看板',
      ],
      forSellerCta: '成为卖家 →',
      curationHeadMeta: '供应品类与卖家的把控',
      curationPull1pre: '只有麦弗鲁', curationPull1strong: '亲自挑选的卖家，',
      curationPull2pre: '只有麦弗鲁', curationPull2strong: '亲自登记的商品。',
      curationCards: [
        { h: '— Channel-level control', p: '供应商可按渠道、按卖家控制曝光品类。扩张是自动的，曝光不是。' },
        { h: '— Curated supply', p: '并非所有商品都对所有卖家开放。以筛选的权威，建立市场的信任。' },
      ],
      ctaHeadMeta: '加入',
      ctaSupplierH: ['成为', '供应商。'],
      ctaSellerH: ['成为', '卖家。'],
    },
  },
};

// T는 반드시 window의 프로퍼티여야 한다. Babel standalone이 파일마다 스코프를
// 감쌀 수 있어, 지역 const/let으로 두면 다른 .jsx에서 보이지 않는다.
window.T = I18N.ko;
function setLangData(lang) { window.T = I18N[lang] || I18N.ko; }

window.I18N = I18N;
window.LANGS = LANGS;
window.LANG_LABEL = LANG_LABEL;
window.LANG_SHORT = LANG_SHORT;
window.HTML_LANG = HTML_LANG;
window.__setLangData = setLangData;
