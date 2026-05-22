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
    <div className="min-h-screen bg-[#03030b] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_35%)]" />

      <form
        onSubmit={handleLogin}
        className="relative w-full max-w-md rounded-3xl border border-purple-500/30 bg-black/70 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.35)]"
      >
        <h1 className="text-4xl font-black mb-2">
          Student <span className="text-purple-500">Login</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Access your Elevate•365 learning dashboard.
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
  {loading ? "Signing In..." : "Log In"}
</button>

        <p className="text-center text-gray-400 mt-6">
          No account?{" "}
          <Link to="/register" className="text-purple-400 font-bold">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}