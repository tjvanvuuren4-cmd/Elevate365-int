export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, payerName, payerEmailAddress, payerPhoneNumber } = req.body;

    const tokenResponse = await fetch("https://express.stitch.money/api/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: process.env.STITCH_CLIENT_ID,
        clientSecret: process.env.STITCH_CLIENT_SECRET,
        scope: "client_paymentrequest",
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.success) {
      return res.status(400).json({
        error: "Could not generate Stitch token",
        details: tokenData,
      });
    }

    const accessToken = tokenData.data.accessToken;
    const merchantReference = `ELEVATE-${Date.now()}`;

    const paymentResponse = await fetch("https://express.stitch.money/api/v1/payment-links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        amount,
        payerName,
        merchantReference,
        payerEmailAddress,
        payerPhoneNumber,
        collectDeliveryDetails: false,
        skipCheckoutPage: false,
        successUrl: "http://localhost:3000/payment-success",
        cancelUrl: "http://localhost:3000/payment-cancelled",
      }),
    });

    const paymentData = await paymentResponse.json();

    if (!paymentResponse.ok || !paymentData.success) {
      return res.status(400).json({
        error: "Could not create payment link",
        details: paymentData,
      });
    }

    return res.status(200).json({
      checkoutUrl: paymentData.data.payment.link,
      paymentId: paymentData.data.payment.paymentId,
      merchantReference,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}