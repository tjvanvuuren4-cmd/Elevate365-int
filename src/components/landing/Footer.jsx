import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  "Managed IT Services",
  "Help Desk Support",
  "Microsoft 365",
  "Cybersecurity",
  "Cloud Solutions",
  "IT Consulting",
];

export default function Footer() {
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#1b132d 0%,#160f26 100%)",
        borderColor: "rgba(192,132,252,0.18)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(192,132,252,0.18),transparent_42%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="mb-6">
              <div
                style={{
                  fontSize: "29px",
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1,
                  background: "linear-gradient(135deg,#ffffff,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ELEVATE•365
              </div>

              <div
                style={{
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.58)",
                  fontSize: "10px",
                  marginTop: "8px",
                  textTransform: "uppercase",
                }}
              >
                Business Technology Solutions
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "15px",
                lineHeight: 1.9,
              }}
            >
              Elevate365 delivers managed IT services, cybersecurity, Microsoft
              365 support and cloud solutions that help businesses stay secure,
              productive and connected.
            </p>

            <div
              className="flex items-center gap-3 mt-7"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(192,132,252,0.22)",
                borderRadius: "999px",
                padding: "12px 18px",
                width: "fit-content",
              }}
            >
              <ShieldCheck className="w-5 h-5" style={{ color: "#c084fc" }} />

              <span
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Trusted IT Partner
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#f5d0fe",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 800,
              }}
            >
              Quick Links
            </h4>

            <ul className="space-y-4">
              <li>
                <button
  onClick={() => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }}
  className="transition-colors hover:text-[#c084fc]"
  style={{
    color: "rgba(255,255,255,0.68)",
    fontSize: "14px",
  }}
>
  Home
</button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("services")}
                  className="transition-colors hover:text-[#c084fc]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                  }}
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("industries")}
                  className="transition-colors hover:text-[#c084fc]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                  }}
                >
                  Industries
                </button>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="transition-colors hover:text-[#c084fc]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                  }}
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#c084fc]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                  }}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#c084fc]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#f5d0fe",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 800,
              }}
            >
              Services
            </h4>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 transition-colors hover:text-[#c084fc]"
                    style={{
                      color: "rgba(255,255,255,0.68)",
                      fontSize: "14px",
                    }}
                  >
                    <ArrowRight
                      className="w-3.5 h-3.5"
                      style={{ color: "#c084fc" }}
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="uppercase mb-6"
              style={{
                color: "#f5d0fe",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 800,
              }}
            >
              Contact
            </h4>

            <ul className="space-y-5">
              <li
                className="flex items-center gap-3"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "14px",
                }}
              >
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#c084fc" }}
                />
                +27 79 180 3212
              </li>

              <li
                className="flex items-center gap-3"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "14px",
                }}
              >
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#c084fc" }}
                />
                info@elevate365.co.za
              </li>
            </ul>

            <p
              className="mt-6"
              style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              Free IT assessments available for businesses looking to improve
              support, security and productivity.
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(192,132,252,0.14)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7">
          <p
            className="text-center"
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            © 2026 Elevate365. Business Technology Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}