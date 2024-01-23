import { config } from "dotenv"
config()

import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "user", "content": "Write a mail to the hod asking him for a LOR"},
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
main();