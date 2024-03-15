import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import socialImage from './opengraph-image.png'

const sg = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabio Bauleo',
  description: 'Fabio Bauleo portfolio',
  metadataBase: new URL("https://fabio-bauleo-portfolio.vercel.app/"),
  openGraph: {    
    images: [
      {
        url: socialImage.src,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: socialImage.src,
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={sg.className}>{children}</body>
    </html>
  )
}
