import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { customer, cartItems, totalAmount } = location.state || {};

  const amountInCents = Number(totalAmount) * 100;

  const handlePayment = async () => {
    try {
      if (!customer || !cartItems?.length || !totalAmount) {
        alert("Missing checkout information. Please return to cart.");
        navigate("/cart");
        return;
      }

      const response = await fetch("/api/create-stitch-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountInCents,
          payerName: customer.name,
          payerEmailAddress: customer.email,
          payerPhoneNumber: "+27791231234",
          courses: cartItems,
        }),
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        console.error(data);
        alert("Could not start payment. Check console.");
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <p className="text-amber-400 font-semibold mb-3">
            Elevate365 Secure Checkout
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm mb-6">
            🎓 Beginner Friendly • Certificate Included
          </div>
          <img
           src="/images/elevate365-logo1.webp"
           alt="Elevate365"
           className="w-64 mx-auto"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            You're One Step Away From Success
          </h1>

          <p className="text-slate-300 text-lg mb-6">
            Review your selected courses and proceed to our secure payment gateway to finalize your enrollment.
          </p>
          <ul className="mt-6 space-y-2 text-slate-300">
          <li>✓ Full course access</li>
          <li>✓ Downloadable resources</li>
          <li>✓ Certificate of completion</li>
          <li>✓ Lifetime access</li>
          </ul>

          <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
            <div className="bg-white/10 rounded-xl p-4">🔒 Secure Payment</div>
            <div className="bg-white/10 rounded-xl p-4">🎓 Certificate Included</div>
            <div className="bg-white/10 rounded-xl p-4">💳 Card Payments</div>
            <div className="bg-white/10 rounded-xl p-4">📧 Support Available</div>
          </div>
        </div>

        <div className="bg-white text-slate-950 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Order Summary</h2>

          <p className="text-slate-600 mb-6">
            Review your enrollment details below. When you're ready, continue to our secure payment gateway to complete your registration.
          </p>

          <div className="border-y border-slate-200 py-5 mb-6 space-y-4">
            <div className="flex justify-between">
              <span>Selected Courses</span>
              <div className="text-left font-semibold space-y-1">
               {cartItems?.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
               {item.title}
              </div>
              ))}
            </div>
              </div>
            <div className="flex justify-between">
              <span>Provider</span>
              <span className="font-semibold">Elevate365</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>
                R {Number(totalAmount).toLocaleString("en-ZA", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
               })}
             </span>
            </div>
          </div>
          <p className="text-slate-600 mb-6">
          ✓ SSL Secured
          </p>
          <p className="text-slate-600 mb-6">
          ✓ Powered by Stitch Payments
          </p>
          <p className="text-slate-600 mb-6">
          ✓ Instant Enrollment After Payment
          </p>


          <button
            onClick={handlePayment}
            className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition"
          >
            Proceed to Secure Payment
          </button>

          <p className="text-xs text-slate-500 text-center mt-5">
            You will be redirected to Stitch to complete your secure payment.
          </p>

          <p className="text-xs text-slate-500 text-center mt-2">
            Need help? support@elevate365.co.za
          </p>
        </div>
      </div>
    </div>
  );
}