import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  GraduationCap,
  Laptop,
  Award,
  Users,
  Globe,
  BookOpen,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Expert-Led Training",
    text: "Guided by experienced professionals",
  },
  {
    icon: Laptop,
    title: "Hands-On Learning",
    text: "Practical projects and digital skills",
  },
  {
    icon: Award,
    title: "Certificate Pathways",
    text: "Recognition after completion",
  },
  {
    icon: Users,
    title: "Learn Anywhere",
    text: "100% online. Study on your schedule",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students Enrolled" },
  { icon: BadgeCheck, value: "50+", label: "Expert Instructors" },
  { icon: BookOpen, value: "30+", label: "Courses & Programs" },
  { icon: Globe, value: "120+", label: "Countries Reached" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[#02030b]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a057b43c92975536478e242/8ae1e3e31_generated_f998f1c2.png"
          alt="Elevate365 online academy background"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02030b] via-[#02030b]/80 to-[#02030b]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02030b]/20 via-[#02030b]/40 to-[#02030b]" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-32 left-20 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[580px]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 mb-8">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
                Skills Today. Impact Tomorrow.
              </span>
            </div>

            <h1
              className="font-extrabold leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(3rem, 6vw, 5.8rem)" }}
            >
              Build the Skills.
              <br />
              Secure the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                Future.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-slate-300 max-w-xl">
              Elevate365 provides structured online training in cybersecurity,
              blockchain, and digital technology. Learn through guided course
              material, practical activities, assessments, and certificate
              pathways.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                className="h-14 px-9 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold uppercase tracking-wide group shadow-lg shadow-purple-700/30"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="h-14 px-5 text-white hover:text-purple-300 hover:bg-transparent group"
              >
                <span className="w-12 h-12 rounded-full border border-purple-400/70 flex items-center justify-center mr-3 group-hover:bg-purple-500/20">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                <span className="text-left">
                  <span className="block font-bold uppercase text-sm">
                    Watch Intro
                  </span>
                  <span className="block text-xs text-slate-400">
                    See how it works
                  </span>
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Right side visual */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[520px]">
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[100px]" />

              <img
                src="https://media.base44.com/images/public/6a057b43c92975536478e242/8ae1e3e31_generated_f998f1c2.png"
                alt="Cybersecurity shield"
                className="relative z-10 w-full h-full object-contain object-center drop-shadow-[0_0_45px_rgba(139,92,246,0.55)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom feature panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative -mt-6 mb-16 rounded-3xl border border-white/10 bg-[#11142a]/75 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-4 border-b border-white/10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 flex items-center gap-5 ${
                    index !== 3 ? "md:border-r md:border-white/10" : ""
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`p-8 flex items-center gap-5 ${
                    index !== 3 ? "md:border-r md:border-white/10" : ""
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-3xl">
                      {item.value}
                    </h3>
                    <p className="text-slate-300 text-sm mt-1">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}