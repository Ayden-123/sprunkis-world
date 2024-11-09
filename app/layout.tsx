
import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script'
import Footer from '@/components/landingpage/footer';
import Navbar from '@/components/landingpage/navbar';
import Head from 'next/head';
import { LoadingProvider } from '@/components/loading/LoadingContext';
import LoadingIndicator from '@/components/loading/LoadingIndicator';
import GoogleAnalytics from './GoogleAnalytics';
import CustomHead from '@/components/common/head';

// const jakarta = Plus_Jakarta_Sans({
//   weight: ['500', '800'],
//   subsets: ['latin'],
// });
const inter = Inter({
  weight: ['400', '500'],  // 只需要这两种字重就够了
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={inter.className}
    >

      <GoogleAnalytics />

      <head>
        <link rel="canonical" href="https://sprunkisworld.com/" />
      </head>


      <body>
        <LoadingProvider>
          <LoadingIndicator />
          <NextTopLoader showSpinner={false} />
          <Toaster />
          <div>
            {children}
          </div>
        </LoadingProvider>

      </body>

    </html>

  );
}
