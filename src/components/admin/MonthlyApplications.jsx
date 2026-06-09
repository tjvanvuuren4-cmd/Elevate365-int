import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function MonthlyApplications() {
const [applications, setApplications] = useState([]);

useEffect(() => {
fetchApplications();
}, []);

const fetchApplications = async () => {
const { data, error } = await supabase
.from("monthly_payment_requests")
.select("*")
.order("created_at", { ascending: false });

if (error) {
  console.error(error);
  return;
}

setApplications(data || []);

};

const updateStatus = async (id, status) => {
const { error } = await supabase
.from("monthly_payment_requests")
.update({ status })
.eq("id", id);

if (error) {
  console.error(error);
  alert(error.message);
  return;
}

fetchApplications();

};

return ( <div className="space-y-6"> <div> <h2 className="text-3xl font-bold text-white">
Monthly Applications </h2>

    <p className="text-slate-400 mt-2">
      Review and manage monthly payment requests.
    </p>
  </div>

  {applications.length === 0 ? (
    <div className="rounded-2xl border border-slate-700 p-6 text-slate-400">
      No monthly applications found.
    </div>
  ) : (
    <div className="space-y-4">
      {applications.map((app) => (
        <div
          key={app.id}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Name:</strong> {app.customer_name}
              </p>

              <p>
                <strong>Email:</strong> {app.customer_email}
              </p>

              <p>
                <strong>Amount:</strong>{" "}
                R{" "}
                {Number(app.total_amount).toLocaleString("en-ZA", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    app.status === "approved"
                      ? "text-green-500 font-semibold"
                      : app.status === "declined"
                      ? "text-red-500 font-semibold"
                      : "text-yellow-500 font-semibold"
                  }
                >
                  {app.status}
                </span>
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Submitted:
                {" "}
                {new Date(app.created_at).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => updateStatus(app.id, "approved")}
              className="rounded-xl bg-green-600 hover:bg-green-500 px-4 py-2 text-white font-semibold transition"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus(app.id, "declined")}
              className="rounded-xl bg-red-600 hover:bg-red-500 px-4 py-2 text-white font-semibold transition"
            >
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
);
}
