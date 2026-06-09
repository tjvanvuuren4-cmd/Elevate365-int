import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ background: "#03030b" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.28),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,11,0)_0%,rgba(3,3,11,1)_100%)]" />

      <motion.img
         src="/images/shield-floating.webp"
         alt="Cyber Shield"
         animate={{
         y: [0, -18, 0],
         rotate: [0, 2, 0],
         scale: [1, 1.03, 1],
       }}
        transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
      }}
       style={{
       position: "absolute",
       right: "10px",
       bottom: "-0px",
       width: "700px",
       opacity: 0.18,
       filter: "drop-shadow(0 0 60px rgba(124,58,237,0.45))",
       zIndex: 1,
       pointerEvents: "none",
      }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <div
          className="inline-flex items-center gap-2 mb-7 rounded-full px-5 py-3"
          style={{
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(167,139,250,0.35)",
            color: "#c4b5fd",
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span
            className="text-xs font-semibold uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            Begin Your Journey
          </span>
        </div>

        <h2
          className="font-black leading-tight tracking-tight"
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          Ready to build your future in tech?
        </h2>

        <p
          className="mt-7 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          Join Elevate365 and start mastering cybersecurity, blockchain,
          cloud security, and future-ready digital skills.
        </p>

        <div className="mt-12 flex justify-center">
  <Button
    size="lg"
    className="group border-0 uppercase"
    onClick={() => {
      document
        .getElementById("courses")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    style={{
      background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
      color: "white",
      borderRadius: "999px",
      height: "56px",
      padding: "0 46px",
      fontWeight: 900,
      fontSize: "13px",
      letterSpacing: "0.14em",
      boxShadow: "0 18px 45px rgba(124,58,237,0.4)",
    }}
  >
    Start Learning Today

    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>
      </motion.div>
    </section>
  );
}