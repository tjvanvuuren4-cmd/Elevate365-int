import React from "react";
import { Phone, Mail, ShieldCheck } from "lucide-react";

const quickLinks = [
  { label: "Our Courses", href: "#" },
  { label: "About Elevate365", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Terms", href: "/affiliate-terms-of-use" },
];

const categories = [
  "Cybersecurity",
  "Blockchain",
  "Cloud Security",
  "Ethical Hacking",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t"
      style={{
        background: "#03030b",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.2),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                style={{
                  fontSize: "29px",
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg,#8b5cf6,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ELEVATE•365
              </div>

              <div
                style={{
                  letterSpacing: "0.35em",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "10px",
                  marginTop: "8px",
                  textTransform: "uppercase",
                }}
              >
                Cyber • Blockchain
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: "16px",
                lineHeight: 1.9,
              }}
            >
              Premium online academy focused on cybersecurity,
              blockchain, cloud security, and future-ready
              technical education.
            </p>

            {/* TRUST BADGE */}
            <div
              className="flex items-center gap-3 mt-7"
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "999px",
                padding: "12px 18px",
                width: "fit-content",
              }}
            >
              <ShieldCheck
                className="w-5 h-5"
                style={{ color: "#a78bfa" }}
              />

              <span
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Secure Learning Platform
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#c4b5fd",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "14px",
                      transition: "0.3s",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#c4b5fd",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              Categories
            </h4>

            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "14px",
                    }}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#c4b5fd",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              Contact
            </h4>

            <ul className="space-y-5">
              <li
                className="flex items-center gap-3"
                style={{
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "14px",
                }}
              >
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                +27 78 673 3552
              </li>

              <li
                className="flex items-center gap-3"
                style={{
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "14px",
                }}
              >
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                hello@elevate365.io
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7">
          <p
            className="text-center"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            © 2026 Elevate365. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}