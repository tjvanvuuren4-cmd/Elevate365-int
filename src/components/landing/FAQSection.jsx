import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Enrollment",
    items: [
      {
        q: "How do I enroll in a course?",
        a: "Simply choose your preferred programme, complete checkout, and gain immediate access to your learning dashboard.",
      },
      {
        q: "Do I need prior experience?",
        a: "Many courses are beginner-friendly, while advanced programmes recommend foundational technical knowledge.",
      },
      {
        q: "Can I enroll in multiple courses?",
        a: "Yes. You can enroll in multiple cybersecurity and blockchain programmes simultaneously and learn at your own pace.",
      },
      {
        q: "Is there an age requirement?",
        a: "Students must be at least 18 years old. Learners aged 16–17 may enroll with parental consent.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "We accept Visa, Mastercard, EFT, PayFast, and selected digital payment methods.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. All pricing is transparent with no hidden charges or recurring costs unless specified.",
      },
      {
        q: "Can I request a refund?",
        a: "Yes. We offer a 14-day money-back guarantee for all eligible course purchases.",
      },
      {
        q: "Do you offer team pricing?",
        a: "Yes. Enterprise and team packages are available for organisations and corporate training.",
      },
    ],
  },
  {
    category: "Course Access",
    items: [
      {
        q: "How long do I have access?",
        a: "All enrolled students receive lifetime access to course materials and future updates.",
      },
      {
        q: "Can I learn on mobile?",
        a: "Yes. The platform is fully responsive across desktop, tablet, and mobile devices.",
      },
      {
        q: "Will I receive certification?",
        a: "Yes. Professional certificates are issued upon successful course completion.",
      },
      {
        q: "Can I study at my own pace?",
        a: "Absolutely. All programmes are designed for flexible self-paced learning.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span
          style={{
            color: "white",
            fontSize: "15px",
            fontWeight: 600,
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
            color: open
              ? "#a78bfa"
              : "rgba(255,255,255,0.5)",
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
                color: "rgba(255,255,255,0.62)",
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
      style={{ background: "#03030b" }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
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
            Got Questions?
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            Frequently asked questions.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Everything you need to know about enrollment,
            payments, certification, and learning with Elevate365.
          </p>
        </motion.div>

        {/* FAQ GRID */}
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
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div className="p-7 sm:p-8">
                {/* CATEGORY */}
                <div className="flex items-center gap-3 mb-7">
                  <div
                    style={{
                      width: "4px",
                      height: "22px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(180deg,#7c3aed,#a78bfa)",
                    }}
                  />

                  <h3
                    className="uppercase"
                    style={{
                      color: "#c4b5fd",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* FAQ ITEMS */}
                <div>
                  {group.items.map((item) => (
                    <FAQItem
                      key={item.q}
                      q={item.q}
                      a={item.a}
                    />
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