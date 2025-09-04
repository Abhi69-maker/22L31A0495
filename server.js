const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// POST route
app.post("/shorturl", (req, res) => {
  const { url, validity, shortcode } = req.body;

  if (!url || !shortcode) {
    return res.status(400).json({ error: "url and shortcode are required" });
  }

  res.json({
    shortLink: `http://localhost:${PORT}/${shortcode}`,
    validity: validity || "not set",
    originalUrl: url
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
