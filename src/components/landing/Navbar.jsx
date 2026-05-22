import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
  navigate("/login");
  };

  const handleExploreClick = () => {
  navigate("/courses");
  };

  const links = [
    { label: "Programs", href: "#courses" },
    { label: "Cybersecurity", href: "#why" },
    { label: "Blockchain", href: "#instructors" },
    { label: "Contact", href: "#footer" },
    
  ];

  return (
  <nav
    className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
    style={{
      background: "rgba(3,3,11,0.72)",
      borderColor: "rgba(255,255,255,0.05)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
    }}
    >
      <div className="max-w-7xl mx-auto px-0 lg:px-2">
  <div className="flex items-center justify-between py-5">
    
    {/* LOGO */}
    <a href="#" className="group relative flex items-center gap-3">
      <div className="relative flex flex-col leading-none">

        {/* Glow */}
        <div className="absolute -inset-6 bg-purple-500/10 blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

        {/* Main Logo */}
        <span
          style={{
            fontSize: "42px",
            fontWeight: 900,
            letterSpacing: "0.22em",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1,
            background:
              "linear-gradient(135deg,#ffffff 0%,#c084fc 45%,#8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 35px rgba(139,92,246,0.35)",
          }}
          className="relative z-10 transition-all duration-500 group-hover:scale-[1.02]"
        >
          ELEVATE•365
        </span>

        {/* Bottom Line */}
        <div className="flex items-center gap-3 mt-4 relative z-10">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-purple-500" />

          <span
            style={{
              letterSpacing: "0.42em",
              color: "rgba(255,255,255,0.5)",
              fontSize: "10px",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            Cyber • Blockchain • Academy
          </span>

          <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-500" />
        </div>
      </div>
    </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-all duration-300"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoginClick}
              className="hover:bg-transparent"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Log In
            </Button>

            <Button
              size="sm"
              onClick={handleExploreClick}
              className="border-0"
              style={{
                background:
                  "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                color: "white",
                borderRadius: "999px",
                padding: "13px 24px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "12px",
                boxShadow:
                  "0 12px 35px rgba(124,58,237,0.35)",
              }}
            >
              Explore Courses
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "white" }}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "#03030b",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-6 py-6 space-y-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}

              <div
                style={{
                  paddingTop: "18px",
                  borderTop:
                    "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLoginClick}
                  className="flex-1"
                  style={{
                    color: "white",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  Log In
                </Button>

                <Button
                  size="sm"
                  onClick={handleExploreClick}
                  className="flex-1 border-0"
                  style={{
                    background:
                      "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                    color: "white",
                    boxShadow:
                      "0 10px 25px rgba(124,58,237,0.3)",
                  }}
                >
                  Explore
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}