'use client';

import Link from 'next/link';
import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-black text-2xl mb-4">CASE DROP</h3>
            <p className="text-gray-400 text-sm">
              Premium phone cases for people who don't do boring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Cases</Link></li>
              <li><Link href="/shop?category=custom" className="hover:text-white transition-colors">Custom Cases</Link></li>
              <li><Link href="/shop?category=minimal" className="hover:text-white transition-colors">Minimal</Link></li>
              <li><Link href="/shop?category=gradient" className="hover:text-white transition-colors">Gradient</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">CONNECT</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://instagram.com/case_drop" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/case_drop" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@casedrop.in" className="p-2 bg-gray-800 rounded-lg hover:bg-white hover:text-black transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">hello@casedrop.in</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; 2024 CASE DROP. All rights reserved.</p>
            </div>
            <div className="text-right flex justify-end gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
