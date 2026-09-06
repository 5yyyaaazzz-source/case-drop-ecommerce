'use client';

import { Package, Zap, Lock, Palette } from 'lucide-react';

const trustItems = [
  {
    icon: Package,
    title: 'PREMIUM QUALITY',
    description: 'Designed for everyday use.',
  },
  {
    icon: Zap,
    title: 'FAST SHIPPING',
    description: 'Ships within 2–4 business days.',
  },
  {
    icon: Lock,
    title: 'SECURE PAYMENTS',
    description: 'Safe and secure checkout.',
  },
  {
    icon: Palette,
    title: 'CUSTOM DESIGNS',
    description: 'Make your case uniquely yours.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-black rounded-full">
                  <item.icon size={28} className="text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
