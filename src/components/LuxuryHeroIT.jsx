import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Headset,
  Cloud,
  Server,
  Lock,
  Activity,
  Building2,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const features = [
  [Headset, "Help Desk Support", "Fast remote and onsite IT assistance"],
  [Cloud, "Microsoft 365", "Cloud productivity and collaboration"],
  [Server, "Managed IT", "Proactive monitoring and maintenance"],
  [Lock, "Cybersecurity", "Protecting your business from cyber threats"],
];

const stats = [
  [Activity, "99.9%", "System Availability"],
  [Clock3, "24/7", "Monitoring"],
  [CheckCircle2, "<15 Min", "Response Time"],
  [Building2, "Business", "IT Solutions"],
];

export default function LuxuryHeroIT() {
    const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fcfbff 0%, #f6f3ff 100%)",
        color: "#1f2937",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
        paddingTop: 20,
      }}
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/it-support-team.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.22,
          zIndex: 1,
        }}
      />

      {/* SOFT BACKGROUND GLOWS */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.10)",
          filter: "blur(140px)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: -150,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(168,85,247,0.08)",
          filter: "blur(130px)",
          zIndex: 1,
        }}
      />

      {/* HERO CONTENT */}
      <main
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "55px 32px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            minHeight: "500px",
            gap: 40,
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                marginTop: 50,
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                color: "#1f2022",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              <ShieldCheck size={16} color="#7c3aed" />
              Managed IT Services • Cybersecurity • Cloud Solutions
            </div>

            <h1
              style={{
                fontSize: "clamp(44px, 5.2vw, 74px)",
                lineHeight: "1.08",
                letterSpacing: "-3px",
                margin: 0,
                fontWeight: 950,
                color: "#111827",
              }}
            >
              Reliable IT Support
              <br />
              for Modern{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Businesses.
              </span>
            </h1>

            <p
              style={{
                marginTop: 28,
                maxWidth: 620,
                fontSize: 18,
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Elevate365 provides reliable Managed IT Services, Help Desk
              Support, Cybersecurity, Microsoft 365, Cloud Solutions and
              proactive technology management. We help businesses reduce
              downtime, improve productivity and keep their technology running
              securely.
            </p>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                color: "#6b7280",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <span>✓ 24/7 Monitoring</span>
              <span>✓ Help Desk Support</span>
              <span>✓ Microsoft 365</span>
              <span>✓ Cybersecurity</span>
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 22,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <motion.button
  whileHover={{ y: -3, scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/contact")}
  style={{
    border: "none",
    background: "linear-gradient(135deg, #7b3cff, #8f6bff)",
    color: "white",
    padding: "18px 32px",
    borderRadius: 999,
    fontWeight: 900,
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 18px 45px rgba(124,58,237,0.35)",
    cursor: "pointer",
    textTransform: "uppercase",
  }}
>
  Book a Free IT Assessment
  <ArrowRight size={20} />
</motion.button>

<motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
              >
                <span
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    border: "1px solid rgba(124,58,237,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7c3aed",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  <BookOpen size={18} />
                </span>

                <span style={{ textAlign: "left" }}>
                  <span
  style={{
    display: "block",
    fontSize: 14,
    fontWeight: 900,
    textTransform: "uppercase",
    color: "#111827",
  }}
>
  IT Support Services
</span>

                  <small style={{ color: "#4b5563", fontWeight: 700 }}>
                    Discover Our Solutions
                  </small>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SPACE FOR IMAGE */}
          <div />
        </div>

        {/* BOTTOM PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            marginTop: 35,
            marginBottom: 60,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(124,58,237,0.08)",
            borderRadius: 26,
            overflow: "hidden",
            boxShadow: "0 25px 70px rgba(31,41,55,0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderBottom: "1px solid rgba(124,58,237,0.08)",
            }}
          >
            {features.map(([Icon, title, text], index) => (
              <div
                key={title}
                style={{
                  padding: "30px 34px",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  borderRight:
                    index !== 3 ? "1px solid rgba(124,58,237,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7c3aed",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: 900,
                      color: "#111827",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "#6b7280",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {stats.map(([Icon, value, label], index) => (
              <div
                key={label}
                style={{
                  padding: "30px 34px",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  borderRight:
                    index !== 3 ? "1px solid rgba(124,58,237,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7c3aed",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 34,
                      fontWeight: 950,
                      color: "#111827",
                    }}
                  >
                    {value}
                  </h3>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#6b7280",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </section>
  );
}