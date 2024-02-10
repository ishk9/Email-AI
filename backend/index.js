import { config } from "dotenv";
import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/sendingcontent", async (req, res) => {
  try {
    console.log(req.body);
    const { content } = req.body;
    const prompt = content + "Also the mail should be in 4 sections:- Subject: , Header: , Body:, Closing: .Also after completion add Done";
    const response = await fetchDataFromAPI(prompt);
    console.log(response);
    res.json({ success: true, message: response});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function fetchDataFromAPI(content) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: content },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

// main();
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
