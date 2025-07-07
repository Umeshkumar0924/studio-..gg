'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Scissors, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/style-ai', label: 'Style AI' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl font-headline">By Touch Unisex Saloon</span>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary focus-visible:ring-0',
                  (pathname.startsWith('/dashboard')) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                Dashboards
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/customer">Customer Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/owner">Owner Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex h-full flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                <Scissors className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl font-headline">By Touch Unisex Saloon</span>
              </Link>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t -mx-6 my-2"></div>
              
              <div className="flex flex-col gap-6">
                <Link href="/dashboard/customer" onClick={() => setIsOpen(false)} className={cn('text-lg font-medium transition-colors hover:text-primary', pathname.startsWith('/dashboard/customer') ? 'text-primary' : 'text-muted-foreground')}>
                  Customer Dashboard
                </Link>
                <Link href="/dashboard/owner" onClick={() => setIsOpen(false)} className={cn('text-lg font-medium transition-colors hover:text-primary', pathname.startsWith('/dashboard/owner') ? 'text-primary' : 'text-muted-foreground')}>
                  Owner Dashboard
                </Link>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                 <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild onClick={() => setIsOpen(false)} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
