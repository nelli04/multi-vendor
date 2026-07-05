import { ReactNode } from 'react'
import { Navbar } from './navbar'
import { Footer } from '@/app/(home)/footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  )
}
