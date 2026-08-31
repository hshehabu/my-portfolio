import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Hamza Shehabu | Senior Odoo Developer',
  description: 'Hamza Shehabu | Senior Odoo Developer | Building scalable business systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <ThemeProvider>
          {children}
          <RevealScript />
        </ThemeProvider>
      </body>
    </html>
  )
}
