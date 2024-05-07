import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
var txtomp3 = require("text-to-mp3");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { text } = req.body; // assuming text is sent in the request body
    const directoryPath = "/path/to/your/directory/";
    
    const binaryStream = await txtomp3.getMp3(text);
    
    const filePath = path.join(directoryPath, "FileName.mp3");
    const file = fs.createWriteStream(filePath);
    binaryStream.pipe(file);
    
    res.status(200).json({ success: true, message: "MP3 file saved successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Failed to save MP3 file." });
  }
}
