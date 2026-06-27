import { useAuth } from "@/lib/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);

  const fetchEnrollments = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("enrollments")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Client access error:", error.message);
      return;
    }

    setEnrollments(data || []);
  };

  useEffect(() => {
    fetchEnrollments();
  }, [user]);

  const createEnrollment = async (courseId) => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const { error } = await supabase.from("enrollments").insert({
      user_id: user.id,
      course_id: courseId,
      status: "pending",
      progress: 0,
      certificate_issued: false,
    });

    if (error) {
      console.error("Access request error:", error.message);
      alert(error.message);
      return;
    }

    alert("Access request submitted. Waiting for admin approval.");
    fetchEnrollments();
  };

  const approvedServices = enrollments.filter(
    (item) => item.status === "approved"
  ).length;

  const documentsAvailable = enrollments.filter(
    (item) => item.certificate_issued === true
  ).length;

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-8 py-24"
      style={{
        background:
          "linear-gradient(180deg, #24153f 0%, #1a1030 40%, #12091f 75%, #09050f 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.16),transparent_42%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-purple-500/20 bg-black/50 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.18)]">
          <p className="text-purple-300 uppercase tracking-[0.25em] text-sm font-bold">
            Client Portal
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <div>
              <h1 className="text-5xl font-black">
                Welcome back,{" "}
                <span className="text-purple-400">
                  {user?.email?.split("@")[0]}
                </span>
              </h1>

              <p className="text-white/65 mt-4 max-w-2xl">
                Access your approved services, support resources and business
                technology updates.
              </p>
            </div>

            <button
              onClick={logout}
              className="rounded-full bg-purple-600 hover:bg-purple-500 px-6 py-3 font-bold uppercase tracking-widest transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6">
            <p className="text-white/50">Approved Services</p>
            <h2 className="text-4xl font-black text-purple-300 mt-2">
              {approvedServices}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6">
            <p className="text-white/50">Account Status</p>
            <h2 className="text-4xl font-black text-purple-300 mt-2">
              {enrollments.length > 0 ? "Submitted" : "Request Access"}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6">
            <p className="text-white/50">Documents Available</p>
            <h2 className="text-4xl font-black text-purple-300 mt-2">
              {documentsAvailable}
            </h2>
          </div>
        </div>

        <section className="mt-16">
  <h2 className="text-4xl font-black">
    Client <span className="text-purple-400">Services</span>
  </h2>

  <p className="text-white/65 mt-3">
    Quick access to your business technology services and resources.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
    {[
      ["📄 Resources", "Download cybersecurity guides, templates and documentation.", "Open Resources", "/resources"],
      ["📞 Support", "Need assistance from our IT specialists?", "Contact Support", "/contact"],
      ["🛡 Security Review", "Request a cybersecurity assessment for your business.", "Request Review", "/contact"],
      ["📅 Consultation", "Schedule a meeting with an Elevate365 consultant.", "Book Meeting", "/contact"],
    ].map(([title, desc, button, path]) => (
      <div
        key={title}
        className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8"
      >
        <h3 className="text-xl font-bold mb-4">{title}</h3>

        <p className="text-white/60 mb-6">{desc}</p>

        <button
          onClick={() => navigate(path)}
          className="w-full rounded-full bg-purple-600 hover:bg-purple-500 py-3 font-bold transition-all"
        >
          {button}
        </button>
      </div>
    ))}
  </div>
</section>
      </div>
    </div>
  );
}