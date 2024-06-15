import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import axios from "axios";
import { toast } from "react-toastify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { text, filename, voice } = req.body;
    const apiKey = process.env.TALKIFY_API_KEY;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
    const filenamewithoutSpaces = filename.replace(/\s+/g, "");
    try {
      const response = await axios.post(
        `https://talkify.net/api/speech/v1?key=${apiKey}`,
        {
          text: text,
          voice: voice,
          outputFormat: "mp3",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );

      const filePath = path.join(
        process.cwd(),
        "public",
        "audio",
        `${filenamewithoutSpaces}.mp3`
      );
      fs.writeFileSync(filePath, response.data);

      res.status(200).json({ path: `${filePath}` });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Connection failed!");
      } else {
        toast.error("Internal server error. Please try again later.");
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
