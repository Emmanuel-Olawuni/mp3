import fs from "fs";
import path from "path";
import OpenAI from "openai";
import {NextApiRequest , NextApiResponse} from 'next'

const openai = new OpenAI();

const speechFile = path.resolve("./speech.mp3");

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
// main();