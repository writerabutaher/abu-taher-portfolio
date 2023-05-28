import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import MainNav from '@/components/Navbar/MainNav'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abu Taher | Portfolio',
  description: 'Portfolio by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='home' className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700`}>
        <div className='max-w-screen-xl mx-auto px-4'>
          <MainNav />
          {children}
          <Toaster />
        </div>
        <Footer />
      </body>
    </html>
  )
}
