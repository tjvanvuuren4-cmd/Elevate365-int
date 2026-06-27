import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  const { data, error } = await login(email, password);

  if (error) {
    setLoading(false);
    alert(error.message);
    return;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  setLoading(false);

  if (profile?.role === "admin") {
    navigate("/admin");
  } else {
    navigate("/student-dashboard");
  }
};

  return (
  <div
  className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #24153f 0%, #1a1030 40%, #12091f 75%, #09050f 100%)",
  }}
>
  {/* Top Glow */}
<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
  style={{
    background: "rgba(139,92,246,.18)",
    filter: "blur(140px)",
    borderRadius: "999px",
  }}
/>

{/* Bottom Glow */}
<div
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
  style={{
    background: "rgba(124,58,237,.15)",
    filter: "blur(120px)",
    borderRadius: "999px",
  }}
/>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_35%)]" />

    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
      style={{
        background: "rgba(124,58,237,.15)",
        filter: "blur(120px)",
        borderRadius: "999px",
      }}
    />

    <form
      onSubmit={handleLogin}
      className="relative z-10 w-full max-w-md rounded-3xl border border-purple-500/30 bg-black/70 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.35)]"
    >
      <div className="mb-8">
        <div
          style={{
            fontSize: "30px",
            fontWeight: 900,
            letterSpacing: "0.18em",
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
            marginTop: "8px",
            fontSize: "10px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.52)",
          }}
        >
          Business Technology Solutions
        </div>
      </div>

      <h1 className="text-4xl font-black mb-2">
        Client <span className="text-purple-500">Portal</span>
      </h1>

      <p className="text-gray-400 mb-8">
        Access your Elevate•365 business technology dashboard.
      </p>

      <input
        className="w-full mb-4 p-4 rounded-xl bg-[#080812] border border-purple-500/30 text-white outline-none focus:border-purple-400"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full mb-6 p-4 rounded-xl bg-[#080812] border border-purple-500/30 text-white outline-none focus:border-purple-400"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-purple-700 to-purple-500 py-4 font-bold uppercase tracking-widest shadow-[0_12px_35px_rgba(124,58,237,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing In..." : "Access Portal"}
      </button>

      <p className="text-center text-gray-400 mt-6">
        Need access?{" "}
        <Link to="/contact" className="text-purple-400 font-bold">
          Contact support
        </Link>
      </p>
    </form>
  </div>
);
}