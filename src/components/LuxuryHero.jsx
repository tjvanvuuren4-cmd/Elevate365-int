import {
  ArrowRight,
  Play,
  BookOpen,
  Award,
  Users,
  Globe,
  ShieldCheck,
  GraduationCap,
  Laptop,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  [GraduationCap, "Expert-Led Training", "Guided by experienced professionals"],
  [Laptop, "Hands-On Learning", "Practical projects and digital skills"],
  [Award, "Certificates of Completion", "Recognition after completion"],
  [Users, "Learn Anywhere", "Guidance throughout your learning journey"],
];

const stats = [
  [Users, "10,000+", "Students Enrolled"],
  [BadgeCheck, "50+", "Expert Instructors"],
  [BookOpen, "30+", "Courses & Programs"],
  [Globe, "120+", "Countries Reached"],
];

export default function LuxuryHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#02030b",
        color: "white",
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
          backgroundImage: "url('/images/cyber-premium.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      {/* OVERLAYS */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #02030b 0%, rgba(2,3,11,0.92) 32%, rgba(2,3,11,0.55) 60%, rgba(2,3,11,0.25) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(2,3,11,0.15) 0%, rgba(2,3,11,0.45) 58%, #02030b 100%)",
          zIndex: 3,
        }}
      />

      {/* GLOWS */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 90,
          width: 420,
          height: 420,
          background: "rgba(124,58,237,0.18)",
          borderRadius: "999px",
          filter: "blur(120px)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 120,
          width: 520,
          height: 520,
          background: "rgba(139,92,246,0.2)",
          borderRadius: "999px",
          filter: "blur(140px)",
          zIndex: 2,
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
             gap: 22,
             flexWrap: "wrap",
             color: "rgba(255,255,255,0.82)",
             fontSize: 14,
             fontWeight: 700,
             }}
            >
              <ShieldCheck size={12} />
              Skills Today. Impact Tomorrow.
            </div>

            <h1
              style={{
                fontSize: "clamp(44px, 5.2vw, 74px)",
                lineHeight: "1.08",
                letterSpacing: "-3px",
                margin: 0,
                fontWeight: 950,
              }}
            >
              Build the Skills.
              <br />
              Secure the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future.
              </span>
            </h1>

            <p
              style={{
                marginTop: 28,
                maxWidth: 620,
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              Elevate365 provides structured online education in cybersecurity, web development, 
              blockchain, cloud technologies, and digital skills. Learn through guided course material, 
              practical activities, assessments, and certificate-based learning pathways.
            </p>
            <div
             style={{
             marginTop: 18,
             display: "flex",
             gap: 18,
             flexWrap: "wrap",
             color: "rgba(255,255,255,0.72)",
             fontSize: 13,
             fontWeight: 600,
             }}
            >
            <span>✓ Online Learning</span>
            <span>✓ Guided Assessments</span>
            <span>✓ Certificate of Completion</span>
            <span>✓ Student Support</span>
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 22,
                flexWrap: "wrap",
                alignItems: "center",
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
                  fontSize: 15,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: "0 18px 45px rgba(124,58,237,0.42)",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Explore Courses
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  style={{
    border: "none",
    background: "transparent",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: 14,
    cursor: "pointer",
  }}
>
  <span
    style={{
      width: 50,
      height: 50,
      borderRadius: 999,
      border: "1px solid rgba(192,132,252,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#c084fc",
    }}
  >
    <BookOpen size={18} />
  </span>

  <span style={{ textAlign: "left" }}>
    <strong
      style={{
        display: "block",
        fontSize: 14,
        textTransform: "uppercase",
      }}
    >
      Student Resources
    </strong>

    <small style={{ color: "rgba(255,255,255,0.55)" }}>
      Handbook, Policies & Certificates
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
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(18,20,42,0.78)",
            backdropFilter: "blur(18px)",
            borderRadius: 26,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
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
                    index !== 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 900 }}>
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "rgba(255,255,255,0.68)",
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
                    index !== 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h3 style={{ margin: 0, fontSize: 34, fontWeight: 950 }}>
                    {value}
                  </h3>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "rgba(255,255,255,0.68)",
                      fontSize: 14,
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