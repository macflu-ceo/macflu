// TweaksUI — Macflu tweaks panel
// Three controls: metric style / motion intensity / type scale.

function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Motion intensity" />
      <TweakRadio
        label="Marquee + floats"
        value={t.motionLevel}
        options={[
          { value: 'subtle', label: 'Subtle' },
          { value: 'standard', label: 'Standard' },
          { value: 'strong', label: 'Strong' },
        ]}
        onChange={(v) => setTweak('motionLevel', v)}
      />

      <TweakSection label="Type scale" />
      <TweakRadio
        label="Hero size"
        value={t.typeScale}
        options={[
          { value: 'realistic', label: 'Real.' },
          { value: 'magazine', label: 'Mag.' },
          { value: 'mega', label: 'Cover' },
        ]}
        onChange={(v) => setTweak('typeScale', v)}
      />

      <TweakSection label="Color emphasis" />
      <TweakRadio
        label="Hero accent"
        value={t.colorEmphasis}
        options={[
          { value: 'persian', label: 'Blue' },
          { value: 'tomato', label: 'Red' },
          { value: 'mustard', label: 'Yel.' },
          { value: 'balanced', label: 'Mix' },
        ]}
        onChange={(v) => setTweak('colorEmphasis', v)}
      />
    </TweaksPanel>
  );
}

window.TweaksUI = TweaksUI;
