import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
        
        <img
         src="/images/elevate365-logo.webp"
         alt="Elevate365"
         className="w-64 mx-auto"
        />
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Payment Successful
        </h1>

        <p className="text-2xl uppercase tracking-wider text-green-600 font-semibold">
         Enrollment Confirmed
        </p>

        <p className="text-lg text-slate-600 mb-8">
          Welcome to Elevate365. Your payment has been received successfully.
        </p>

        <div className="bg-slate-600 rounded-2xl p-6 text-left mb-8">
          <h2 className="font-bold text-xl mb-4">
            What Happens Next?
          </h2>

          <ul className="space-y-3 text-slate-980">
            <li>✓ Confirmation email will be sent</li>
            <li>✓ Course access instructions will follow</li>
            <li>✓ Keep an eye on your inbox</li>
            <li>✓ Begin your cybersecurity learning journey</li>
          </ul>
        </div>

        <div className="mb-8">
          <p className="text-slate-500">
            Need assistance?
          </p>

          <p className="font-semibold text-amber-500">
            support@elevate365.co.za
          </p>
        </div>

        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}