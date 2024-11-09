import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// DOWNLOAD IMAGE
export const download = (url: string, filename: string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;

      if (filename && filename.length)
        a.download = `${filename.replace(" ", "_")}.png`;
      document.body.appendChild(a);
      a.click();
    })
    .catch((error) => console.log({ error }));
};


export async function fetchAndConvertImage(url) {
  try {
    // 使用 fetch 获取网络图片的数据
    const response = await fetch(url);
    const imageData = await response.arrayBuffer();
    // 将图片数据转换为 Blob
    const blob = new Blob([imageData], { type: response.headers.get('content-type') });

    // 将 Blob 转换为 File（可选）
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const file = new File([blob], fileName, { type: response.headers.get('content-type') });

    return { blob, file };
  } catch (e) {
    console.log('fetchAndConvertImage错误', e)
  }
}