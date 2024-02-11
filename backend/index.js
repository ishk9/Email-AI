import { config } from "dotenv";
import OpenAI from "openai";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import Mail from "./model/mailSchema.js";

config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT =  process.env.PORT || 8000;
const DB = `mongodb+srv://ishaankhullar06:${process.env.MONGODB_KEY}@cluster0.klqpicy.mongodb.net/?retryWrites=true&w=majority`;

app.post("/getnum", async(req, res) => {
  try{
    const count = await Mail.countDocuments();
    console.log(count);
    res.json({success: true, message:count});
  }
  catch (err) {
    console.log(err);
  }
});

app.post("/sendingcontent", async (req, res) => {
  try {
    console.log(req.body);
    const { content } = req.body;
    const prompt = content + "Also the mail should be in 4 sections:- Subject: , Header: , Body:, Closing: .Also after completion add Done";
    const response = await fetchDataFromAPI(prompt);
    console.log(response);
    
    const mail = new Mail({mail: content});
    mail.save();
    
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

mongoose.connect(DB).then(() => {
  console.log("Connection successful!");
}).catch(() => {
  console.log("Error connecting to database");
});

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
