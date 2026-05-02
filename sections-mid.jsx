/* ============ Privacy manifesto, Story (sticky), Features grid ============ */

function Privacy() {
  const items = [
  "No cloud syncing",
  "No accounts required",
  "No third-party tracking",
  "No data collection",
  "No ads, ever"];

  return (
    <section className="section manifesto" id="privacy">
      <div className="container">
        <div className="manifesto-layout">
          <Reveal>
            <span className="eyebrow">Privacy by design</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              Your health is <em>yours</em>. We made sure it stays that way.
            </h2>
            <p className="lede" style={{ marginTop: 28 }}>Most health apps treat your records as data to be moved, mined, and monetized. Medicyn is the opposite. Everything lives on your device — encrypted, offline, and protected by biometrics. We can't see it. Nobody can.



            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,255,255,0.06)", borderRadius: 999, fontSize: 13, color: "var(--sage-light)" }}>
                <span style={{ width: 16, height: 16, display: "inline-flex" }}>{Icons.lock}</span>
                For you and your family
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,255,255,0.06)", borderRadius: 999, fontSize: 13, color: "var(--sage-light)" }}>
                <span style={{ width: 16, height: 16, display: "inline-flex" }}>{Icons.scan}</span>
                100% offline
              </div>
            </div>
          </Reveal>
          <Reveal stagger className="privacy-list">
            {items.map((t) =>
            <div className="privacy-item" key={t}>
                <span>{t}</span>
                <span className="x">{Icons.x}</span>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>);

}

function Story() {
  const panels = [
  {
    eyebrow: "Smart feature 01",
    title: "Your records, intelligently sorted.",
    body: "Medicyn understands what you've added. Track adherence. See illness frequency. Spot patterns. Your history isn't just stored — it's analyzed locally to help you understand your own health.",
    phone: "assets/screen-analytics-1.png"
  },
  {
    eyebrow: "Smart feature 02",
    title: "Scan and digitize. In seconds.",
    body: "Point your camera at a prescription, a lab report, or a hospital discharge form. Medicyn auto-detects edges, corrects perspective, and extracts the text — so every word is searchable later.",
    phone: "assets/screen-feature-01.png"
  },
  {
    eyebrow: "Smart feature 03",
    title: "Emergency card, one tap away.",
    body: "Ailments, medications, allergies, blood type, severity flags — all the information first responders need, ready to share when seconds matter.",
    phone: "assets/screen-emergency.png"
  },
  {
    eyebrow: "Smart feature 04",
    title: "See how everything connects.",
    body: "Link medications and prescriptions to specific ailments. Log symptom or allergy episodes over time. Medicyn shows you the full clinical picture in one clear timeline — not as a pile of disconnected records.",
    phone: "assets/screen-analytics-2.png"
  }];


  const trackRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, -r.top / total));
      const idx = Math.min(panels.length - 1, Math.floor(progress * panels.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="story" id="how">
      <div className="story-track" ref={trackRef}>
        <div className="story-stage">
          <div className="story-text">
            {panels.map((p, i) =>
            <div className={`story-text-panel ${i === active ? "active" : ""}`} key={i}>
                <span className="eyebrow">{p.eyebrow}</span>
                <h3 className="h-1">{p.title}</h3>
                <p className="lede">{p.body}</p>
              </div>
            )}
          </div>
          <div className="story-phones">
            {panels.map((p, i) => {
              const cls = i === active ? "active" : i < active ? "exited" : "";
              return (
                <div className={`story-phone-wrap ${cls}`} key={i}>
                  <Phone src={p.phone} size="md" />
                </div>);

            })}
          </div>
          <div className="story-progress">
            {panels.map((_, i) =>
            <div className={`story-progress-dot ${i === active ? "active" : ""}`} key={i} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile fallback */}
      <div className="story-mobile-phones">
        {panels.map((p, i) =>
        <div key={i} style={{ textAlign: "center", padding: "0 var(--gutter)" }}>
            <Phone src={p.phone} size="md" />
            <h3 className="h-3" style={{ marginTop: 24 }}>{p.title}</h3>
            <p className="body" style={{ marginTop: 12 }}>{p.body}</p>
          </div>
        )}
      </div>
    </section>);

}

function Features() {
  const features = [
  { icon: "ailment", tone: "warm", title: "Ailments", body: "With linked medications, prescriptions, and records for full context." },
  { icon: "pill", title: "Medications", body: "Dosages, schedules, status, and history — all in one place." },
  { icon: "symptom", tone: "rose", title: "Symptoms & reactions", body: "Track episodes over time and watch patterns emerge." },
  { icon: "calendar", tone: "sage", title: "Appointments", body: "Notes, follow-ups, and reminders — never miss what matters." },
  { icon: "prescription", tone: "violet", title: "Prescriptions", body: "Doctor and pharmacy details. Renew without the scramble." },
  { icon: "lab", title: "Lab reports", body: "Never lose another report. Save them no matter the format." },
  { icon: "surgery", tone: "rose", title: "Surgeries", body: "Procedure details, recovery notes, and important dates." },
  { icon: "allergy", tone: "warm", title: "Allergies", body: "Severity, reactions, and triggers — front and center." },
  { icon: "vaccine", tone: "sage", title: "Vaccinations", body: "A complete immunization history that travels with you." },
  { icon: "document", tone: "violet", title: "Documents", body: "Scanned medical files, discharge papers, anything else." },
  { icon: "scan", title: "Scan & digitize", body: "Auto-edge detection, perspective correction, OCR text extraction." },
  { icon: "emergency", tone: "rose", title: "Emergency card", body: "Critical info, accessible when you need it most." },
  { icon: "bell", tone: "warm", title: "Reminders", body: "Medication and appointment alerts. All running locally." },
  { icon: "search", title: "Global search", body: "Find any record instantly — including text inside scanned files." },
  { icon: "family", tone: "sage", title: "Family profiles", body: "Manage up to six members with fully separate profiles." },
  { icon: "backup", tone: "violet", title: "Backup & restore", body: "Export your data. Switch devices. Pick up exactly where you left off." }];


  return (
    <section className="section" id="features" style={{ background: "var(--bg)" }}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">Everything in one place</span>
              <h2 className="h-1" style={{ marginTop: 24 }}>
                Ways to keep <em>track</em> of your health.
              </h2>
            </div>
            <p className="lede">Ailments, medications, labs, scans, allergies, vaccinations — Medicyn covers every kind of record in your medical life, and links them together so context is never more than a tap away.



            </p>
          </div>
        </Reveal>
        <Reveal stagger className="features-grid">
          {features.map((f, i) =>
          <div className="feature-cell" key={f.title} data-tone={f.tone || "default"}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div className="icon-wrap">{Icons[f.icon]}</div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>);

}

window.Privacy = Privacy;
window.Story = Story;
window.Features = Features;