// "use client";
// import { motion } from "framer-motion";
// import FeatureCard from "./feature/card";
// import { FeaturesList } from "@/lib/featuresList";
// import { MdOutlineFeaturedPlayList } from "react-icons/md";
// import Image from 'next/image';
// export default function RealFeature({ locale, langName = "en" }) {
//   let list = FeaturesList[`FRETURES_${langName.toUpperCase()}`] || [];

//   return (
//     <section id="real_feature" className="relative py-10 md:py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.5,
//         }}
//       >
//         <div className="relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto">
//           <h3 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em] text-landingpage_text_big_white">
//             {/* {locale.h3} */}
//             Who is TLDR This for1?
//           </h3>
//           <p className='text-center text-landingpage_text_small_white'>TLDR This is a summarizing tool designed for students, writers, teachers, institutions, journalists, and any internet user who needs to quickly understand the essence of lengthy content.</p>
//         </div>
//       </motion.div>

//       {/* <div className="relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">
//         hh
//       </div> */}


//       <div className="hidden md:block absolute left-[20%] top-[10%] z-0">
//         <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
//       </div>
//     </section>
//   );
// }



import Image from 'next/image';

export default function RealFeature({ locale, langName = "en" }) {
    return (
      <div className="relative z-10 w-full md:w-11/12 mx-auto space-y-16 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                Versatile & Adaptive: Multi-Source Integration
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              100% Automatic Poster Element Generator with just a click
            </h3>
            <p className="text-lg text-gray-300">
              Deeposter's clever AI poster generator analyzes your input content and automatically generates poster elements that perfectly match your message, creating visuals that are easy to grasp, share, and act upon. Our intelligent poster generator transforms your ideas into stunning visual content effortlessly.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`/images/feature/feature1.png`}
              alt="AI Summarization"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                Versatile & Adaptive: Multi-Source Integration
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
                Seamless Content Processing from Text, URL, or File for AI Poster Generation
            </h3>
            <p className="text-lg text-gray-300">
              In today's diverse digital landscape, Deeposter's intelligent AI poster generator accepts input from multiple sources. The advanced artificial intelligence poster maker distills content essence, turning it into visually striking poster elements. Our AI-powered poster generator is versatile and effortless for users, creating stunning posters from various inputs. Experience the future of posters design with our cutting-edge AI poster creation tool.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`/images/feature/feature2.png`}
              alt="Metadata Extraction"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                Style & Variety: Design Diversity at Your Fingertips
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
                Multiple Poster Styles
            </h3>
            <p className="text-lg text-gray-300">
              In a world of visual uniqueness, Deeposter's AI offers diverse poster styles. No design skills needed. Choose a style and hit "Create". Our AI turns your content into a visually striking posters for your audience. Professional-grade design is just a click away.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`/images/feature/feature3.png`}
              alt="AI Summarization"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>


       <div className="hidden md:block absolute left-[20%] top-[5%] z-0">
         <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
       </div>

       <div className="w-full mt-10">
                <div className="h-px bg-white/20"></div>
            </div>
      </div>
    );
  }