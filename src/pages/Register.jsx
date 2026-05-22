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

    alert("Account created successfully.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#03030b] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8b5cf633,transparent_35%)]" />

      <form
        onSubmit={handleRegister}
        className="relative w-full max-w-md rounded-3xl border border-purple-500/30 bg-black/70 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.35)]"
      >
        <h1 className="text-4xl font-black mb-2">
          Create <span className="text-purple-500">Account</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Join Elevate•365 and start learning today.
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

        <button className="w-full rounded-full bg-gradient-to-r from-purple-700 to-purple-500 py-4 font-bold uppercase tracking-widest shadow-[0_12px_35px_rgba(124,58,237,0.45)]">
          Register
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 font-bold">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}