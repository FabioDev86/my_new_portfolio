import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const sg = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabio Bauleo',
  description: 'Fabio Bauleo portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sg.className}>{children}</body>
    </html>
  )
}
