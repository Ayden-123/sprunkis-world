import { r2, Bucket } from '@/client/r2'
import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function GET(_: Request, { params }: { params: { key : string } }) {
  const command = new GetObjectCommand({ Bucket, Key: params.key});
  const src = await getSignedUrl(r2, command, { expiresIn: 3600 });
  return NextResponse.json({ src });
}