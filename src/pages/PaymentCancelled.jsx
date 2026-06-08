export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-5xl font-bold text-red-700 mb-4">
        Payment Cancelled
      </h1>

      <p className="text-xl text-gray-700">
        Your payment was not completed.
      </p>
    </div>
  );
}