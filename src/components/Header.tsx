'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-black text-2xl hover:opacity-80 transition-opacity">
            CASE DROP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="font-bold hover:text-gray-600 transition-colors">
              SHOP
            </Link>
            <Link href="/#custom" className="font-bold hover:text-gray-600 transition-colors">
              CUSTOM
            </Link>
            <Link href="/about" className="font-bold hover:text-gray-600 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="font-bold hover:text-gray-600 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/shop"
              className="block py-2 px-4 font-bold hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/#custom"
              className="block py-2 px-4 font-bold hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CUSTOM
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 font-bold hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 font-bold hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
