import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { isAdmin } = useAuth();

  const [pendingEFTRequests, setPendingEFTRequests] = useState(0);
  const [registeredStudents, setRegisteredStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [orders, setOrders] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  const fetchAdminData = async () => {
    const { data: eftData, error: eftError } = await supabase
      .from("manual_orders")
      .select("*")
      .eq("status", "pending");

    if (eftError) console.error("EFT error:", eftError.message);

    const { data: enrollmentData, error: enrollmentError } = await supabase
  .from("enrollments")
  .select("*")
  .order("created_at", { ascending: false });

    if (enrollmentError) console.error("Enrollment error:", enrollmentError.message);

    const { data: studentsData, error: studentsError } = await supabase
      .from("profiles")
      .select("*");

    if (studentsError) console.error("Students error:", studentsError.message);

    const { data: coursesData, error: coursesError } = await supabase
      .from("courses")
      .select("*");

    if (coursesError) console.error("Courses error:", coursesError.message);

    setPendingEFTRequests(eftData?.length || 0);
    setRegisteredStudents(studentsData?.length || 0);
    setCourses(coursesData?.length || 0);
    setOrders(eftData || []);
    setEnrollments(enrollmentData || []);
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const updateEnrollmentStatus = async (enrollmentId, status) => {
    const { error } = await supabase
      .from("enrollments")
      .update({ status })
      .eq("id", enrollmentId);

    if (error) {
      console.error("Status update error:", error.message);
      alert(error.message);
      return;
    }

    fetchAdminData();
  };

  const updateEnrollmentProgress = async (enrollmentId, progress) => {
    const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

    const { error } = await supabase
      .from("enrollments")
      .update({ progress: safeProgress })
      .eq("id", enrollmentId);

    if (error) {
      console.error("Progress update error:", error.message);
      alert(error.message);
      return;
    }

    fetchAdminData();
  };

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-[#03030b] text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black">
          Admin <span className="text-purple-500">Dashboard</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Manage EFT requests, students, and course access.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-3xl border border-purple-500/20 bg-black/60 p-8">
            <p className="text-gray-500">Pending EFT Requests</p>
            <h2 className="text-5xl font-black mt-4 text-purple-400">
              {pendingEFTRequests}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/60 p-8">
            <p className="text-gray-500">Registered Students</p>
            <h2 className="text-5xl font-black mt-4 text-purple-400">
              {registeredStudents}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/60 p-8">
            <p className="text-gray-500">Courses</p>
            <h2 className="text-5xl font-black mt-4 text-purple-400">
              {courses}
            </h2>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-purple-500/20 bg-black/60 p-8">
          <h2 className="text-3xl font-black mb-8">Recent EFT Requests</h2>

          <div className="space-y-4">
            {orders.length ? (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="grid md:grid-cols-4 gap-4 items-center rounded-2xl border border-purple-500/10 bg-black/40 p-5"
                >
                  <div>
                    <p className="text-gray-500 text-sm">Name</p>
                    <p className="font-bold">{order.full_name}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-bold text-sm break-all">{order.email}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Amount</p>
                    <p className="text-purple-400 font-black">
                      R {Number(order.total_amount || 0).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Status</p>
                    <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-bold uppercase text-yellow-300">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 leading-relaxed">
                No payment requests yet.
                <br />
                New enrollments will appear here automatically.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-purple-500/20 bg-black/60 p-8">
          <h2 className="text-3xl font-black mb-8">Student Enrollments</h2>

          <div className="space-y-4">
            {enrollments.length ? (
              enrollments.map((enrollment) => (
                <div
                  key={enrollment.id}
                  className="rounded-2xl border border-purple-500/10 bg-black/40 p-5"
                >
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Student ID</p>
                      <p className="font-bold text-sm break-all">
                        {enrollment.user_id}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Course ID</p>
                      <p className="font-bold text-sm break-all">
                        {enrollment.course_id}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Progress</p>
                      <p className="text-purple-400 font-black">
                        {enrollment.progress || 0}%
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Status</p>
                      <span className="rounded-full bg-purple-500/20 px-4 py-2 text-xs font-bold uppercase text-purple-300">
                        {enrollment.status || "pending"}
                      </span>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Certificate</p>
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-bold uppercase ${
                          enrollment.certificate_issued
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {enrollment.certificate_issued ? "Issued" : "Not Issued"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <button
                      onClick={() =>
                        updateEnrollmentStatus(enrollment.id, "approved")
                      }
                      className="rounded-full bg-green-500/20 px-4 py-2 text-xs font-bold text-green-300"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateEnrollmentStatus(enrollment.id, "pending")
                      }
                      className="rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-bold text-yellow-300"
                    >
                      Pending
                    </button>

                    <button
                      onClick={() =>
                        updateEnrollmentStatus(
                          enrollment.id,
                          "awaiting_documents"
                        )
                      }
                      className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-bold text-blue-300"
                    >
                      Awaiting Docs
                    </button>

                    <button onClick={() => setActiveTab("monthly")}>
                      Monthly Applications
                    </button>

                    <button
                      onClick={() =>
                        updateEnrollmentStatus(enrollment.id, "removed")
                      }
                      className="rounded-full bg-red-500/20 px-4 py-2 text-xs font-bold text-red-300"
                    >
                      Remove
                    </button>

                    <div className="flex items-center gap-2 md:ml-auto">
                      <p className="text-xs text-gray-400 uppercase">
                        Progress
                      </p>

                      <input
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={enrollment.progress || 0}
                        onBlur={(e) =>
                          updateEnrollmentProgress(
                            enrollment.id,
                            e.target.value
                          )
                        }
                        className="w-24 rounded-full border border-purple-500/20 bg-white/10 px-4 py-2 text-sm font-bold text-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 leading-relaxed">
                No student enrollments yet.
                <br />
                Approved students will appear here automatically.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}