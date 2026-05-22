import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/courseData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#03030b" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_45%)]" />

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
            style={{ letterSpacing: "0.25em", color: "#a78bfa" }}
          >
            Student Stories
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            What our students say.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Join learners building real skills in cybersecurity, blockchain,
            and future-ready digital technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <Card
                className="relative h-full overflow-hidden rounded-[2rem] p-8"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 25px 80px rgba(124,58,237,0.1)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,58,237,0.16),transparent)",
                  }}
                />

                <div className="relative">
                  <Quote
                    className="w-9 h-9 mb-5"
                    style={{ color: "rgba(167,139,250,0.25)" }}
                  />

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{ color: "#a78bfa", fill: "#a78bfa" }}
                      />
                    ))}
                  </div>

                  <p
                    className="leading-relaxed mb-8 text-lg italic"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        color: "#c4b5fd",
                        border: "1px solid rgba(167,139,250,0.35)",
                      }}
                    >
                      {t.avatar}
                    </div>

                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "white" }}
                      >
                        {t.name}
                      </p>

                      <p
                        className="text-xs tracking-wider"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}