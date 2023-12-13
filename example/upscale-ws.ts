import "dotenv/config";
import { Midjourney } from "../src";
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
/**
 *
 * a simple example of how to use the Upscale with ws command
 * ```
 * npx tsx example/upscale-ws.ts
 * ```
 */

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  });

  response.data.pipe(fs.createWriteStream(outputPath));

  return new Promise((resolve, reject) => {
    response.data.on('end', () => resolve());
    response.data.on('error', (err: any) => reject(err));
  });
}


async function main() {
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    // Debug: true,
    Ws: true,
  });
  await client.Connect();
  const Imagine = await client.Imagine(
    "a cool teenager, white and brown with yellow hat",
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log(Imagine);
  if (!Imagine) {
    console.log("no message");
    return;
  }
  const Upscale = await client.Upscale({
    index: 2,
    msgId: <string>Imagine.id,
    hash: <string>Imagine.hash,
    flags: Imagine.flags,
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
      
    },
  });
  console.log(Upscale);
  if (Upscale) {
    console.log("start to download");
    const outputPath = path.join(__dirname, 'Q2.png'); // Set your desired output path here
    downloadImage(Upscale.uri, outputPath).then(() => {
      console.log(`Image downloaded to ${outputPath}`);
    }).catch(console.error);
  }
  client.Close();
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
