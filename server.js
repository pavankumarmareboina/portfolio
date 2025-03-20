import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/github-contributions", async (req, res) => {
  const { username, year } = req.query;
  try {
    const response = await fetch(
      `https://github-contributions-api.vercel.app/v1/${username}?year=${year}`
    );
    const data = await response.json();
    res.json(data);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contributions" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
