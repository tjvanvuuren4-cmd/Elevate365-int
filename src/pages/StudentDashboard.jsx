import { useAuth } from "@/lib/AuthContext";
import { courses, USD_TO_ZAR } from "@/data/courses";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Enrollment error:", error.message);
        return;
      }

      setEnrollments(data || []);
    };

    fetchEnrollments();
  }, [user]);

  const approvedCourses = enrollments.filter(
    (item) => item.status === "approved"
  ).length;

  const certificates = enrollments.filter(
    (item) => item.certificate_issued === true
  ).length;

  return (
    <div className="min-h-screen bg-[#03030b] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-purple-500/20 bg-black/60 p-8 shadow-[0_0_60px_rgba(124,58,237,0.18)]">
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-bold">
            Student Portal
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <div>
              <h1 className="text-5xl font-black">
                Welcome back,{" "}
                <span className="text-purple-500">
                  {user?.email?.split("@")[0]}
                </span>
              </h1>

              <p className="text-gray-400 mt-4 max-w-2xl">
                Continue your learning journey, track your progress, and access
                your enrolled Elevate•365 courses.
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
          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-6">
            <p className="text-gray-500">My Courses</p>
            <h2 className="text-4xl font-black text-purple-400 mt-2">
              {approvedCourses}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-6">
            <p className="text-gray-500">Progress</p>
            <h2 className="text-4xl font-black text-purple-400 mt-2">
              {approvedCourses > 0 ? "Active" : "Active Member"}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-6">
            <p className="text-gray-500">Certificates</p>
            <h2 className="text-4xl font-black text-purple-400 mt-2">
              {certificates}
            </h2>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-black">
            My <span className="text-purple-500">Courses</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Locked courses will unlock once payment has been approved.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {courses.map((course) => {
              const enrollment = enrollments.find(
                (item) =>
                  String(item.course_id) === String(course.id)
              );

              const status = enrollment?.status || "locked";

              const isUnlocked = status === "approved";

              const progress = enrollment?.progress || 0;

              const priceZAR = course.priceUSD * USD_TO_ZAR;

              return (
                <div
                  key={course.id}
                  className={`rounded-[2rem] overflow-hidden border bg-black/60 ${
                    isUnlocked
                      ? "border-purple-500/30 shadow-[0_0_45px_rgba(124,58,237,0.2)]"
                      : "border-white/10 opacity-70"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-48 w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <span
                      className={`absolute top-4 right-4 rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest ${
                        isUnlocked
                          ? "bg-green-500/20 text-green-300"
                          : status === "pending"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : status === "awaiting_documents"
                          ? "bg-blue-500/20 text-blue-300"
                          : status === "removed"
                          ? "bg-red-500/20 text-red-300"
                          : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {status === "approved"
                        ? "Approved"
                        : status === "pending"
                        ? "Pending"
                        : status === "awaiting_documents"
                        ? "Awaiting Docs"
                        : status === "removed"
                        ? "Removed"
                        : "Locked"}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-purple-400 text-xs uppercase tracking-widest">
                      {course.category}
                    </p>

                    <h3 className="text-xl font-black mt-3 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-gray-500 text-xs">Value</p>
                        <p className="text-purple-400 font-black">
                          R {priceZAR.toLocaleString()}
                        </p>
                      </div>

                      <button
                        disabled={!isUnlocked}
                        className={`rounded-full px-5 py-3 text-xs font-black uppercase tracking-widest transition-all ${
                          isUnlocked
                            ? "bg-purple-600 hover:bg-purple-500 text-white"
                            : "bg-white/10 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {status === "approved"
                          ? "Continue"
                          : status === "pending"
                          ? "Awaiting Approval"
                          : status === "awaiting_documents"
                          ? "Documents Required"
                          : status === "removed"
                          ? "Access Removed"
                          : "Locked"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}