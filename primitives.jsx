/* ============ Reusable building blocks ============ */

/* Phone mockup */
function Phone({ src, size = "md", className = "", style }) {
  const sizeClass = size === "sm" ? "phone-sm" : size === "lg" ? "phone-lg" : size === "md" ? "phone-md" : "";
  return (
    <div className={`phone ${sizeClass} ${className}`} style={style}>
      <div className="phone-notch"></div>
      <div className="phone-screen">
        <img src={src} alt="" loading="lazy" />
      </div>
    </div>);

}

/* Reveal-on-scroll wrapper */
function Reveal({ children, className = "", stagger = false, as: Tag = "div", ...props }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`} {...props}>
      {children}
    </Tag>);

}

/* App Store CTA badge */
function AppStoreBadge({ url, className = "" }) {
  return (
    <a href={url} className={`appstore-badge ${className}`} target="_blank" rel="noopener">
      <span className="apple">{Icons.apple}</span>
      <span className="label">
        <small style={{ fontFamily: "-apple-system" }}>Download on the</small>
        <span>App Store</span>
      </span>
    </a>);

}

/* Magnetic button (subtle hover effect) */
function MagneticButton({ children, className = "", ...props }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div className="magnetic-wrap" onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: "inline-block" }}>
      <button ref={ref} className={className} {...props} style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}>
        {children}
      </button>
    </div>);

}

/* Animated counter */
function Counter({ to, duration = 1600, suffix = "" }) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

window.Phone = Phone;
window.Reveal = Reveal;
window.AppStoreBadge = AppStoreBadge;
window.MagneticButton = MagneticButton;
window.Counter = Counter;