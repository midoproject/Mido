import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Welcome to Mido Project!</h1>
    <p>This is a simple Node.js + Express app running locally.</p>
  `);
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "Mido Project is running perfectly!",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
