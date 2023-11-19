import type { Metadata } from 'next'
import "./globals.css"
import { Poppins as FontPoppins } from "next/font/google"
import { cn } from "@/utils"
import Providers from './provider/provider'

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['100', '200', '300','400', '500', "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Stream Web App',
  description: '',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "antialiased relative max-w-[1440px] font-ppn mx-auto font-",
          fontPoppins.variable
      )}>
        <Providers>
          {children}
          </Providers>
        </body>
    </html>
  )
}
