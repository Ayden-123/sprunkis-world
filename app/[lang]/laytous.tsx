import React from 'react'
import { ReactNode } from "react";
import GoogleAnalytics from '../GoogleAnalytics';


// const Layout = ({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: { lang: string };
// }) => {

export default async function Layout({ children, params }) {
  return (
    <html
    >
      <GoogleAnalytics />


      <div className='flex flex-col h-screen justify-between'>
        <div>
          {children}
        </div>
      </div>
    </html>
  )
}
