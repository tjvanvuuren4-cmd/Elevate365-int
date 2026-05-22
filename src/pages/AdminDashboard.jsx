import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, profile, isAdmin } = useAuth();

  console.log("ADMIN USER:", user);
  console.log("ADMIN PROFILE:", profile);
  console.log("IS ADMIN:", isAdmin);
  
  const [pendingEFTRequests, setPendingEFTRequests] = useState(0);
  const [registeredStudents, setRegisteredStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      const { data: eftData } = await supabase
        .from("manual_orders")
        .select("*")
        .eq("status", "pending");

      const { data: studentsData } = await supabase
        .from("profiles")
        .select("*");

      const { data: coursesData } = await supabase
        .from("courses")
        .select("*");

      setPendingEFTRequests(eftData?.length || 0);
      setRegisteredStudents(studentsData?.length || 0);
      setCourses(coursesData?.length || 0);
      setOrders(eftData || []);
    };

    fetchAdminData();
  }, []);

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
  <h2 className="text-3xl font-black mb-8">
    Recent EFT Requests
  </h2>

  <div className="space-y-4">
    {orders.length ? (
      orders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between rounded-2xl border border-purple-500/10 bg-black/40 p-5"
        >
          <div>
            <p className="font-bold text-lg">{order.full_name}</p>
            <p className="text-gray-400 text-sm">{order.email}</p>
          </div>

          <div>
            <p className="text-purple-400 font-black text-xl">
              R {Number(order.total_amount).toLocaleString()}
            </p>
          </div>

          <div>
            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-300">
              {order.status}
            </span>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 leading-relaxed">
         No payment requests yet.<br />
         New enrollments will appear here automatically.
     </p>
    )}
  </div>
        </div>
      </div>
    </div>
  );
}