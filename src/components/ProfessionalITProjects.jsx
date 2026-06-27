import React from "react";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Cloud,
  Building2,
  DatabaseBackup,
  Wifi,
  SearchCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Assessment",
    price: "From R2,500",
    desc: "Review your accounts, devices, passwords, backups and security risks.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Setup & Migration",
    price: "From R3,500",
    desc: "Setup or migrate Outlook, Teams, OneDrive, SharePoint and business email.",
  },
  {
    icon: Building2,
    title: "New Office IT Setup",
    price: "From R5,000",
    desc: "Computers, printers, Wi-Fi, user accounts and essential business systems.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Disaster Recovery",
    price: "From R2,000",
    desc: "Cloud backup setup and recovery planning to protect business data.",
  },
  {
    icon: Wifi,
    title: "Network & Wi-Fi Optimisation",
    price: "From R1,800",
    desc: "Improve coverage, speed, reliability and security across your network.",
  },
  {
    icon: SearchCheck,
    title: "Business Technology Audit",
    price: "From R7,500",
    desc: "Full infrastructure, security, Microsoft 365, backup and risk review.",
    featured: true,
  },
];

export default function ProfessionalITProjects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #24163d 0%, #1b132d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.18),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase mb-4"
            style={{ letterSpacing: "0.25em", color: "#c084fc" }}
          >
            Professional IT Projects
          </p>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Once-off IT solutions for your business.
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-white/70">
            Not every business needs a monthly plan immediately. Elevate365 also
            provides once-off IT projects to solve specific technology
            challenges and improve your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="relative rounded-[2rem] p-7 overflow-hidden"
                style={{
                  background: project.featured
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(255,255,255,0.06)",
                  border: project.featured
                    ? "1px solid rgba(192,132,252,0.35)"
                    : "1px solid rgba(192,132,252,0.18)",
                  boxShadow: project.featured
                    ? "0 30px 90px rgba(192,132,252,0.16)"
                    : "0 25px 70px rgba(0,0,0,0.12)",
                  backdropFilter: "blur(18px)",
                }}
              >
                {project.featured && (
                  <div
                    className="absolute top-5 right-5 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                      color: "white",
                    }}
                  >
                    <Star className="w-3.5 h-3.5" />
                    Premium
                  </div>
                )}

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(192,132,252,0.24)",
                    color: "#c084fc",
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-purple-200 font-black mb-4">
                  {project.price}
                </p>

                <p className="text-white/68 leading-7 mb-7">
                  {project.desc}
                </p>

                <Button
                  onClick={() => navigate("/contact")}
                  className="w-full border-0"
                  style={{
                    background: project.featured
                      ? "linear-gradient(135deg,#7c3aed,#8b5cf6)"
                      : "rgba(255,255,255,0.10)",
                    color: "white",
                    borderRadius: "999px",
                    padding: "15px 24px",
                    fontWeight: 900,
                  }}
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}