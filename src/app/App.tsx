import { useState, useEffect, useRef, useCallback } from "react";
import {
  Code2,
  Shield,
  Cpu,
  Users,
  Globe,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Zap,
  Lock,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Terminal,
  Database,
  Network,
  Search,
  BarChart2,
  Layers,
  Star,
  MonitorSmartphone,
  GitBranch,
  Wifi,
} from "lucide-react";

// ─── SHARED HOOK ──────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── CONSTANTS ────────────────────────────────────────────
const NAV_LINKS = ["Home", "About", "Services", "Solutions", "Projects", "Contact"];

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom responsive websites and web applications engineered for performance, scalability, and exceptional user experience.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security assessments, threat protection, vulnerability management, and security awareness programs.",
    tags: ["Penetration Testing", "VAPT", "Awareness"],
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    desc: "Strategic technology guidance, digital transformation roadmaps, and IT infrastructure planning for modern businesses.",
    tags: ["Strategy", "Architecture", "Cloud"],
  },
  {
    icon: Code2,
    title: "Software Solutions",
    desc: "Purpose-built tools, automation systems, and custom applications that streamline operations and drive productivity.",
    tags: ["Python", "APIs", "Automation"],
  },
];

const CYBER_FEATURES = [
  { icon: Search, title: "Threat Awareness", desc: "Proactive identification and analysis of emerging threats before they impact your operations." },
  { icon: Lock, title: "Security Best Practices", desc: "Implementation of industry-standard frameworks including OWASP, NIST, and ISO 27001." },
  { icon: Network, title: "Vulnerability Assessment", desc: "Systematic evaluation of your systems, applications, and networks for exploitable weaknesses." },
  { icon: Terminal, title: "Secure Development", desc: "Security integrated at every stage of the software development lifecycle — not bolted on." },
];

const PROJECTS = [
  {
    title: "Enterprise CRM Platform",
    desc: "Full-stack customer relationship management system with role-based access, analytics dashboard, and API integrations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop&auto=format",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Web Application",
  },
  {
    title: "Security Audit Portal",
    desc: "Automated vulnerability scanning and reporting platform used by SMEs to monitor their digital attack surface.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=640&h=400&fit=crop&auto=format",
    tags: ["Python", "REST API", "Docker"],
    category: "Security Project",
  },
  {
    title: "GoodAngel D Travel Site",
    desc: "Professional responsive business website for a travel and tour company, with booking inquiry flow and destination showcase.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=640&h=400&fit=crop&auto=format",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Business Website",
  },
  {
    title: "Inventory Management System",
    desc: "Real-time stock tracking, supplier management, and automated reorder alerts for a distribution company.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=640&h=400&fit=crop&auto=format",
    tags: ["React", "Firebase", "TypeScript"],
    category: "Digital Solution",
  },
];

const WHY_US = [
  { icon: Zap, title: "Modern Technology", desc: "We build with current, production-proven technologies — not legacy stacks." },
  { icon: Shield, title: "Security First", desc: "Security is not an afterthought. Every solution we deliver is built with protection in mind." },
  { icon: Users, title: "Client-Centred", desc: "Your goals define our approach. We listen, plan, and execute around your outcomes." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "We iterate, improve, and support our solutions long after delivery." },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Security Focused" },
];

// ─── HELPERS ──────────────────────────────────────────────
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const SG = "'Space Grotesk', sans-serif";
const MN = "'Manrope', sans-serif";

// ─── SECTION EYEBROW ──────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px" style={{ backgroundColor: "#06b6d4" }} />
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color: "#06b6d4", fontFamily: MN }}
      >
        {children}
      </span>
      <div className="w-6 h-px" style={{ backgroundColor: "#06b6d4" }} />
    </div>
  );
}

// ─── ANIMATED GRID BG ─────────────────────────────────────
function GridBg({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(37,99,235,1) 1px, transparent 1px),
                          linear-gradient(90deg,rgba(37,99,235,1) 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
        opacity,
      }}
    />
  );
}

