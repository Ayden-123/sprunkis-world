import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const Bucket = process.env.R2_BUCKET_NAME;
export const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
});
// export async function sendR2(blob: Blob ) {

//     let fileName = uuidv4() + '.png'
//     const Body = (await blob.arrayBuffer()) as Buffer;
//     console.log('bucket为', Bucket + 'filename', fileName + "r2:" + r2)
//     let res = r2.send(new PutObjectCommand({ Bucket: Bucket, Key: fileName, Body}))
//     console.log('r2res', res)
//     return fileName
// }

// export async function getR2(filename: string) {
//     const command = new GetObjectCommand({ Bucket: Bucket, Key: filename });
//     const src = await getSignedUrl(r2, command, { expiresIn: 3600 });
//     return src
// }