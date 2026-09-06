'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'MIDNIGHT',
    description: 'Minimal Black Case',
    price: 199,
    rating: 4.8,
    image: '🖤',
  },
  {
    id: '2',
    name: 'CHROME',
    description: 'Metallic Edition',
    price: 249,
    rating: 4.9,
    image: '✨',
  },
  {
    id: '3',
    name: 'AURA',
    description: 'Gradient Edition',
    price: 249,
    rating: 4.7,
    image: '🌈',
  },
  {
    id: '4',
    name: 'CHAOS',
    description: 'Graphic Edition',
    price: 249,
    rating: 4.6,
    image: '🎨',
  },
  {
    id: '5',
    name: 'CUSTOM',
    description: 'Personalized Case',
    price: 299,
    rating: 5.0,
    image: '👤',
  },
];

export default function NewDrop() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setSelectedProduct(product.id);
    setTimeout(() => setSelectedProduct(null), 1000);
  };

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            THE NEW DROP
          </h2>
          <p className="text-gray-600 text-lg">Explore our latest premium phone cases</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Product Image */}
              <div className="bg-gray-100 h-56 flex items-center justify-center text-6xl group-hover:bg-gray-200 transition-colors">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-black text-black'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.rating})</span>
                </div>

                {/* Price */}
                <p className="font-bold text-lg mb-4">₹{product.price}</p>

                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2 rounded-lg font-bold transition-all text-sm ${
                      selectedProduct === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-black text-white hover:bg-gray-900'
                    }`}
                  >
                    {selectedProduct === product.id ? '✓ Added' : 'Add to Cart'}
                  </button>
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full py-2 rounded-lg font-bold border-2 border-gray-300 hover:border-black transition-colors text-center text-sm"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all"
          >
            VIEW ALL CASES
          </Link>
        </div>
      </div>
    </section>
  );
}
