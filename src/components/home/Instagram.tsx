'use client';

import Link from 'next/link';

const instagramPosts = [
  { id: 1, emoji: '📱', alt: 'Midnight Case' },
  { id: 2, emoji: '✨', alt: 'Chrome Edition' },
  { id: 3, emoji: '🌈', alt: 'Aura Gradient' },
  { id: 4, emoji: '🎨', alt: 'Chaos Design' },
  { id: 5, emoji: '👤', alt: 'Custom Case' },
  { id: 6, emoji: '💎', alt: 'Premium Collection' },
];

export default function Instagram() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            FOLLOW THE DROP
          </h2>
          <p className="text-gray-600 text-lg">See what's dropping next.</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/case_drop"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-7xl group-hover:scale-110 transition-transform">
                {post.emoji}
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/case_drop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            FOLLOW @CASE_DROP
          </a>
        </div>
      </div>
    </section>
  );
}