// ─── HERO ABSTRACT SVG ────────────────────────────────────
function HeroGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow blobs */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#2563eb", top: "10%", right: "10%" }} />
      <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-15" style={{ backgroundColor: "#06b6d4", bottom: "15%", left: "15%" }} />

      <svg viewBox="0 0 520 520" className="w-full max-w-lg opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="260" cy="260" r="230" stroke="#2563eb" strokeWidth="0.6" strokeDasharray="8 5" opacity="0.4" />
        <circle cx="260" cy="260" r="180" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />
        <circle cx="260" cy="260" r="130" stroke="#2563eb" strokeWidth="0.8" opacity="0.25" />
        {/* Central shield */}
        <path d="M260 160 L310 185 L310 240 Q310 290 260 315 Q210 290 210 240 L210 185 Z"
          stroke="#06b6d4" strokeWidth="1.5" fill="rgba(6,182,212,0.06)" />
        <path d="M245 250 L256 262 L278 238" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Network nodes */}
        {[
          [260, 60], [400, 140], [440, 300], [360, 430], [160, 430], [80, 300], [120, 140],
          [320, 110], [410, 210], [390, 370], [260, 450], [130, 370], [110, 210], [200, 110],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i < 7 ? 4 : 2.5} fill={i < 7 ? "#2563eb" : "#06b6d4"} opacity={i < 7 ? 0.8 : 0.5} />
        ))}
        {/* Connection lines */}
        {[
          [260,60,400,140],[400,140,440,300],[440,300,360,430],[360,430,160,430],
          [160,430,80,300],[80,300,120,140],[120,140,260,60],
          [260,60,260,160],[400,140,310,185],[440,300,310,240],
          [360,430,260,315],[160,430,210,315],[80,300,210,240],[120,140,210,185],
          [320,110,260,60],[320,110,400,140],[410,210,400,140],[410,210,440,300],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="0.6" opacity="0.3" />
        ))}
        {/* Floating data nodes */}
        <rect x="70" y="80" width="60" height="28" rx="4" stroke="#2563eb" strokeWidth="0.8" fill="rgba(37,99,235,0.08)" opacity="0.7" />
        <text x="100" y="99" textAnchor="middle" fontSize="8" fill="#06b6d4" fontFamily="monospace" opacity="0.9">SECURE</text>
        <rect x="390" y="60" width="60" height="28" rx="4" stroke="#06b6d4" strokeWidth="0.8" fill="rgba(6,182,212,0.08)" opacity="0.7" />
        <text x="420" y="79" textAnchor="middle" fontSize="8" fill="#06b6d4" fontFamily="monospace" opacity="0.9">01001</text>
        <rect x="60" y="400" width="60" height="28" rx="4" stroke="#2563eb" strokeWidth="0.8" fill="rgba(37,99,235,0.08)" opacity="0.6" />
        <text x="90" y="419" textAnchor="middle" fontSize="8" fill="#06b6d4" fontFamily="monospace" opacity="0.9">API/v2</text>
        <rect x="400" y="410" width="60" height="28" rx="4" stroke="#06b6d4" strokeWidth="0.8" fill="rgba(6,182,212,0.08)" opacity="0.6" />
        <text x="430" y="429" textAnchor="middle" fontSize="8" fill="#06b6d4" fontFamily="monospace" opacity="0.9">CLOUD</text>
      </svg>
    </div>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, visible } = useInView();
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 border group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#0c1628",
        borderColor: "rgba(37,99,235,0.15)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 90}ms, transform 0.55s ease ${index * 90}ms, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: "0 0 0 0 transparent",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(37,99,235,0.12)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: "rgba(37,99,235,0.15)" }}
      >
        <Icon size={22} style={{ color: "#2563eb" }} />
      </div>
      <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: SG }}>{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full border font-medium"
            style={{ borderColor: "rgba(37,99,235,0.2)", color: "#5d7399", backgroundColor: "rgba(37,99,235,0.07)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{
        backgroundColor: "#0c1628",
        borderColor: "rgba(37,99,235,0.15)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 90}ms, transform 0.55s ease ${index * 90}ms, border-color 0.3s`,
      }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1628]/90 via-transparent to-transparent" />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border"
          style={{ color: "#06b6d4", borderColor: "rgba(6,182,212,0.3)", backgroundColor: "rgba(6,182,212,0.1)", backdropFilter: "blur(4px)" }}
        >
          {project.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: SG }}>{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ color: "#5d7399", backgroundColor: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
              {tag}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-1.5 text-xs font-semibold transition-colors group/link"
          style={{ color: "#2563eb" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#06b6d4")}
          onMouseLeave={e => (e.currentTarget.style.color = "#2563eb")}
        >
          View Project <ExternalLink size={11} />
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "services", "solutions", "projects", "contact"];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const nav = useCallback((id: string) => { setMenuOpen(false); scrollTo(id); }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: MN }}>

      {/* ── NAVBAR ──────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(6,13,26,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(37,99,235,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => nav("home")} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)" }}>
              <Cpu size={16} className="text-white" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white" style={{ fontFamily: SG, fontSize: 15 }}>DALL</span>
              <span className="font-bold tracking-tight ml-1" style={{ fontFamily: SG, fontSize: 15, color: "#06b6d4" }}>TECH</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(label => {
              const id = label.toLowerCase();
              const active = activeSection === id;
              return (
                <button
                  key={label}
                  onClick={() => nav(id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? "#fff" : "rgba(232,238,248,0.55)",
                    backgroundColor: active ? "rgba(37,99,235,0.18)" : "transparent",
                  }}
                  onMouseEnter={e => !active && (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => !active && (e.currentTarget.style.color = "rgba(232,238,248,0.55)")}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => nav("contact")}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", fontFamily: SG }}
            >
              Get Started <ArrowRight size={14} />
            </button>
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border text-foreground/70 hover:text-white transition-colors"
              style={{ borderColor: "rgba(37,99,235,0.3)" }}
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t" style={{ backgroundColor: "rgba(6,13,26,0.98)", borderColor: "rgba(37,99,235,0.15)" }}>
            <div className="max-w-7xl mx-auto px-6 py-5 space-y-1">
              {NAV_LINKS.map(label => (
                <button
                  key={label}
                  onClick={() => nav(label.toLowerCase())}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: "rgba(232,238,248,0.6)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(37,99,235,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => nav("contact")}
                className="w-full mt-3 px-4 py-3 rounded-xl text-sm font-bold text-white text-center"
                style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <GridBg opacity={0.035} />
        {/* Radial glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 -top-20 -left-20" style={{ backgroundColor: "#2563eb" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 top-1/2 right-0" style={{ backgroundColor: "#06b6d4" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-xs font-semibold tracking-widest uppercase"
                style={{ borderColor: "rgba(6,182,212,0.3)", color: "#06b6d4", backgroundColor: "rgba(6,182,212,0.07)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Technology & Security Solutions
              </div>

              <h1
                className="font-bold leading-[1.06] text-white mb-6"
                style={{ fontFamily: SG, fontSize: "clamp(2.5rem,5vw,4rem)" }}
              >
                Building{" "}
                <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Secure
                </span>
                <br />Digital Solutions
                <br />For The Future.
              </h1>

              <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(232,238,248,0.6)" }}>
                Dall Tech helps businesses and individuals build, secure, and improve their digital
                presence through innovative technology solutions and expert cybersecurity services.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => nav("services")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", fontFamily: SG }}
                >
                  Explore Services <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => nav("contact")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all"
                  style={{ borderColor: "rgba(37,99,235,0.35)", color: "rgba(232,238,248,0.7)", fontFamily: SG }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.7)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.35)"; e.currentTarget.style.color = "rgba(232,238,248,0.7)"; }}
                >
                  Contact Us
                </button>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-8 pt-8 border-t" style={{ borderColor: "rgba(37,99,235,0.15)" }}>
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: SG }}>{value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(232,238,248,0.45)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — graphic */}
            <div className="hidden lg:block h-[520px]">
              <HeroGraphic />
            </div>
          </div>
        </div>

        <button onClick={() => nav("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={22} style={{ color: "rgba(232,238,248,0.25)" }} />
        </button>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section id="about" className="py-28 relative" style={{ backgroundColor: "#060d1a" }}>
        <GridBg opacity={0.025} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border aspect-[4/3]" style={{ borderColor: "rgba(37,99,235,0.2)" }}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
                  alt="Technology professional at work"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#060d1a]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 px-6 py-4 rounded-2xl border shadow-2xl"
                style={{ backgroundColor: "#0c1628", borderColor: "rgba(6,182,212,0.25)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(6,182,212,0.15)" }}>
                    <Shield size={18} style={{ color: "#06b6d4" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white" style={{ fontFamily: SG }}>Security First</p>
                    <p className="text-xs" style={{ color: "#5d7399" }}>Every solution we build</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Eyebrow>About Dall Tech</Eyebrow>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: SG }}
              >
                Technology Built for{" "}
                <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Real Impact
                </span>
              </h2>
              <p className="leading-relaxed mb-5 text-sm" style={{ color: "rgba(232,238,248,0.6)" }}>
                Dall Tech is a technology solutions company focused on delivering innovative, secure, and
                scalable digital products for businesses and individuals navigating the modern digital landscape.
              </p>
              <p className="leading-relaxed mb-8 text-sm" style={{ color: "rgba(232,238,248,0.6)" }}>
                From web development to cybersecurity, we bring together technical expertise and
                strategic thinking to help our clients stay protected, productive, and competitive.
              </p>

              {/* Mission/Vision */}
              <div className="space-y-4 mb-8">
                {[
                  { label: "Mission", text: "To deliver reliable, secure, and impactful technology solutions that empower businesses to grow with confidence." },
                  { label: "Vision", text: "A digitally secure world where every business, regardless of size, has access to professional-grade technology." },
                ].map(({ label, text }) => (
                  <div key={label} className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(37,99,235,0.06)", borderColor: "rgba(37,99,235,0.15)" }}>
                    <p className="text-xs font-bold mb-1.5 uppercase tracking-widest" style={{ color: "#2563eb", fontFamily: SG }}>{label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,248,0.6)" }}>{text}</p>
                  </div>
                ))}
              </div>

              {/* Value cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Innovation" },
                  { icon: Shield, label: "Security" },
                  { icon: CheckCircle2, label: "Reliability" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-xl p-4 border text-center group hover:border-blue-500/30 transition-colors"
                    style={{ backgroundColor: "#0c1628", borderColor: "rgba(37,99,235,0.15)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "rgba(37,99,235,0.15)" }}>
                      <Icon size={16} style={{ color: "#2563eb" }} />
                    </div>
                    <p className="text-xs font-bold text-white" style={{ fontFamily: SG }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section id="services" className="py-28 relative" style={{ backgroundColor: "#070e1c" }}>
        <GridBg opacity={0.03} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: SG }}>
              Services Built Around{" "}
              <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Your Needs
              </span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,248,0.55)" }}>
              From secure web development to IT strategy, every service is delivered with precision and a security-first mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => <ServiceCard key={svc.title} service={svc} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CYBERSECURITY SECTION ───────────────────── */}
      <section id="solutions" className="py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#0a1628 0%,#060d1a 50%,#081424 100%)" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#2563eb" strokeWidth="1" fill="none" strokeDasharray="10 6" />
            <circle cx="200" cy="200" r="120" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeDasharray="6 10" />
            <circle cx="200" cy="200" r="60" stroke="#2563eb" strokeWidth="1.2" fill="none" />
            <path d="M200 100 L230 120 L230 175 Q230 220 200 240 Q170 220 170 175 L170 120 Z" stroke="#06b6d4" strokeWidth="1.5" fill="rgba(6,182,212,0.05)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>Cybersecurity</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: SG }}>
                Secure Your{" "}
                <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Digital Future
                </span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(232,238,248,0.6)" }}>
                In a world where threats evolve daily, proactive security is not optional — it is essential.
                Dall Tech delivers practical cybersecurity solutions tailored to the real threats your business faces.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "Regular security health checks and assessments",
                  "Employee security awareness training",
                  "Secure code review and development guidance",
                  "Incident response planning and support",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#06b6d4" }} />
                    <span className="text-sm" style={{ color: "rgba(232,238,248,0.65)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => nav("contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)", fontFamily: SG }}
              >
                Request Security Assessment <ArrowRight size={15} />
              </button>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {CYBER_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5 border group hover:border-blue-500/30 transition-colors"
                  style={{ backgroundColor: "#0c1628", borderColor: "rgba(37,99,235,0.15)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.2),rgba(6,182,212,0.15))" }}>
                    <Icon size={18} style={{ color: "#06b6d4" }} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: SG }}>{title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(232,238,248,0.5)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────── */}
      <section id="projects" className="py-28 relative" style={{ backgroundColor: "#060d1a" }}>
        <GridBg opacity={0.025} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow>Our Work</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: SG }}>
                Projects &amp;{" "}
                <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Delivered Solutions
                </span>
              </h2>
            </div>
            <p className="text-sm max-w-xs text-right leading-relaxed" style={{ color: "rgba(232,238,248,0.45)" }}>
              A curated selection of digital solutions built for real clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────── */}
      <section className="py-28 relative" style={{ background: "linear-gradient(135deg,#0e1a32 0%,#060d1a 100%)" }}>
        <GridBg opacity={0.03} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Why Dall Tech</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: SG }}>
              The Dall Tech{" "}
              <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Advantage
              </span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,248,0.5)" }}>
              We combine technical excellence with a client-first approach to deliver outcomes, not just deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => {
              const { ref, visible } = useInView();
              return (
                <div
                  key={title}
                  ref={ref}
                  className="rounded-2xl p-6 border group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{
                    backgroundColor: "#0c1628",
                    borderColor: "rgba(37,99,235,0.15)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.3s`,
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.2),rgba(6,182,212,0.1))" }}>
                    <Icon size={22} style={{ color: "#2563eb" }} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: SG }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(232,238,248,0.5)" }}>{desc}</p>
                </div>
              );
            })}
          </div>

          {/* Testimonial strip */}
          <div
            className="rounded-2xl p-8 border flex flex-col md:flex-row items-center gap-6"
            style={{ backgroundColor: "rgba(37,99,235,0.07)", borderColor: "rgba(37,99,235,0.2)" }}
          >
            <div className="flex shrink-0 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c49a26" style={{ color: "#c49a26" }} />)}
            </div>
            <p className="text-sm italic leading-relaxed" style={{ color: "rgba(232,238,248,0.65)" }}>
              &ldquo;Dall Tech delivered our project on time and with a level of security consciousness we hadn&apos;t seen
              from other developers. They genuinely care about what they build.&rdquo;
            </p>
            <div className="shrink-0 text-right">
              <p className="text-xs font-bold text-white" style={{ fontFamily: SG }}>Business Client</p>
              <p className="text-xs" style={{ color: "#5d7399" }}>E-commerce Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact" className="py-28 relative" style={{ backgroundColor: "#070e1c" }}>
        <GridBg opacity={0.028} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <Eyebrow>Get In Touch</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: SG }}>
                Ready to Build
                <br />
                <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Something Great?
                </span>
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(232,238,248,0.55)" }}>
                Whether you need a new web application, a security assessment, or strategic IT guidance —
                tell us about your challenge and we will respond within 24 hours.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Mail, label: "Email", value: "hello@dalltech.com" },
                  { icon: Phone, label: "Phone", value: "+234 000 000 0000" },
                  { icon: MapPin, label: "Location", value: "Nigeria — Remote Available" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl border"
                    style={{ backgroundColor: "#0c1628", borderColor: "rgba(37,99,235,0.15)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(37,99,235,0.15)" }}>
                      <Icon size={16} style={{ color: "#2563eb" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#5d7399", fontFamily: SG }}>{label}</p>
                      <p className="text-sm text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services quick-pick */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#5d7399", fontFamily: SG }}>I&apos;m interested in:</p>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Cybersecurity", "IT Consulting", "Software Solutions", "Security Audit"].map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full border cursor-default transition-colors"
                      style={{ borderColor: "rgba(37,99,235,0.2)", color: "#5d7399" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border p-8" style={{ backgroundColor: "#0c1628", borderColor: "rgba(37,99,235,0.18)" }}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.2),rgba(6,182,212,0.15))" }}>
                    <CheckCircle2 size={28} style={{ color: "#06b6d4" }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: SG }}>Message Sent</h3>
                  <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(232,238,248,0.5)" }}>
                    Thank you for reaching out. Our team will review your enquiry and respond within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-xs font-semibold underline underline-offset-4"
                    style={{ color: "#2563eb" }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: SG }}>Request a Consultation</h3>
                    <p className="text-xs mb-6" style={{ color: "rgba(232,238,248,0.4)" }}>All fields required. We respond within 24 hours.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "Full Name", key: "name", type: "text", placeholder: "Jane Smith" },
                      { label: "Email Address", key: "email", type: "email", placeholder: "jane@company.com" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#5d7399", fontFamily: SG }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={e => setForm(s => ({ ...s, [key]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder:text-transparent focus:outline-none transition-colors"
                          style={{
                            backgroundColor: "#101f3a",
                            borderColor: "rgba(37,99,235,0.2)",
                            caretColor: "#2563eb",
                          }}
                          onFocus={e => (e.target.style.borderColor = "rgba(37,99,235,0.5)")}
                          onBlur={e => (e.target.style.borderColor = "rgba(37,99,235,0.2)")}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#5d7399", fontFamily: SG }}>
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Your company name (optional)"
                      value={form.company}
                      onChange={e => setForm(s => ({ ...s, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border text-sm text-white focus:outline-none transition-colors"
                      style={{ backgroundColor: "#101f3a", borderColor: "rgba(37,99,235,0.2)" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(37,99,235,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(37,99,235,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#5d7399", fontFamily: SG }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, challenge, or question in detail..."
                      value={form.message}
                      onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border text-sm text-white focus:outline-none transition-colors resize-none"
                      style={{ backgroundColor: "#101f3a", borderColor: "rgba(37,99,235,0.2)" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(37,99,235,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(37,99,235,0.2)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", fontFamily: SG }}
                  >
                    <Cpu size={16} />
                    Request Consultation
                  </button>
                  <p className="text-xs text-center" style={{ color: "rgba(232,238,248,0.3)" }}>
                    We typically respond within 24 working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ backgroundColor: "#030810", borderTop: "1px solid rgba(37,99,235,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)" }}>
                  <Cpu size={16} className="text-white" />
                </div>
                <div>
                  <span className="font-bold text-white tracking-tight" style={{ fontFamily: SG }}>DALL</span>
                  <span className="font-bold ml-1 tracking-tight" style={{ fontFamily: SG, color: "#06b6d4" }}>TECH</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(232,238,248,0.4)" }}>
                Technology &amp; Security Solutions. Building secure digital experiences for businesses and individuals.
              </p>
              <div className="flex gap-3">
                {[Globe, GitBranch, Mail].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 rounded-lg border flex items-center justify-center cursor-pointer transition-colors"
                    style={{ borderColor: "rgba(37,99,235,0.2)", color: "rgba(232,238,248,0.35)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)"; e.currentTarget.style.color = "rgba(232,238,248,0.35)"; }}>
                    <Icon size={15} />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(232,238,248,0.3)", fontFamily: SG }}>Navigation</p>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link}>
                    <button onClick={() => nav(link.toLowerCase())}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(232,238,248,0.4)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,238,248,0.4)")}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(232,238,248,0.3)", fontFamily: SG }}>Services</p>
              <ul className="space-y-3">
                {["Web Development", "Cybersecurity", "IT Consulting", "Software Solutions", "Security Audits"].map(s => (
                  <li key={s} className="text-sm" style={{ color: "rgba(232,238,248,0.4)" }}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "rgba(37,99,235,0.1)" }}>
            <p className="text-xs" style={{ color: "rgba(232,238,248,0.25)" }}>
              © 2025 Dall Tech. Technology &amp; Security Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map(link => (
                <button key={link} className="text-xs transition-colors"
                  style={{ color: "rgba(232,238,248,0.25)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(232,238,248,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,238,248,0.25)")}>
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
