// app.jsx — root + tweaks
const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "css",
  "creatorLayout": "grid",
  "splitLayout": "side",
  "marqueeSpeed": 40
}/*EDITMODE-END*/;

function App() {
  const [lang, setLang] = useStateA("ko");
  const [page, setPage] = useStateA("home");
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = window.I18N[lang];

  useEffectA(() => {
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty("--marquee-dur", tweaks.marqueeSpeed + "s");
  }, [lang, tweaks.marqueeSpeed]);

  useEffectA(() => { window.scrollTo(0, 0); }, [page]);

  useFadeUp([page, lang, tweaks.heroVariant, tweaks.creatorLayout, tweaks.splitLayout]);

  let body;
  if (page === "home") body = <HomePage t={t} setPage={setPage} tweaks={tweaks} />;
  else if (page === "about") body = <AboutPage t={t} setPage={setPage} />;
  else if (page === "references") body = <ReferencesPage t={t} setPage={setPage} />;
  else if (page === "how") body = <HowPage t={t} setPage={setPage} />;
  else if (page === "services") body = <ServicesPage t={t} setPage={setPage} />;
  else if (page === "contact") body = <ContactPage t={t} />;

  return (
    <>
      <Nav lang={lang} setLang={setLang} page={page} setPage={setPage} t={t} />
      <main>{body}</main>
      <Footer t={t} setPage={setPage} />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero · 히어로" />
        <TweakRadio label="Variant" value={tweaks.heroVariant}
          options={[{value: "css", label: "Abstract"}, {value: "type", label: "Type"}, {value: "svg", label: "SVG"}]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="Split · 분기" />
        <TweakRadio label="Layout" value={tweaks.splitLayout}
          options={[{value: "side", label: "50/50"}, {value: "stack", label: "Stack"}, {value: "diag", label: "Diag"}]}
          onChange={(v) => setTweak("splitLayout", v)} />
        <TweakSection label="Motion · 모션" />
        <TweakSlider label="Marquee speed" value={tweaks.marqueeSpeed}
          min={12} max={80} step={2} unit="s"
          onChange={(v) => setTweak("marqueeSpeed", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
