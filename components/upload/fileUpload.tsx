// import React, { useState } from 'react';

// const FileUpload: React.FC = () => {
//   const [url, setUrl] = useState('');

//   return (
//     <div className="relative" role="presentation" tabIndex={0}>
//       <div className="relative">
//         <input
//           type="url"
//           id="swap_image"
//           required
//           className="border py-2 pl-2 pr-16 border-gray-300 w-full resize-none disabled:cursor-not-allowed disabled:opacity-50 truncate"
//           placeholder="输入URL，粘贴文件，或拖拽文件到此处。"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <div className="absolute top-0 right-2 bottom-0 flex items-center gap-1.5">
//           <button
//             type="button"
//             className="p-1 text-blue-600 hover:bg-blue-100 rounded-full"
//             aria-label="从您的设备上传文件"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z" opacity="0.2"></path>
//               <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
//             </svg>
//           </button>
//           <button
//             type="button"
//             className="p-1 text-blue-600 hover:bg-blue-100 rounded-full"
//             aria-label="使用网络摄像头拍照"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2"></path>
//               <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;


import React, { useState, useRef } from 'react';

const FileUpload: React.FC = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUrl(selectedFile.name); // 在输入框中显示文件名
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative" role="presentation" tabIndex={0}>
      <div className="relative">
        {/* <input
          type="url"
          id="swap_image"
          required
          className="border py-2 pl-2 pr-16 border-gray-300 w-full resize-none disabled:cursor-not-allowed disabled:opacity-50 truncate"
          placeholder="输入URL, 粘贴文件, 或拖拽文件到此处。"
          value={url}
        //   onChange={handleUrlChange}
        disabled
        /> */}
        <div className="absolute top-0 right-2 bottom-0 flex items-center gap-1.5">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
          />
          <button
            type="button"
            className="p-1 text-blue-600 hover:bg-blue-100 rounded-full"
            aria-label="从您的设备上传文件"
            onClick={triggerFileInput}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z" opacity="0.2"></path>
              <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
            </svg>
          </button>
        </div>
      </div>
      {file && (
        <p className="mt-2 text-sm text-gray-600">
          已选择文件: {file.name}
        </p>
      )}
    </div>
  );
};

export default FileUpload;