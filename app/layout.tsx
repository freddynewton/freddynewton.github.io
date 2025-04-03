import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { HydrationFix } from "@/components/hydration-fix"
import { ParticleBackground } from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fred Newton Akdogan | Unity Developer",
  description: "Portfolio of Fred Newton Akdogan, Unity Developer specializing in XR development"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          [data-darkreader-inline-stroke],
          [data-darkreader-inline-color],
          [data-darkreader-inline-outline],
          [data-darkreader-inline-border-top],
          [data-darkreader-inline-border-right],
          [data-darkreader-inline-border-bottom],
          [data-darkreader-inline-border-left] {
            all: unset !important;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HydrationFix />
          <ParticleBackground />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

