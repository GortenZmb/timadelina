import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

const jost = Jost({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Темирлан & Аделина — Приглашение на свадьбу',
  description:
    'Той шақыруы · Приглашаем вас разделить с нами день нашей свадьбы. 29 августа 2026, EtnoFarabi, Караганда.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#eaf2fb',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`light ${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
