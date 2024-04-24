import { TextToSpeechClient, protos } from "@google-cloud/text-to-speech";
import * as fs from "fs";
import * as util from "util";

const client = new TextToSpeechClient();

export const convertToMp3 = async (
  text: string,
  outputfile: string
): Promise<void> => {
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
  try {
    const [response] = await client.synthesizeSpeech(request);
    const audioContent = response.audioContent as Uint8Array;
    if (audioContent) {
      await fs.promises.writeFile(outputfile, audioContent, "binary");

      console.log(" audio has been written to file", +outputfile);
    } else {
      throw new Error("audio content is empty");
    }
  } catch (error) {
    console.log(error);
  }
};
