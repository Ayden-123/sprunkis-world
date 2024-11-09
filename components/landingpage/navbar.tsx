import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function Navbar() {
    let linkList = NavLinksList['LINK_EN'];

    return (
        <header className='w-full fixed top-0 z-50 bg-landingpage_bg p-5'>
            <div className='max-w-7xl mx-auto flex justify-between items-center text-white'>
                <a
                    aria-label='landing page template'
                    className='flex items-center'
                    title='DeePoster'
                    href={`/`}
                >
                    <Image
                        width={200}
                        height={200}
                        src={'/logo.png'}
                        className='transition-all hover:scale-110 w-10 h-10'
                        alt='logo'
                    />
                    <h2 className='ml-3 font-bold leading-5'>DeePoster</h2>
                </a>

                <div className='flex items-center justify-end gap-2'>
                    <a className="px-4 hidden md:block" href='/gallery'>Gallery</a>
                    <a className="px-4 hidden md:block" href='/pricing'>Pricing</a>

                    <SignedIn>
                        <Button asChild className="button bg-purple_bg ml-4 hover:bg-purple_bg/80 px-4 py-2 text-sm md:text-base">
                            <Link href="/home">
                                <div className="text-white whitespace-nowrap">Go to create</div>
                            </Link>
                        </Button>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="button bg-purple_bg ml-4 hover:bg-purple_bg/80 px-4 py-2 text-sm md:text-base">
                            <Link href="/home">
                                <div className="text-white">Sign In</div>
                            </Link>
                        </Button>
                    </SignedOut>

                    <details className='flex md:hidden dropdown dropdown-end'>
                        <summary className='btn btn-ghost p-0'>
                            <MdMenu size={18} />
                        </summary>
                        <ul className='menu dropdown-content z-[100] p-2 shadow bg-landingpage_bg opacity-100 rounded-box w-52'>
                            <li>
                                <a aria-label='Gallery' title='Gallery' href={`/gallery`}>Gallery</a>
                            </li>
                            <li>
                                <a aria-label='Pricing' title='Pricing' href={`/pricing`}>Pricing</a>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
        </header>
    );
}
