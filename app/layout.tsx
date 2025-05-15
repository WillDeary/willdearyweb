import "./globals.css"
import { Raleway, Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "William Deary - Sabre Fencer",
  description: "Personal website of William Deary, British National Champion and Commonwealth Fencing Champion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        <header className="border-b">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex space-x-6 justify-center">
              <li>
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="hover:text-gray-600 transition-colors">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-600 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-gray-600 transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-12">{children}</main>
        <footer className="border-t py-6">
          <div className="container mx-auto px-6 text-center text-gray-600">
            © {new Date().getFullYear()} William Deary. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

