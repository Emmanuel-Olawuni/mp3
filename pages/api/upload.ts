import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import mammoth from "mammoth";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({
    uploadDir: process.env.NODE_ENV === 'production' ? '/tmp' : './public/uploads',
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'Form parse error' });
    }

    const uploadedFile = files.file;
    if (!uploadedFile) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile;
    const filePath = file.filepath;
    console.log('File path:', filePath);

    try {
      const result = await mammoth.extractRawText({ path: filePath });
      const text = result.value;
      console.log('Extracted text:', text);

      res.status(200).json({ text });
    } catch (error) {
      console.error('Error processing file:', error);
      return res.status(500).json({ error: 'Unable to process the uploaded file' });
    } finally {
      // Clean up uploaded file
      try {
        fs.unlinkSync(filePath);
      } catch (unlinkErr) {
        console.error('Error cleaning up uploaded file:', unlinkErr);
      }
    }
  });
}
