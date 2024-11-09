import React from 'react'
import { ReactNode } from "react";
import GoogleAnalytics from '../GoogleAnalytics';


const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) => {

  const canonical = "https://sprunkisworld.com/" + params.lang
  return (
    <html
    >
      <GoogleAnalytics />

      <head>
        <link rel="canonical" href={canonical} />
      </head>

      <div className='flex flex-col h-screen justify-between'>
        <div>
          {children}
        </div>
      </div>
    </html>
  )
}

export default Layout