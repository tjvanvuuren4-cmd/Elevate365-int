import React from "react";
import {
  Building2,
  Briefcase,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Factory,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "IT support for accounting firms, consultants, agencies and office-based teams.",
    points: ["Email & Microsoft 365", "Secure file sharing", "Help desk support"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Practices",
    description:
      "Technology support for practices that need secure, reliable systems and minimal downtime.",
    points: ["Device support", "Data protection", "Reliable connectivity"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Support for businesses that rely on point-of-sale systems, online stores and daily operations.",
    points: ["POS support", "Network reliability", "User support"],
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description:
      "Cloud, device and support solutions for schools, training providers and learning teams.",
    points: ["Cloud platforms", "User accounts", "Remote support"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Operations",
    description:
      "IT support for operational environments where uptime, systems and communication matter.",
    points: ["Network support", "Monitoring", "Business continuity"],
  },
  {
    icon: Building2,
    title: "Small & Growing Businesses",
    description:
      "Flexible IT support for companies that need professional systems without a full internal IT team.",
    points: ["Managed IT", "Cybersecurity", "Scalable support"],
  },
];

export default function InstructorsSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #24163d 0%, #1b132d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.18),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,22,61,0)_0%,rgba(27,19,45,0.96)_100%)]" />

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
            style={{ letterSpacing: "0.25em", color: "#c084fc" }}
          >
            Industries We Support
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "#ffffff" }}
          >
            IT solutions for modern businesses.
          </h2>

          <p
            className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Elevate365 supports businesses across different industries with
            reliable IT services, cloud solutions and cybersecurity-focused
            technology support.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-[2rem] overflow-hidden mb-16"
          style={{
            background: "rgba(192,132,252,0.16)",
            border: "1px solid rgba(192,132,252,0.18)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.18)",
          }}
        >
          {[
            { value: "24/7", label: "Monitoring Options" },
            { value: "365", label: "Microsoft 365 Support" },
            { value: "SME", label: "Business Focus" },
            { value: "Secure", label: "Security First" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-7 text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="text-2xl sm:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg,#f5d0fe,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>

              <div
                className="text-[10px] uppercase font-semibold"
                style={{
                  color: "rgba(255,255,255,0.62)",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] p-7 sm:p-8 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(192,132,252,0.18)",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
                }}
              >
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(192,132,252,0.14),transparent)",
                  }}
                />

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(192,132,252,0.24)",
                      color: "#c084fc",
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    {industry.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.70)" }}
                  >
                    {industry.description}
                  </p>

                  <ul className="space-y-2.5">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "rgba(255,255,255,0.82)" }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "#c084fc" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}