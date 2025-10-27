import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hanif Studio - Brand Identity and Visual Product Design',
  description: 'We Create Brand Identity and Visual Product Design. Professional portfolio showcasing our work in brand design, packaging, and visual communication.',
  keywords: ['brand identity', 'visual design', 'product design', 'portfolio', 'creative agency'],
  openGraph: {
    title: 'Hanif Studio - Brand Identity and Visual Product Design',
    description: 'We Create Brand Identity and Visual Product Design',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}