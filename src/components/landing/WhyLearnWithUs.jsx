import React from "react";
import { GraduationCap, ShieldCheck, Award, Network } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Led Training",
    description:
      "Learn cybersecurity and blockchain from experienced professionals with real-world technical knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Focus",
    description:
      "Build practical skills in threat defense, ethical hacking, cloud security, and digital protection.",
  },
  {
    icon: Network,
    title: "Blockchain Mastery",
    description:
      "Understand blockchain systems, smart contracts, decentralized technology, and future-ready digital infrastructure.",
  },
  {
    icon: Award,
    title: "Career Certification",
    description:
      "Earn professional certificates that help strengthen your profile and showcase your technical expertise.",
  },
];

export default function WhyLearnWithUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#03030b" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,11,0)_0%,rgba(3,3,11,1)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase mb-4"
            style={{
              letterSpacing: "0.25em",
              color: "#a78bfa",
            }}
          >
            Why Choose Elevate365
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            Learn skills built for the future.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Advance your career with premium training in cybersecurity,
            blockchain, cloud protection, and digital defense.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="group relative overflow-hidden rounded-3xl p-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,58,237,0.18),transparent)",
                  }}
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(167,139,250,0.35)",
                      color: "#a78bfa",
                      boxShadow: "0 0 35px rgba(124,58,237,0.18)",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "white" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}