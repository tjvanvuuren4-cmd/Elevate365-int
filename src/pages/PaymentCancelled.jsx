import { Link } from "react-router-dom";

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

        <img
         src="/images/elevate365-logo.webp"
         alt="Elevate365"
         className="w-64 mx-auto"
        />

        <h1 className="text-4xl font-bold text-amber-500 mb-4">
          Checkout Interrupted
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          It looks like your payment wasn't completed. No funds have been deducted from your account. 
          Please try again or contact support if you need assistance.
        </p>

        <div className="bg-slate-600 rounded-2xl p-6 text-left mb-8">
          <h2 className="font-bold text-2xl text-white mb-4">
            What Can You Do Next?
          </h2>

          <ul className="space-y-3 text-white">
            <li>✓ Try the payment again</li>
            <li>✓ Check your card details</li>
            <li>✓ Try a different payment method</li>
            <li>✓ Contact our support team if you need assistance</li>
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/checkout"
            className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold transition"
          >
            Try Again
          </Link>

          <Link
            to="/"
            className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition"
          >
            Return to Elevate365
          </Link>
        </div>
      </div>
    </div>
  );
}