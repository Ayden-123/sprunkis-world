import { defaultLocale, getDictionary } from '@/lib/i18n';

import { SiteConfig } from '@/lib/config/site';
import { Metadata } from 'next';
import { localeNames } from "@/lib/i18n";

export async function generateMetadata({
    params,
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const dict = await getDictionary("en");

    return {
        title: `${dict.meta.title}`,
        description: `${dict.meta.description}`,
        authors: SiteConfig.authors,
        creator: SiteConfig.creator,
        icons: SiteConfig.icons,
        //   metadataBase: SiteConfig.metadataBase,
    };
}

const Page = async () => {

    const dict = await getDictionary('en');

    return (
        <>
            <link rel="canonical" href="https://sprunkisworld.com/" />
            <div className="w-full">

                <header className="bg-purple-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <span className="text-xl font-bold">{dict.common.appName}</span>
                            </div>

                            <nav>
                                <ul className="flex space-x-8">
                                    <li>
                                        <a href="/" className="hover:text-gray-200 transition-colors">
                                            {dict.header.home}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-200 transition-colors">
                                            {dict.header.about}
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="/" className="hover:text-gray-200 transition-colors">
                                            {dict.header.contactUs}
                                        </a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* 英雄区块 */}
                <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            {dict.hero.title}
                        </h1>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            {dict.hero.description}
                        </p>
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                            {dict.hero.cta}
                        </button>
                    </div>
                </section>


                {/* emb */}
                <div className="rounded-lg flex flex-col items-center justify-between">
                    <h2 className="text-lg md:text-3xl font-bold mb-4 py-5">
                        {dict.emb.title}
                    </h2>
                    <div className="width:500px;height:900px; 0px 0px -10px; rounded-lg">
                        <iframe src="https://www.gameflare.com/embed/sprunki-s-world/"
                            scrolling="no" width="800" height="635" >

                        </iframe>
                    </div>
                </div>

                {/* what */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">{dict.what.title}</h2>

                        <div className="bg-white rounded-lg p-8 shadow-sm mb-12 border border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                                {dict.what.pas1}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {dict.what.pas2}
                            </p>
                        </div>

                        {/* feature */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            <div className="space-y-6 bg-white rounded-lg p-8 shadow-sm mb-12 border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6">{dict.feature.title}</h2>
                                <ul className="space-y-3 list-disc list-outside ml-6">
                                    <li>
                                        <h3 className="font-bold mb-1">{dict.feature.pastitle1}</h3>
                                        <p className="text-gray-700">{dict.feature.pasdesc1}</p>
                                    </li>
                                    <li>
                                        <h3 className="font-bold mb-1">{dict.feature.pastitle2}</h3>
                                        <p className="text-gray-700">{dict.feature.pasdesc2}</p>
                                    </li>
                                    <li>
                                        <h3 className="font-bold mb-1">{dict.feature.pastitle3}</h3>
                                        <p className="text-gray-700">{dict.feature.pasdesc3}</p>
                                    </li>
                                    <li>
                                        <h3 className="font-bold mb-1">{dict.feature.pastitle4}</h3>
                                        <p className="text-gray-700">{dict.feature.pasdesc4}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="sticky top-8 pl-10">
                                    <img
                                        src="/images/feature.png"
                                        alt="Game Features Preview"
                                        className="rounded-lg shadow-lg"
                                        width={500}
                                        height={450}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* how */}
                <section className="py-10 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">{dict.how.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-purple-300">
                                <h3 className="text-xl font-bold mb-4">{dict.how.pastitle1}</h3>
                                <p className="text-gray-600">
                                    {dict.how.pasdesc1}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-purple-300">
                                <h3 className="text-xl font-bold mb-4">{dict.how.pastitle2}</h3>
                                <p className="text-gray-600">
                                    {dict.how.pasdesc2}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-purple-300">
                                <h3 className="text-xl font-bold mb-4">{dict.how.pastitle3}</h3>
                                <p className="text-gray-600">
                                    {dict.how.pasdesc3}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-purple-300">
                                <h3 className="text-xl font-bold mb-4">{dict.how.pastitle4}</h3>
                                <p className="text-gray-600">
                                    {dict.how.pasdesc4}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* faq */}
                <section className="py-10 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-4xl font-bold text-center mb-12 text-[#8B1D24]">
                            {dict.faq.title}
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle1}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc1}
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle2}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc2}
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle3}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc3}
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle4}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc4}
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle5}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc5}
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-[#8B1D24] mb-4">
                                    {dict.faq.pastitle6}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {dict.faq.pasdesc6}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* video */}
                {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Pokemon TCG Pocket Youtube Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/4UkbvcQzzWk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/16duP6ga_Q8"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/zMO4mbFIyro"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section> */}

                {/* footer */}
                <footer className="bg-[#1e2530] text-gray-400 py-8">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-4">
                            <p>© 2024 sprunkisworld.com. All rights reserved.</p>
                        </div>
                        <div className="flex justify-center space-x-6">

                            {Object.keys(localeNames).map((key: string) => {
                                const name = localeNames[key];
                                const href = key === 'en' ? '/' : `/${key}`;
                                return (
                                    <a href={href} className="hover:text-gray-300 transition-colors" key={key}>
                                        {name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </footer>
            </div>
        </>

    );
}

export default Page