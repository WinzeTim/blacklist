export default async function handler(req, res) {
  const blacklistedIds = [
    "1129200990114037782",
    "123456789012345678",
    "987654321098765432"
  ];

  const userId = req.query.id;

  if (!userId) {
    return res.status(400).json({ error: "Missing ?id=USERID in query." });
  }

  const isBlacklisted = blacklistedIds.includes(userId);
  return res.status(200).json({ blacklisted: isBlacklisted });
}
