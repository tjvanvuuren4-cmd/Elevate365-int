import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "IT Support",
    items: [
      {
        q: "What kind of IT support do you provide?",
        a: "Elevate365 provides managed IT support, help desk assistance, Microsoft 365 support, cybersecurity guidance, cloud support, device support and proactive technology management.",
      },
      {
        q: "Do you support small businesses?",
        a: "Yes. Our services are designed for small and growing businesses that need reliable IT support without hiring a full internal IT department.",
      },
      {
        q: "Can you assist remotely?",
        a: "Yes. Many support requests can be handled remotely, and onsite assistance can be arranged depending on the client’s location and service agreement.",
      },
      {
        q: "Do you offer once-off IT help?",
        a: "Yes. We can assist with once-off support, assessments, setup projects and troubleshooting, although ongoing managed support provides the best long-term value.",
      },
    ],
  },
  {
    category: "Managed Services",
    items: [
      {
        q: "What is Managed IT Services?",
        a: "Managed IT Services means Elevate365 helps monitor, maintain and support your business technology on an ongoing basis so your team can focus on running the business.",
      },
      {
        q: "How are managed IT plans priced?",
        a: "Managed IT plans are usually priced per user or per device per month. Final pricing depends on the number of users, devices, systems, security needs and support level required.",
      },
      {
        q: "Can you work with our existing IT team?",
        a: "Yes. Our co-managed IT option is designed to support internal IT teams by adding extra capacity, specialist support and proactive monitoring.",
      },
      {
        q: "Do you include cybersecurity?",
        a: "Cybersecurity can be included as part of a managed IT plan, including endpoint protection, security guidance, user awareness, monitoring and best-practice recommendations.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        q: "How do we get started?",
        a: "Start by booking a free IT assessment. We review your current technology setup, understand your business needs and recommend the best support plan.",
      },
      {
        q: "Do you provide payment links?",
        a: "Yes. Where available, Elevate365 can provide secure payment links for IT services, support plans and once-off projects.",
      },
      {
        q: "Can we request a custom package?",
        a: "Yes. Every business is different, so we can build a custom support plan based on your users, devices, systems and security requirements.",
      },
      {
        q: "Do you still offer training?",
        a: "Training may still be available as an additional service, especially for cybersecurity awareness, Microsoft 365 usage and internal team development.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(124,58,237,0.10)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span
          style={{
            color: "#111827",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          {q}
        </span>

        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          style={{
            color: open ? "#7c3aed" : "#6b7280",
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5"
              style={{
                color: "#4b5563",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
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
            Got Questions?
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "#111827" }}
          >
            Frequently asked questions.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            Everything you need to know about managed IT support,
            cybersecurity, payment links and working with Elevate365.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: gi * 0.1,
              }}
              className="rounded-[2rem] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(124,58,237,0.10)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 25px 70px rgba(31,41,55,0.08)",
              }}
            >
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    style={{
                      width: "4px",
                      height: "22px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(180deg,#7c3aed,#a855f7)",
                    }}
                  />

                  <h3
                    className="uppercase"
                    style={{
                      color: "#7c3aed",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      fontWeight: 800,
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div>
                  {group.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}