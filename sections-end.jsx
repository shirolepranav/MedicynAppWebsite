/* ============ Gallery, Pricing, FAQ, Final CTA, Footer ============ */

function Gallery() {
  const cards = [
  { src: "assets/screen-home.png", label: "Home", tag: "Light mode" },
  { src: "assets/screen-records-dark.png", label: "All Records", tag: "Dark mode" },
  { src: "assets/screen-medication.png", label: "Medication detail", tag: "Light mode" },
  { src: "assets/screen-records-grid-dark.png", label: "Categories", tag: "Dark mode" },
  { src: "assets/screen-analytics-1.png", label: "Adherence", tag: "Analytics" },
  { src: "assets/screen-analytics-2.png", label: "Frequency", tag: "Analytics" }];


  const trackRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      const tr = trackRef.current;
      if (!sec || !tr) return;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      // animate when section is in viewport
      const range = vh + sec.offsetHeight;
      const pos = vh - r.top; // 0 when section starts entering, range when it has fully passed
      const p = Math.max(0, Math.min(1, pos / range));
      const max = tr.scrollWidth - window.innerWidth + 64;
      tr.style.transform = `translate3d(${-p * Math.max(0, max)}px, 0, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section gallery" ref={sectionRef}>
      <div className="container" style={{ paddingBottom: 24 }}>
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">A closer look</span>
              <h2 className="h-1" style={{ marginTop: 24 }}>
                Crafted for <em>everyday</em> use.
              </h2>
            </div>
            <p className="lede">Every screen designed with care. Choose between light and dark modes. Built to feel like a part of iOS — never a stranger to it.


            </p>
          </div>
        </Reveal>
      </div>
      <div className="gallery-track" ref={trackRef}>
        {cards.map((c, i) =>
        <div className="gallery-card" key={i}>
            <Phone src={c.src} size="md" />
          </div>
        )}
      </div>
    </section>);

}

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Pricing</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              Pay once. <em>Use forever.</em>
            </h2>
            <p className="lede" style={{ margin: "24px auto 0" }}>No subscriptions. No tiers. No upsells. A one-time fee for unlimited access to every current and future feature.


            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="pricing-card">
            <div className="pricing-tag">
              <span className="dot"></span> Lifetime access
            </div>
            <div className="pricing-price">
              $9.99<em style={{ color: "rgb(20, 32, 30)", fontFamily: "\"Instrument Serif\"" }}></em>
            </div>
            <div className="pricing-trial">7-day free trial. Then a one-time payment via Apple ID.</div>
            <ul className="pricing-includes">
              <li><span className="check">{Icons.check}</span> All record types & smart features</li>
              <li><span className="check">{Icons.check}</span> Up to 6 family profiles</li>
              <li><span className="check">{Icons.check}</span> Scan & OCR for documents</li>
              <li><span className="check">{Icons.check}</span> In-built analytics & smart search</li>
              <li><span className="check">{Icons.check}</span> Auto-populated Emergency card</li>
              <li><span className="check">{Icons.check}</span> All future updates included</li>
            </ul>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
              <AppStoreBadge url={APP_STORE_URL} />
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 24 }}>
              Switching devices? Use "Restore Purchases" to reactivate Lifetime Access.
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function FAQ() {
  const items = [
  {
    q: "Does Medicyn really keep all data on-device?",
    a: "Yes. Medicyn stores everything locally on your iPhone. Nothing is sent to a server, no account is ever created, and there's no analytics or telemetry. You can verify this by enabling Airplane Mode — the app works exactly the same."
  },
  {
    q: "What happens if I lose or replace my phone?",
    a: "Use the Backup & Restore feature to export your data before you switch. When you install Medicyn on your new device, import the backup file to restore everything. Your purchase is tied to your Apple ID, so 'Restore Purchases' brings back Lifetime Access automatically."
  },
  {
    q: "How does the scan & OCR feature work?",
    a: "Open the camera in Medicyn, point it at a prescription, lab report, or any document. The app automatically detects edges, corrects perspective, and extracts text — all using on-device machine learning. The extracted text is fully searchable across all your records."
  },
  {
    q: "Can I share my records with my doctor?",
    a: "Yes. You can share individual records or use the Emergency Card to share critical information instantly. Sharing happens through standard iOS share sheets — you choose where it goes and what's included."
  },
  {
    q: "How many family members can I add?",
    a: "Up to six. Each family profile is fully separate — separate records, separate timelines, separate emergency cards. One purchase covers your whole household."
  },
  {
    q: "Is there a subscription?",
    a: "No. After a 7-day free trial, you pay a small one-time fee through your Apple ID and you're done. No subscriptions, no ads, no surprise charges. All future features are included."
  }];


  const [open, setOpen] = React.useState(0);

  return (
    <section className="section" id="faq" style={{ background: "var(--bg)" }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Frequently asked</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              Questions, <em>answered</em>.
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="faq-list">
            {items.map((item, i) =>
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <span className="faq-toggle">{Icons.plus}</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Get Medicyn</span>
          <h2 className="h-1">
            Take your health <em>back</em>.
          </h2>
          <p className="lede">
            Join the people choosing private, on-device health records.
            7-day free trial. Then yours forever.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <AppStoreBadge url={APP_STORE_URL} />
          </div>
        </Reveal>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-row">
              <img src="assets/logo.png" alt="" />
              <span>Medicyn</span>
            </div>
            <p>A private, on-device health records vault for iPhone. No cloud. No accounts. No tracking.</p>
            <AppStoreBadge url={APP_STORE_URL} />
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Terms of Use</a></li>
              <li><a href="https://sable-banana-3d7.notion.site/Medicyn-Privacy-Policy-32a3f8dd0255805fbc15c660ed7789d8" target="_blank" rel="noopener">Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Medicyn. All rights reserved.</span>
          <span>Made with care for your health. Built in 🇨🇦</span>
        </div>
      </div>
    </footer>);

}

window.Gallery = Gallery;
window.Pricing = Pricing;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;