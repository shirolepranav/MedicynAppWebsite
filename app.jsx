/* ============ Main App ============ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typography": "instrument",
  "heroLayout": "split"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply typography to root via data-attr
  React.useEffect(() => {
    document.documentElement.dataset.type = tweaks.typography;
  }, [tweaks.typography]);

  return (
    <>
      <Nav />
      <Hero layout={tweaks.heroLayout} />
      <Marquee />
      <Privacy />
      <Story />
      <Features />
      <Gallery />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Typography pairing">
          <TweakRadio
            label="Type system"
            value={tweaks.typography}
            onChange={(v) => setTweak("typography", v)}
            options={[
              { value: "instrument", label: "Instrument + Inter" },
              { value: "newsreader", label: "Newsreader + Geist" },
              { value: "helvetica", label: "Helvetica only" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero layout">
          <TweakRadio
            label="Phone arrangement"
            value={tweaks.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "stacked", label: "Stacked trio" },
              { value: "split", label: "Split layout" },
              { value: "trio", label: "Three across" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
