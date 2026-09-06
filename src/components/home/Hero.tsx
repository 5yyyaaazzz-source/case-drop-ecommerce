'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
                DROP YOUR<br />STYLE.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-light max-w-md">
                Cases made for people who don't do boring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 text-center"
              >
                SHOP THE DROP
              </Link>
              <Link
                href="/custom"
                className="px-8 py-4 border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all transform hover:scale-105 text-center"
              >
                CREATE YOUR CASE
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 sm:h-full hidden lg:block animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📱</div>
                <p className="text-gray-500 font-medium">Premium Phone Case</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
