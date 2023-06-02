import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/app/components/Navbar'
import { RegisterModal } from './components/Modal/RegisterModal'
import { ToasterProvider } from './providers/ToasterProvider'
import { LoginModal } from './components/Modal/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import { ClientOnly } from './components/ClientOnly'

const inter = Inter({ subsets: ['latin'] })
const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'AirBnB',
  description: 'AirBnB Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser)

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
