import React from "react";
import {
  ShieldCheck,
  Headset,
  Cloud,
  Server,
  Lock,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Server,
    title: "Managed IT Services",
    description:
      "Proactive monitoring, maintenance and support to keep your business technology running smoothly.",
  },
  {
    icon: Headset,
    title: "Fast Help Desk Support",
    description:
      "Reliable remote and onsite assistance when your team needs technical support.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Cybersecurity solutions designed to protect your users, data, devices and business systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    description:
      "Secure cloud productivity, email, collaboration and Microsoft 365 support for modern teams.",
  },
];

export default function WhyLearnWithUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #fcfbff 0%, #f6f3ff 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.10),transparent_45%)]" />

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
              color: "#7c3aed",
            }}
          >
            Why Choose Elevate365
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "#111827" }}
          >
            IT support built around your business.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            We help businesses reduce downtime, improve productivity and stay
            protected with reliable IT support, cloud services and cybersecurity
            solutions.
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
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(124,58,237,0.10)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 25px 70px rgba(31,41,55,0.08)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,58,237,0.10),transparent)",
                  }}
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                    style={{
                      background: "rgba(124,58,237,0.10)",
                      border: "1px solid rgba(124,58,237,0.20)",
                      color: "#7c3aed",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#111827" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4b5563" }}
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