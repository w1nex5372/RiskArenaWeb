import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'RiskArena — Dark Fantasy Arena Game on Telegram',
  description: 'Fight in 1v1 battles, raid bosses, climb leaderboards and collect rare loot. RiskArena is a dark fantasy arena game inside Telegram. Early demo now live.',
  keywords: 'RiskArena, telegram game, arena game, dark fantasy, mini app, PvP, boss raid',
  openGraph: {
    title: 'RiskArena — Dark Fantasy Arena Game',
    description: 'Fight, raid, and climb. A dark fantasy arena inside Telegram.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiskArena — Dark Fantasy Arena Game',
    description: 'Fight, raid, and climb. A dark fantasy arena inside Telegram.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
