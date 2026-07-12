import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://stamp-duty-calculator.vercel.app'),
  title: 'IndiStamp - Stamp Duty Calculator for India',
  description: 'IndiStamp: The free online tool to calculate stamp duty and registration charges for property purchases across all Indian states.',
  generator: 'v0.app',
  applicationName: 'IndiStamp',
  appleWebApp: {
    capable: true,
    title: 'IndiStamp',
    statusBarStyle: 'default',
  },
  icons: {
    shortcut: '/favicon.ico',
    icon: [
      {
        url: '/indistamp-black.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/indistamp-white.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafbfc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
