import React from 'react'
import { ReactNode } from "react";


const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) => {

  return (
    <div className='flex flex-col h-screen justify-between'>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout