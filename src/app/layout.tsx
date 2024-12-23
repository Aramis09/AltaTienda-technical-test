'use client'
import './globals.css'
import { Providers } from '../components/providers'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Alta Tienda Test</title>
        <meta name="description" content="Esto es una prueba tecnica."/>

      </head>
      <body className={'antialiased bg-background'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
