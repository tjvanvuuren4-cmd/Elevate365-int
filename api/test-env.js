export default function handler(req, res) {
  return res.status(200).json({
    hasClientId: !!process.env.STITCH_CLIENT_ID,
    hasClientSecret: !!process.env.STITCH_CLIENT_SECRET,
    clientIdStart: process.env.STITCH_CLIENT_ID?.slice(0, 8) || null,
  });
}