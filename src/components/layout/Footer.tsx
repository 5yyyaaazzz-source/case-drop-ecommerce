'use client';

import Link from 'next/link';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'SHOP',
      links: [
        { label: 'All Cases', href: '/shop' },
        { label: 'New Drop', href: '/new-drop' },
        { label: 'Custom Cases', href: '/custom' },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Track Order', href: '/track' },
        { label: 'Shipping Policy', href: '/shipping' },
        { label: 'Return Policy', href: '/returns' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-bold">CD</span>
              </div>
              <span className="text-lg font-bold tracking-tight">CASE DROP</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">DROP YOUR STYLE.</p>
            <p className="text-xs text-gray-500 mb-6">
              Premium, minimal phone cases designed for people who don't do boring.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/case_drop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@casedrop.com"
                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-900 py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} CASE DROP. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">
            Made with ❤️ for people who don't do boring.
          </p>
        </div>
      </div>
    </footer>
  );
}
