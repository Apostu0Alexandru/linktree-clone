import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'


export const metadata: Metadata = {
  title: 'Linktree-clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-900 via-gray-100 to-gray-900">
          {children}
          <Analytics />
      </body>
    </html>
  )
}
