import { NextResponse, userAgent } from "next/server";
import { Bucket, r2 } from "@/client/r2";
import { ChatItem, insertChat } from "./chat";
import { fetchAndConvertImage } from "@/utils/fileConvert";
import {
    GetObjectCommand,
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { auth } from "@clerk/nextjs/server";
import { id } from "date-fns/locale";


export async function ideogram_gen(body: any, extra: any) {
    let response: Response;
    response = await fetch("https://api.ideogram.ai/generate", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Api-Key": process.env.IDEOGRAM_API_KEY,
        }
    })
    console.log('555', response)
    if (response.status !== 200) {
        return NextResponse.json({ error: response.statusText }, { status: response.status });
    } else {
        const resp = await response.json()
        let ideogram_item = resp.data[0]
        let new_chatItem : ChatItem
        // 将图片存进r2
        response = await fetchAndConvertImage(ideogram_item.url)
            .then(async ({ blob, file }) => {
                let fileName = uuidv4()
                const Body = (await file.arrayBuffer()) as Buffer;
                await r2.send(new PutObjectCommand({ Bucket, Key: fileName, Body }));
                const src = 'https://file.deeposter.com/' + fileName
                let cid = uuidv4()
                let chatItem: ChatItem = {
                    user_id: auth().userId,
                    // prompt: ideogram_item.prompt || "",
                    prompt: extra.prompt || "",
                    images: [src],
                    title: cid,
                    cid: cid,
                    source_type: extra.source_type,
                    did: "0",
                    cover: src,
                    url: extra.url || "",
                    file: extra.file || "",
                    model: extra.model,
                    aspect_ratio: extra.aspect_ratio || "",
                    content_type: extra.content_type || "",
                    style_type: extra.style_type || "Auto",
                    seed: String(ideogram_item.seed) || ""
                }
                new_chatItem = await insertChat(chatItem)
                if (new_chatItem) {
                    return NextResponse.json({ chatItem: chatItem }, { status: 200 });
                } else {
                    return NextResponse.json({ }, { status: 501 });
                }
            }).catch((e) => {
                return NextResponse.json({ error: e }, { status: 502 });
            })

        if (response.status !== 200) {
            return NextResponse.json({ }, { status: response.status });
        } else {
            let resp = await response.json()
            return NextResponse.json({ chatItem: new_chatItem, status: 200 });
        }
    }
}