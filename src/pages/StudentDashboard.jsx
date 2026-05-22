import { useAuth } from "@/lib/AuthContext";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#03030b] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-black">
              Student <span className="text-purple-500">Dashboard</span>
            </h1>
            <p className="text-gray-400 mt-3">
              Welcome back, {user?.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-full bg-purple-600 px-6 py-3 font-bold uppercase tracking-widest hover:bg-purple-500"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["My Courses", "View and continue your enrolled programs."],
            ["Progress", "Track your cybersecurity and blockchain journey."],
            ["Certificates", "Download certificates after completion."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-purple-500/30 bg-black/60 p-8 shadow-[0_0_40px_rgba(124,58,237,0.22)]"
            >
              <h2 className="text-2xl font-black text-purple-400">
                {title}
              </h2>
              <p className="text-gray-400 mt-4">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}