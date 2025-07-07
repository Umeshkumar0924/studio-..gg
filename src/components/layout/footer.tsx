import Link from 'next/link';
import { Scissors, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="h-7 w-7 text-accent" />
              <span className="font-bold text-xl font-headline">By Touch Unisex Saloon</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Crafting beautiful hair, creating beautiful moments.
            </p>
          </div>
          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>123 Style Avenue, Fashion City, 12345</li>
              <li>(123) 456-7890</li>
              <li>contact@bytouchsalon.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-accent">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} By Touch Unisex Saloon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
