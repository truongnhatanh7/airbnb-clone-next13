import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/app/components/Navbar'
import { RegisterModal } from './components/Modal/RegisterModal'
import { ToasterProvider } from './providers/ToasterProvider'
import { LoginModal } from './components/Modal/LoginModal'

const inter = Inter({ subsets: ['latin'] })
const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'AirBnB',
  description: 'AirBnB Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
