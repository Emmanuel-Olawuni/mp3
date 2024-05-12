import fs from "fs";
import path from "path";
import OpenAI from "openai";
import {NextApiRequest , NextApiResponse} from 'next'

const speechFile = path.resolve("./public/downloads/speech.mp3");

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

  try {
   
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
    console.log('Done ');
    
    res.status(200).json({note: "done"})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: "Internal Server Error"})
  }
}
// main();