import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = "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";

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages
      })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Error al conectar con OpenAI:", error);
    res.status(500).json({ error: "Error al conectar con OpenAI" });
  }
});

app.listen(3000, () => console.log("✅ ChatAvanzado corriendo en http://localhost:3000"));

