import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { text } = req.body;
    const apiKey = process.env.TALKIFY_API_KEY;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
    console.log('the text is: ', text);

    try {
      const response = await axios.post(
        `https://talkify.net/api/speech/v1?key=${apiKey}`,
        {
          text: text,
          voice: "David",
          outputFormat: "mp3",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );
      
      console.log(response);

      const filePath = path.join(
        process.cwd(),
        "public",
        "audio",
        "today.mp3"
      );
      fs.writeFileSync(filePath, response.data);

      res.status(200).json({ url: `/audio/today.mp3` });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
