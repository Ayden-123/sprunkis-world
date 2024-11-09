import Link from "next/link";
import { Button } from "../ui/button";
import { LuMousePointerClick } from "react-icons/lu";
import Image from 'next/image';
import { TypingAnimation } from "../ui/typing-animation";
export default function Hero({ locale, CTALocale, langName }) {

    return (
        <>
            <section
                className='relative z-10 flex flex-col items-start md:items-center pt-10 md:py-20 overflow-hidden'
                style={{ perspective: '800px' }}
            >

                <div>
                    <h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-white from-50% to-[#e0e0e0] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
                        Generate AI Poster
                        
                    </h1>
                    <TypingAnimation
                            className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-white from-50% to-[#e0e0e0] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5"
                            text="in a Click."
                        />
                    {/* <div className='font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-white from-50% to-[#e0e0e0] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
                        in a Click.
                    </div> */}
                </div>


                <div>
                    <h2 className='w-2/3 md:w-12/12 mx-auto text-xl md:text-xl text-white/60 md:text-center mb-5 md:mb-10'>
                        {/* Deeposter simplifies your poster creation process. Feed our AI any content source - URL, text, or file - and watch as it generates scroll-stopping posters in moments. */}
                        Transform your ideas into eye-catching posters with our AI Poster Generator. No design skills required. Try our AI Poster Generator and unleash your creativity!
                    </h2>
                </div>

                <div>
                    <div className="flex justify-center md:justify-start">
                        <a
                            className="btn border-none bg-purple_bg text-landingpage_text_big_white text-lg hover:bg-purple_bg/80 rounded-full"
                            href={`/home`}
                        >
                            <LuMousePointerClick />
                            Start for free
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-10'>
                    <div className="flex justify-center w-full">
                        <Image
                            className="rounded-full -mr-2"
                            src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1701537402054-image.png"
                            alt="Avatar of user 1"
                            width={32}
                            height={32}
                        />
                        <Image
                            className="rounded-full -mr-2"
                            src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/65ca518b60d1180014474e7c/1708585818972-FnzH9Z11_400x400.jpg"
                            alt="Avatar of user 2"
                            width={32}
                            height={32}
                        />
                        <Image
                            className="rounded-full -mr-2"
                            src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/65ca518b60d1180014474e7c/1708585831427-S6NXZPA5_400x400.jpg"
                            alt="Avatar of user 3"
                            width={32}
                            height={32}
                        />
                        <Image
                            className="rounded-full"
                            src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/65ca518b60d1180014474e7c/1708585864750-4ehSB5Ft_400x400.jpg"
                            alt="Avatar of user 4"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className='text-white/80'>
                        2000+ creators already joined DeePoster!
                    </div>
                </div>
            </section>


            <div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    id='patternId'
                    width='100%'
                    height='100%'
                >
                    <defs>
                        <pattern
                            id='a'
                            patternUnits='userSpaceOnUse'
                            width='20'
                            height='20'
                            patternTransform='scale(3) rotate(0)'
                        >
                            <rect
                                x='0'
                                y='0'
                                width='100%'
                                height='100%'
                                fill='hsla(0, 0%, 100%, 0)'
                            ></rect>
                            <path
                                d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
                                strokeWidth='0.5'
                                stroke='rgba(255, 255, 255, 0.3)'
                                fill='none'
                            ></path>
                        </pattern>
                    </defs>
                    <rect
                        width='800%'
                        height='800%'
                        transform='translate(0,0)'
                        fill='url(#a)'
                    ></rect>
                </svg>
                <div className='bg-gradient-to-b from-landingpage_bg from-20% to-transparent absolute inset-0'></div>
                <div className='bg-gradient-to-l from-landingpage_bg from-1% to-transparent to-20% absolute inset-0'></div>
                <div className='bg-gradient-to-r from-landingpage_bg from-1% to-transparent to-30% absolute inset-0'></div>
                <div className='bg-gradient-to-t from-landingpage_bg from-1% to-transparent to-30% absolute inset-0'></div>
            </div>
            <div className="hidden md:block absolute left-[60%] top-[45%] z-0">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

        </>
    );
}