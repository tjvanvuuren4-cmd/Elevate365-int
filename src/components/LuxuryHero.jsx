import { ArrowRight, BookOpen, Sparkles, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function LuxuryHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#03030b",
        color: "white",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
{/* LEFT IMAGE - ANIMATED */}
<motion.div
  animate={{
    scale: [1, 1.08, 1],
    y: [0, -28, 0],
    x: [0, 12, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "64%",
    backgroundImage: "url('/images/cyber-premium.webp')",
    backgroundSize: "cover",
    backgroundPosition: "left center",
    opacity: 0.96,
    filter: "drop-shadow(0 0 90px rgba(124,58,237,0.35))",
    zIndex: 2,
  }}
/>

<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(3,3,11,0) 0%, rgba(3,3,11,0.15) 30%, rgba(3,3,11,0.72) 52%, rgba(3,3,11,0.94) 72%, #03030b 100%)",
    zIndex: 3,
  }}
/>
      {/* NAV */}
      <nav
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3cff, #b56cff)",
            }}
          />
          <strong style={{ fontSize: 28, letterSpacing: "-1px" }}>
            Elevate365
          </strong>
        </div>

        <div
          style={{
            display: "flex",
            gap: 42,
            fontSize: 14,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          <span>Features</span>
          <span>Use cases</span>
          <span>Pricing</span>
          <span>Learn</span>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
            Log in
          </span>
          <button
            style={{
              border: "none",
              background: "linear-gradient(135deg, #7b3cff, #8f6bff)",
              color: "white",
              padding: "15px 26px",
              borderRadius: 999,
              fontWeight: 800,
            }}
          >
            Start free
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <main
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 32px 60px",
          display: "grid",
          gridTemplateColumns: "1.08fr 0.92fr",
          alignItems: "center",
          minHeight: "calc(100vh - 110px)",
        }}
      >
        <div />

        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(172,92,255,0.55)",
              color: "#c084fc",
              borderRadius: 999,
              padding: "13px 24px",
              fontWeight: 800,
              marginBottom: 34,
              background: "rgba(124,58,237,0.08)",
            }}
          >
            <Sparkles size={18} />
            Master the Digital Frontier
          </div>

          <h1
            style={{
              fontSize: "clamp(56px, 6vw, 92px)",
              lineHeight: "0.98",
              letterSpacing: "-4px",
              margin: 0,
              fontWeight: 950,
            }}
          >
            Master
            <br />
            Cybersecurity
            <br />
            <span
              style={{
                color: "#8b5cf6",
              }}
            >
              & Blockchain
            </span>
          </h1>

          <p
            style={{
              marginTop: 30,
              maxWidth: 620,
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Learn from industry experts and transform your career with
            comprehensive training in cybersecurity and blockchain technology.
            Join thousands of successful professionals building the future of
            tech.
          </p>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <motion.button
  whileHover={{ y: -3, scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => {
    document
      .getElementById("courses")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  style={{
    border: "none",
    background: "linear-gradient(135deg, #7b3cff, #8f6bff)",
    color: "white",
    padding: "18px 32px",
    borderRadius: 999,
    fontWeight: 900,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 18px 45px rgba(124,58,237,0.4)",
    cursor: "pointer",
  }}
>
  Explore Courses
  <ArrowRight size={20} />
</motion.button>         
          </div>

          <div
            style={{
              marginTop: 70,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
              maxWidth: 620,
            }}
          >
            {[
              [Users, "10K+", "Students"],
              [BookOpen, "20+", "Courses"],
              [Star, "4.8", "Rating"],
            ].map(([Icon, value, label]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  borderRight:
                    label !== "Rating"
                      ? "1px solid rgba(255,255,255,0.14)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 999,
                    border: "1px solid rgba(172,92,255,0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                  }}
                >
                  <Icon size={25} />
                </div>
                <div>
                  <div style={{ fontSize: 34, fontWeight: 950 }}>{value}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)" }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}