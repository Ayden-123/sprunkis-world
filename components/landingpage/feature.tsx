"use client";
import { motion } from "framer-motion";
import { FeaturesList } from "@/lib/featuresList";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { CalendarClock, GraduationCap, HeartHandshake, Megaphone, Palette, UserCircle2 } from "lucide-react";

export default function Feature({ locale, langName = "en" }) {
  let list = FeaturesList[`FRETURES_${langName.toUpperCase()}`] || [];

  return (
    <section id="feature" className="relative py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto">
          <h3 className="font-bold text-3xl md:text-5xl bg-white/80 from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em] text-landingpage_text_big_white">
            {/* {locale.h3} */}
            Who is DeePoster for?
          </h3>
          {/* <p className='text-center text-landingpage_text_small_white'>DeePoster This is a summarizing tool designed for students, writers, teachers, institutions, journalists, and any internet user who needs to quickly understand the essence of lengthy content.</p> */}
        </div>
      </motion.div>

      <div className="relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <Megaphone className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Marketers</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster enables them to quickly create eye-catching posters without design skills.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <Palette className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Small business owners</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster helps them create stunning posters with just a few clicks to meet their constant visual content needs.</p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <UserCircle2 className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Content creators/influencers</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster allows them to enhance their online presence with visually appealing graphics by easily turning ideas or blog posts into shareable posters.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <GraduationCap className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Educators</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster enables them to create engaging visual aids for lessons by summarizing key concepts into visually striking posters.</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <HeartHandshake className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Non-profit organizations</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster lets them create impactful posters for campaigns and awareness programs without a dedicated design team.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className='w-full min-h-48 p-5 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110'
          >
            <CalendarClock className='text-3xl text-landingpage_text_big_white'/>
            <div className='text-xl font-bold text-center text-landingpage_text_big_white'>Event organizers</div>
            <p className='text-center text-landingpage_text_small_white'>DeePoster helps them produce attractive promotional materials quickly by generating professional-looking posters in various styles.</p>
          </div>
        </motion.div>

      </div>

      <div className="hidden md:block absolute left-[20%] top-[10%] z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="w-full mt-10">
        <div className="h-px bg-white/20"></div>
      </div>
    </section>
  );
}
