import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { courses, USD_TO_ZAR } from "@/lib/courseData";

export default function FeaturedCourse() {
  const featured = courses.find((c) => c.featured);
  if (!featured) return null;

  const priceZAR = (featured.priceUSD * USD_TO_ZAR).toFixed(0);

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#03030b" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_45%)]" />

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
            Flagship Programme
          </p>

          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: "white" }}
          >
            Our most popular course.
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Join thousands of students advancing their careers in cybersecurity
            and blockchain technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 35px 100px rgba(124,58,237,0.18)",
          }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#03030b]/20 to-[#03030b] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03030b]/70 to-transparent" />

              <Badge
                className="absolute top-5 left-5 border-0 uppercase"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                  color: "white",
                  letterSpacing: "0.15em",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "8px 14px",
                  borderRadius: "999px",
                }}
              >
                Most Popular
              </Badge>
            </div>

            <div className="p-8 lg:p-14 flex flex-col justify-center">
              <p
                className="text-xs font-semibold uppercase mb-4"
                style={{ letterSpacing: "0.25em", color: "#a78bfa" }}
              >
                {featured.category}
              </p>

              <h3
                className="text-3xl sm:text-5xl font-black leading-tight mb-5"
                style={{ color: "white", letterSpacing: "-1.5px" }}
              >
                {featured.title}
              </h3>

              <p
                className="leading-relaxed mb-8 text-base"
                style={{ color: "rgba(255,255,255,0.66)" }}
              >
                {featured.description}
              </p>

              <div
                className="flex flex-wrap gap-5 mb-10 text-sm"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#a78bfa" }} />
                  {featured.duration}
                </span>

                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: "#a78bfa" }} />
                  {featured.students.toLocaleString()} students
                </span>

                <span className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#a78bfa", fill: "#a78bfa" }}
                  />
                  {featured.rating}
                </span>
              </div>

              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <div
                    className="text-4xl font-black"
                    style={{
                      background: "linear-gradient(135deg,#8b5cf6,#c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    R {Number(priceZAR).toLocaleString()}
                  </div>

                  <div
                    className="text-xs mt-2 tracking-wider"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    ≈ ${featured.priceUSD.toFixed(2)} USD
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-12 w-12"
                    style={{
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(255,255,255,0.04)",
                      color: "white",
                      borderRadius: "999px",
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>

                  <Button
                    className="h-12 px-9 uppercase"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                      color: "white",
                      borderRadius: "999px",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      fontSize: "12px",
                      boxShadow: "0 14px 40px rgba(124,58,237,0.35)",
                    }}
                  >
                    Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}