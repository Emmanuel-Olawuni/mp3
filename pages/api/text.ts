import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import axios from "axios";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { text, filename, voice } = req.body;
  const apiKey = process.env.TALKIFY_API_KEY;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const filenamewithoutSpaces = filename.replace(/\s+/g, "");

  const uploadDir = process.env.NODE_ENV === "production" ? "/tmp" : path.join(process.cwd(), "public", "audio");
  const filePath = path.join(uploadDir, `${filenamewithoutSpaces}.mp3`);

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

    fs.writeFileSync(filePath, response.data);

    res.status(200).json({ path: filePath, fileName: filenamewithoutSpaces });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Clean up the file if it's in the temporary directory
    if (process.env.NODE_ENV === "production" && fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (unlinkErr) {
        console.error("Error cleaning up uploaded file:", unlinkErr);
      }
    }
  }
}
