import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { supabase } from "@/lib/supabaseClient";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data, error } = await register(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    const user = data?.user;

    if (user) {
      const { error: enrollmentError } = await supabase
        .from("enrollments")
        .insert({
          user_id: user.id,
          course_id: 1,
          status: "pending",
          progress: 0,
          certificate_issued: false,
        });

      if (enrollmentError) {
        console.error(enrollmentError.message);
      }
    }

    alert("Portal access request submitted successfully.");
    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen text-white flex items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #24153f 0%, #1a1030 40%, #12091f 75%, #09050f 100%)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
        style={{
          background: "rgba(139,92,246,.13)",
          filter: "blur(140px)",
          borderRadius: "999px",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
        style={{
          background: "rgba(124,58,237,.13)",
          filter: "blur(120px)",
          borderRadius: "999px",
        }}
      />

      <form
        onSubmit={handleRegister}
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
          Request <span className="text-purple-500">Access</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Request access to your Elevate•365 client portal. Once reviewed, your
          account can be activated for approved business resources and services.
        </p>

        <input
          className="w-full mb-4 p-4 rounded-xl bg-white/10 border border-purple-500/30 text-white outline-none placeholder:text-white/35 focus:border-purple-400"
          placeholder="Business email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-4 rounded-xl bg-white/10 border border-purple-500/30 text-white outline-none placeholder:text-white/35 focus:border-purple-400"
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded-full bg-gradient-to-r from-purple-700 to-purple-500 py-4 font-bold uppercase tracking-widest shadow-[0_12px_35px_rgba(124,58,237,0.45)]">
          Request Portal Access
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have access?{" "}
          <Link to="/login" className="text-purple-400 font-bold">
            Sign in
          </Link>
        </p>

        <p className="text-center text-gray-500 mt-4 text-xs leading-6">
          Need help?{" "}
          <Link to="/contact" className="text-purple-400 font-semibold">
            Contact support
          </Link>
        </p>
      </form>
    </div>
  );
}