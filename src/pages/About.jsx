import React from "react";
import {
  ShieldCheck,
  Cloud,
  Headset,
  Server,
  Lock,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Server,
    title: "Proactive IT Support",
    description:
      "We monitor and maintain your technology before small issues become business disruptions.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "We help protect your users, devices, systems and business data with practical cybersecurity solutions.",
  },
  {
    icon: Headset,
    title: "Fast Response",
    description:
      "Reliable remote and onsite support when your team needs technical help.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Microsoft 365, cloud collaboration and modern productivity support for growing teams.",
  },
  {
    icon: Users,
    title: "Business Focused",
    description:
      "Technology solutions aligned with your operations, team and growth goals.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partnership",
    description:
      "We build long-term relationships through dependable support and clear communication.",
  },
];

export default function About() {
  return (
    <main
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #fcfbff 0%, #f6f3ff 100%)",
        color: "#111827",
      }}
    >
      <div className="mx-auto max-w-7xl space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase"
              style={{ letterSpacing: "0.3em", color: "#7c3aed" }}
            >
              About Elevate365
            </p>

            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Your trusted business technology partner.
            </h1>

            <p
              className="mt-6 max-w-2xl text-base sm:text-lg leading-8"
              style={{ color: "#4b5563" }}
            >
              Elevate365 helps businesses stay secure, productive and connected
              through managed IT services, Microsoft 365, cybersecurity, cloud
              solutions and proactive technology support. We believe technology
              should enable business growth — not slow it down.
            </p>

            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Managed IT Services",
                "Cybersecurity Protection",
                "Microsoft 365 Solutions",
                "Cloud Technology Support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4" style={{ color: "#7c3aed" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="overflow-hidden rounded-[2rem]"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 30px 90px rgba(31,41,55,0.12)",
              border: "1px solid rgba(124,58,237,0.10)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Elevate365 team providing business technology support"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p
              className="text-xs font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.25em", color: "#7c3aed" }}
            >
              Why Businesses Choose Us
            </p>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Technology support built around your business.
            </h2>

            <p className="mt-5 leading-8" style={{ color: "#4b5563" }}>
              Our focus is simple: keep your systems running, protect your
              business and support your people with reliable technology
              solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] p-7"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    border: "1px solid rgba(124,58,237,0.10)",
                    boxShadow: "0 25px 70px rgba(31,41,55,0.08)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(124,58,237,0.10)",
                      border: "1px solid rgba(124,58,237,0.18)",
                      color: "#7c3aed",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7" style={{ color: "#4b5563" }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="rounded-[2rem] p-8 sm:p-10 lg:p-12"
          style={{
            background: "linear-gradient(180deg, #24163d 0%, #1b132d 100%)",
            color: "white",
            boxShadow: "0 30px 90px rgba(31,41,55,0.14)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <div>
              <p
                className="text-xs font-semibold uppercase mb-4"
                style={{ letterSpacing: "0.25em", color: "#c084fc" }}
              >
                Our Mission
              </p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Reliable IT support for modern businesses.
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base leading-8">
              <p style={{ color: "rgba(255,255,255,0.74)" }}>
                Technology should empower businesses, not become another problem
                to solve. Elevate365 was created to provide dependable IT
                support, cybersecurity and cloud technology services that improve
                productivity and reduce downtime.
              </p>

              <p style={{ color: "rgba(255,255,255,0.74)" }}>
                Whether you're a growing business needing day-to-day support or
                an established company looking for proactive technology
                management, our goal is to become your trusted technology
                partner.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  ["24/7", "Monitoring Options"],
                  ["365", "Microsoft 365 Support"],
                  ["SME", "Business Focus"],
                  ["Secure", "Security First"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(192,132,252,0.18)",
                    }}
                  >
                    <div
                      className="text-3xl font-black"
                      style={{
                        background: "linear-gradient(135deg,#ffffff,#c084fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {value}
                    </div>
                    <p
                      className="mt-1 text-xs uppercase"
                      style={{
                        color: "rgba(255,255,255,0.58)",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}