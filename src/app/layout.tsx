import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/app/components/navigation"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asmamaw Kassahun - Full-Stack Developer",
  description:
    "Computer Science graduated passionate about building secure, scalable web applications and exploring cybersecurity. Specializing in React, Node.js, and ethical hacking.",
  keywords: "Full-Stack Developer, Ethical Hacker, React, Node.js, Next.js, Cybersecurity, Web Development",
  authors: [{ name: "Asmamaw Kassahun" }],
  openGraph: {
    title: "Asmamaw Kassahun - Full-Stack Developer ",
    description:
      "Computer Science graduated passionate about building secure, scalable web applications and exploring cybersecurity.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Toaster />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
