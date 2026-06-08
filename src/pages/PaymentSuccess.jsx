export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        Payment Successful
      </h1>

      <p className="text-xl text-gray-700">
        Thank you for your payment.
      </p>
    </div>
  );
}