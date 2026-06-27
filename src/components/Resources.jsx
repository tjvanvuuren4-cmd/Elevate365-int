import {
  ShieldCheck,
  Cloud,
  HardDrive,
  UserPlus,
  KeyRound,
  Laptop,
  ArrowRight,
} from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: ShieldCheck,
      title: "Cybersecurity Checklist",
      desc: "A practical checklist to help small businesses improve everyday security.",
      href: "#",
    },
    {
      icon: Cloud,
      title: "Microsoft 365 Best Practices",
      desc: "Simple guidance for using Microsoft 365 securely and productively.",
      href: "#",
    },
    {
      icon: HardDrive,
      title: "Business Backup Checklist",
      desc: "Key steps to help protect your data and prepare for system failures.",
      href: "#",
    },
    {
      icon: UserPlus,
      title: "New Employee IT Setup",
      desc: "A checklist for setting up new users, devices, email and access.",
      href: "#",
    },
    {
      icon: KeyRound,
      title: "Password Policy Template",
      desc: "A simple password policy framework for business teams.",
      href: "#",
    },
    {
      icon: Laptop,
      title: "Remote Work Security Guide",
      desc: "Help your team work remotely while reducing security risks.",
      href: "#",
    },
  ];

  return (
    <section
      id="resources"
      className="relative min-h-screen overflow-hidden px-6 py-28 text-white"
      style={{
        background: "linear-gradient(180deg, #24163d 0%, #1b132d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase mb-4"
            style={{ letterSpacing: "0.25em", color: "#c084fc" }}
          >
            Resource Centre
          </p>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            Practical IT resources for growing businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Access helpful business technology checklists, security guides and
            IT planning resources designed to help your company stay protected,
            productive and prepared.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] p-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(192,132,252,0.18)",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(192,132,252,0.24)",
                    color: "#c084fc",
                  }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/68">
                  {item.desc}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-bold text-purple-300">
                  View Resource
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>

        <div
          className="mt-16 rounded-[2rem] p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(192,132,252,0.20)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black">
                Need help applying these resources?
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-white/70">
                Book a free IT assessment and let Elevate365 help you identify
                the best managed IT, cybersecurity and Microsoft 365 solutions
                for your business.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 font-black text-white"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                boxShadow: "0 18px 45px rgba(124,58,237,0.35)",
              }}
            >
              Book Free Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}