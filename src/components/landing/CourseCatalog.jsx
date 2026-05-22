import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { courses } from "@/lib/courseData";
import CourseCard from "./CourseCard";

const categories = ["All", "Cybersecurity", "Blockchain", "Web Development"];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section
      id="courses"
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
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold uppercase mb-4"
            style={{ letterSpacing: "0.25em", color: "#a78bfa" }}
          >
            Course Catalogue
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            Explore all courses.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Choose from premium expert-led programmes in cybersecurity,
            blockchain, and modern technology.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <Button
                key={cat}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="border-0 uppercase"
                style={{
                  background: active
                    ? "linear-gradient(135deg,#7c3aed,#8b5cf6)"
                    : "rgba(255,255,255,0.04)",
                  color: active ? "white" : "rgba(255,255,255,0.68)",
                  borderRadius: "999px",
                  border: active
                    ? "1px solid rgba(167,139,250,0.45)"
                    : "1px solid rgba(255,255,255,0.1)",
                  padding: "10px 22px",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  boxShadow: active
                    ? "0 12px 30px rgba(124,58,237,0.32)"
                    : "none",
                }}
              >
                {cat}
              </Button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, idx) => (
            <CourseCard key={course.id} course={course} index={idx} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            size="lg"
            className="uppercase"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "16px 42px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              fontSize: "12px",
            }}
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}