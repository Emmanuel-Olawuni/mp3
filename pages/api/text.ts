import { TextToSpeechClient, protos } from "@google-cloud/text-to-speech";
import { NextApiRequest, NextApiResponse } from "next";

import * as fs from "fs";
import * as util from "util";

const client = new TextToSpeechClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  const { text } = req.body;

  try {
    const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
      {
        input: { text: text },
        voice: {
          languageCode: "en-US",
          ssmlGender: "MALE",
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      };
    const [response] = await client.synthesizeSpeech(request);

    const audioContent = response.audioContent as Uint8Array;
    await fs.promises.writeFile("outputfile", audioContent, "binary");
    console.log(" audio has been written to file", +"outputfile");
    res.status(200).json({
      audioContent: response.audioContent?.toString(),
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

// export default async function convertToMp3 = async (
//   text: string,
//   outputfile: string
// ): Promise<void> => {

//   try {
//     const [response] = await client.synthesizeSpeech(request);

//   } catch (error) {
//     console.log(error);
//   }
// };
