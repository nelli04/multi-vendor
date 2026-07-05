import { ReactNode } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

type NavbarItem = {
  href: string
  children: ReactNode
}

type Props = {
  items: NavbarItem[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <Link
            href="/sign-in"
            onClick={() => onOpenChange(false)}
            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
          >
            Log in
          </Link>
          <Link
            href="sign-up"
            onClick={() => onOpenChange(false)}
            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
          >
            Start selling
          </Link>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
