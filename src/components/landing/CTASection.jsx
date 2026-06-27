import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-28 sm:pt-36 pb-20"
      style={{
        background: "linear-gradient(180deg, #24163d 0%, #1b132d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.22),transparent_45%)]" />

      <motion.img
        src="/images/Professional-helping.webp"
        alt="Business Technology Support"
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
          bottom: "0px",
          width: "700px",
          opacity: 0.14,
          filter: "drop-shadow(0 0 60px rgba(192,132,252,0.35))",
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
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(192,132,252,0.28)",
            color: "#f5d0fe",
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span
            className="text-xs font-semibold uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            Free IT Assessment
          </span>
        </div>

        <h2
          className="font-black leading-tight tracking-tight"
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          Ready to strengthen your business technology?
        </h2>

        <p
          className="mt-7 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.74)" }}
        >
          From managed IT services and Microsoft 365 support to cybersecurity
          and cloud solutions, Elevate365 is ready to become your trusted
          technology partner.
        </p>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="group border-0"
            onClick={() => navigate("/contact")}
            style={{
              background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
              color: "white",
              borderRadius: "999px",
              height: "56px",
              padding: "0 46px",
              fontWeight: 900,
              fontSize: "13px",
              letterSpacing: "0.08em",
              boxShadow: "0 18px 45px rgba(124,58,237,0.35)",
            }}
          >
            Book Your Free Assessment

            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}