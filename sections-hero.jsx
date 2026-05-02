/* ============ Sections: Nav, Hero, Marquee ============ */

const APP_STORE_URL = "https://apps.apple.com/in/app/medicyn/id6760617881";

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-brand">
        <img src="assets/logo.png" alt="" style={{ width: "40px" }} />
        <span>Medicyn</span>
      </a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href={APP_STORE_URL} target="_blank" rel="noopener" className="btn btn-primary" style={{ backgroundColor: "rgb(20, 32, 30)", color: "rgb(255, 255, 255)" }}>
          Download <span style={{ display: "inline-flex", width: 14, height: 14 }}>{Icons.arrow}</span>
        </a>
      </div>
    </nav>);

}

function Hero({ layout = "stacked" }) {
  // Tilt the hero phones based on cursor position for a subtle parallax
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.setProperty("--mx", x);
      el.style.setProperty("--my", y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const headline =
  <h1 className="serif h-display hero-headline" aria-label="Your health, on your phone. Only your phone.">
      <span className="hero-line stagger-line"><span className="line-inner">Your health,</span></span>
      <span className="hero-line stagger-line"><span className="line-inner">on your phone.</span></span>
      <span className="hero-line stagger-line"><span className="line-inner" style={{ fontStyle: "italic", color: "var(--teal)" }}>Only your phone.</span></span>
    </h1>;


  const copy =
  <div className="hero-copy">
      <span className="eyebrow">Medicyn for iOS</span>
      <div style={{ marginTop: 28 }}>{headline}</div>
      <p className="lede" style={{ marginTop: 32 }}>A private, on-device vault for your complete medical history.<br />
No cloud. No accounts. No tracking. Just your records, organized the way they should have been all along.


    </p>
      <div className="hero-actions" style={{ marginTop: 36 }}>
        <AppStoreBadge url={APP_STORE_URL} />
        <a href="#features" className="btn btn-ghost btn-large">
          See how it works
          <span style={{ display: "inline-flex", width: 14, height: 14 }}>{Icons.arrow}</span>
        </a>
      </div>
    </div>;


  const phones = layout === "trio" ?
  <div className="hero-phones">
      <div className="float-y" style={{ transform: "translateY(40px)" }}>
        <Phone src="assets/screen-records-grid-dark.png" size="sm" />
      </div>
      <div>
        <Phone src="assets/screen-home.png" size="md" />
      </div>
      <div className="float-y-delay" style={{ transform: "translateY(40px)" }}>
        <Phone src="assets/screen-medication.png" size="sm" />
      </div>
    </div> :
  layout === "split" ?
  <div className="hero-phones" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <div className="phone-stack">
        <Phone src="assets/screen-records-dark.png" size="sm" className="phone-back float-y-delay" />
        <Phone src="assets/screen-home.png" size="md" className="phone-front float-y" />
      </div>
    </div> :

  <div className="hero-phones">
      <div className="phone-stack" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <Phone src="assets/screen-records-dark.png" size="sm" className="phone-back float-y-delay" />
        <Phone src="assets/screen-home.png" size="md" className="phone-front float-y" />
        <Phone src="assets/screen-medication.png" size="sm" className="phone-back-r float-y" />
      </div>
    </div>;


  return (
    <section
      className={`hero hero-layout-${layout}`}
      id="top"
      ref={stageRef}
      style={{


























        // CSS vars used for parallax
      }}>
      <div className="hero-bg"></div>
      <div className="hero-grain"></div>
      <div className="container hero-inner">
        {copy}
        {phones}
      </div>
    </section>);}function Marquee() {const items = ["Ailments", "Medications", "Symptoms", "Allergies", "Vaccines", "Lab reports", "Surgeries", "Appointments", "Prescriptions", "Documents"]; // Duplicate for seamless loop
  const all = [...items, ...items];return <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((t, i) => <span className="marquee-item" key={i}>{t}</span>)}
      </div>
    </div>;}window.Nav = Nav;
window.Hero = Hero;
window.Marquee = Marquee;
window.APP_STORE_URL = APP_STORE_URL;