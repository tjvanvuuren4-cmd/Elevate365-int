export default function Checkout() {
  const handlePayment = async () => {
    try {
      const response = await fetch("/api/create-stitch-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 89900,
          payerName: "Test Customer",
          payerEmailAddress: "test@example.com",
          payerPhoneNumber: "+27791231234",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-4xl font-bold mb-4">Elevate365 Payment</h1>

      <p className="text-xl mb-6">R899.00</p>

      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-amber-500 text-black font-bold rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
}