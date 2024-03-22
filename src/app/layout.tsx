import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IMDb clone",
    template: "%s | IMDb clone",
  },
  description:
    "Discover your next favorite film or TV series with our IMDb clone! Explore a vast database of movies and shows, read reviews, watch  and stay updated on the latest releases. With user-friendly navigation.",
  creator: "Tursunboyev Muhammadzohid",
  icons: {
    icon: "/IMDb-clone_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
