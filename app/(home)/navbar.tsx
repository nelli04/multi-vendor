'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { NavbarSidebar } from './navbar-sidebar'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const navbarItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/features', children: 'Feature' },
  { href: '/pricing', children: 'Pricing' },
  { href: '/contact', children: 'Contact' },
]

type NavbarItemProps = {
  href: string
  children: ReactNode
  isActive?: boolean
}

const NavbarItem = ({ isActive, children, href }: NavbarItemProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent',
        'px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black hover:text-white'
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn(`${poppins.className}`, 'text-5xl font-semibold')}>funroad</span>
      </Link>

      <NavbarSidebar items={navbarItems} open={open} onOpenChange={setOpen} />

      <div className="lg:flex gap-4 hidden items-center">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l vorder-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in"></Link>
          Log in
        </Button>
        <Button
          variant="secondary"
          className="border-l vorder-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:text-black hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button variant="ghost" className="size-12 border-transparent bg-white" onClick={() => setOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}
