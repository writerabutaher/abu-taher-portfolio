import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import MainNav from '@/components/Navbar/MainNav'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abu Taher | Developer',
  description: 'Portfolio created by Abu Taher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='root' className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700`}>
        <div>
          {/* <MainNav /> */}
          {children}
          <Toaster />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
