import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { instructors } from "@/lib/courseData";

function InstructorCard({ instructor, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-[2rem]"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

      <div className="p-7 sm:p-8">
        <div className="flex items-start gap-5 mb-6">
          <div className="relative shrink-0">
            <div
              className="w-20 h-20 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div
              className="absolute -bottom-2 -right-2 text-[9px] font-semibold px-2 py-1 rounded-full uppercase"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                color: "white",
                letterSpacing: "0.1em",
              }}
            >
              {instructor.experience}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className="text-xl font-bold leading-tight mb-1"
              style={{ color: "white" }}
            >
              {instructor.name}
            </h3>

            <p
              className="text-xs font-semibold uppercase mb-3"
              style={{ letterSpacing: "0.15em", color: "#a78bfa" }}
            >
              {instructor.title}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {instructor.credentials.map((cred) => (
                <Badge
                  key={cred}
                  variant="outline"
                  className="text-[10px]"
                  style={{
                    border: "1px solid rgba(167,139,250,0.35)",
                    color: "#c4b5fd",
                    background: "rgba(124,58,237,0.1)",
                    borderRadius: "999px",
                  }}
                >
                  {cred}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.64)" }}
        >
          {instructor.bio}
        </p>

        <ul className="space-y-2.5 mb-6">
          {instructor.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 text-sm"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-violet-400" />
              {h}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full pt-5 text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span
            className="flex items-center gap-2 text-xs font-semibold uppercase"
            style={{ letterSpacing: "0.15em", color: "rgba(255,255,255,0.62)" }}
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            Courses by this instructor
          </span>

          {expanded ? (
            <ChevronUp className="w-4 h-4 text-violet-300" />
          ) : (
            <ChevronDown className="w-4 h-4 text-violet-300" />
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-2">
                {instructor.courses.map((c) => (
                  <li
                    key={c}
                    className="text-sm pl-3 cursor-pointer"
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      borderLeft: "1px solid rgba(167,139,250,0.35)",
                    }}
                  >
                    {c}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function InstructorsSection() {
  return (
    <section
      id="instructors"
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
            The Experts Behind The Courses
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            Meet your instructors.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Learn from certified professionals with real-world experience in
            cybersecurity, blockchain, cloud systems, and digital defense.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-[2rem] overflow-hidden mb-16"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            { value: "48+", label: "Years Combined Exp." },
            { value: "12", label: "Certifications" },
            { value: "Enterprise", label: "Industry Backgrounds" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-7 text-center"
              style={{ background: "rgba(255,255,255,0.035)" }}
            >
              <div
                className="text-2xl sm:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg,#8b5cf6,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>

              <div
                className="text-[10px] uppercase"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {instructors.map((instructor, idx) => (
            <InstructorCard
              key={instructor.name}
              instructor={instructor}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}