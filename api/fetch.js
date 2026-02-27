export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    const data = await response.text();

    res.setHeader("Content-Type", contentType || "text/plain");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URL" });
  }
}
