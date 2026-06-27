import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Headset,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const plans = [
  {
    icon: Headset,
    name: "Basic IT Support",
    subtitle: "Perfect for small businesses",
    price: "From R799",
    period: "per user / month",
    description:
      "Reliable help desk support and basic monitoring for businesses that need dependable IT assistance.",
    features: [
      "Remote help desk support",
      "Device monitoring",
      "Email support",
      "Business hours support",
      "Basic troubleshooting",
    ],
    cta: "Get Started",
  },
  {
    icon: Server,
    name: "Co-Managed IT",
    subtitle: "Support for internal IT teams",
    price: "From R1,699",
    period: "per user / month",
    description:
      "Extend your internal capabilities with additional support, Microsoft 365 assistance and priority response.",
    features: [
      "Everything in Basic Support",
      "Microsoft 365 support",
      "Server support",
      "Endpoint security guidance",
      "Priority response",
    ],
    cta: "Book Consultation",
    popular: true,
  },
  {
    icon: ShieldCheck,
    name: "Fully Managed IT",
    subtitle: "Your outsourced IT department",
    price: "From R2,499",
    period: "per user / month",
    description:
      "Complete IT management for businesses that want proactive support, security and technology leadership.",
    features: [
      "Unlimited help desk support",
      "24/7 monitoring",
      "Network management",
      "Cybersecurity support",
      "Cloud management",
      "Strategic IT planning",
    ],
    cta: "Request Proposal",
  },
];

export default function CourseCatalog() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
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
            style={{ letterSpacing: "0.25em", color: "#7c3aed" }}
          >
            Managed IT Solutions
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "#111827" }}
          >
            IT support that fits your business.
          </h2>

          <p
            className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            Choose from flexible managed IT plans designed to support your team,
            protect your systems and keep your business moving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="relative rounded-3xl p-8 overflow-hidden flex flex-col"
                style={{
                  background: plan.popular
                    ? "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,243,255,0.96))"
                    : "rgba(255,255,255,0.92)",
                  border: plan.popular
                    ? "1px solid rgba(124,58,237,0.28)"
                    : "1px solid rgba(124,58,237,0.10)",
                  boxShadow: plan.popular
                    ? "0 30px 90px rgba(124,58,237,0.18)"
                    : "0 25px 70px rgba(31,41,55,0.08)",
                  transform: plan.popular ? "translateY(-10px)" : "none",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-5 right-5 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                      color: "white",
                      letterSpacing: "0.08em",
                      boxShadow: "0 12px 30px rgba(124,58,237,0.28)",
                    }}
                  >
                    <Star className="w-3.5 h-3.5" />
                    Popular
                  </div>
                )}

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                  style={{
                    background: "rgba(124,58,237,0.10)",
                    border: "1px solid rgba(124,58,237,0.20)",
                    color: "#7c3aed",
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3
                  className="text-2xl font-black mb-2"
                  style={{ color: "#111827" }}
                >
                  {plan.name}
                </h3>

                <p
                  className="text-sm font-bold mb-5"
                  style={{ color: "#7c3aed" }}
                >
                  {plan.subtitle}
                </p>

                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{ color: "#4b5563" }}
                >
                  {plan.description}
                </p>

                <div className="mb-7">
                  <div
                    className="text-4xl font-black"
                    style={{ color: "#111827" }}
                  >
                    {plan.price}
                  </div>
                  <div
                    className="text-sm mt-1"
                    style={{ color: "#6b7280" }}
                  >
                    {plan.period}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#374151" }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#7c3aed" }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full border-0"
                  onClick={() => navigate("/contact")}
                  style={{
                    background: plan.popular
                      ? "linear-gradient(135deg,#7c3aed,#8b5cf6)"
                      : "rgba(124,58,237,0.08)",
                    color: plan.popular ? "white" : "#7c3aed",
                    borderRadius: "999px",
                    padding: "16px 24px",
                    fontWeight: 900,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    boxShadow: plan.popular
                      ? "0 15px 35px rgba(124,58,237,0.30)"
                      : "none",
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        <div
          className="mt-14 rounded-3xl p-8 text-center"
          style={{
            background: "rgba(255,255,255,0.76)",
            border: "1px solid rgba(124,58,237,0.10)",
            boxShadow: "0 25px 70px rgba(31,41,55,0.06)",
          }}
        >
          <h3
            className="text-2xl font-black mb-3"
            style={{ color: "#111827" }}
          >
            Need something custom?
          </h3>

          <p
            className="max-w-2xl mx-auto mb-6 leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            Every business has different technology needs. We can build a custom
            support plan based on your users, devices, systems and security
            requirements.
          </p>

          <Button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-0"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
              color: "white",
              borderRadius: "999px",
              padding: "15px 34px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "12px",
              boxShadow: "0 15px 35px rgba(124,58,237,0.25)",
            }}
          >
            Book a Free IT Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}