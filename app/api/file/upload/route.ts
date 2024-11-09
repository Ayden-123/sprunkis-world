import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import {
  PutObjectCommand,
} from "@aws-sdk/client-s3";

import { r2, Bucket } from '@/client/r2'

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  // let fileName = uuidv4() + "." + file.name.split('.').pop()
  let fileName = uuidv4()
  if (file) {
    const Body = (await file.arrayBuffer()) as Buffer;
    await r2.send(new PutObjectCommand({ Bucket, Key: fileName, Body }));
  }

  return NextResponse.json({fileName: fileName});
}