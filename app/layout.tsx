import Footer from '../components/footer'
import NavBar from '../components/navbar'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flash card',
  description: 'Pistachios Power',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

     <html lang="en">
      <body className={font.className}>
      
        {children}
        
      </body>
    </html>
    //</ClerkProvider>
  )
}
