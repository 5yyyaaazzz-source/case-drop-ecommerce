'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

const allProducts: Product[] = [
  { id: '1', name: 'MIDNIGHT', category: 'Minimal', price: 199, rating: 4.8, image: '🖤' },
  { id: '2', name: 'CHROME', category: 'Metallic', price: 249, rating: 4.9, image: '✨' },
  { id: '3', name: 'AURA', category: 'Gradient', price: 249, rating: 4.7, image: '🌈' },
  { id: '4', name: 'CHAOS', category: 'Graphic', price: 249, rating: 4.6, image: '🎨' },
  { id: '5', name: 'CUSTOM', category: 'Personalized', price: 299, rating: 5.0, image: '👤' },
  { id: '6', name: 'NEON', category: 'Graphic', price: 229, rating: 4.7, image: '⚡' },
  { id: '7', name: 'MARBLE', category: 'Minimal', price: 219, rating: 4.8, image: '🪨' },
  { id: '8', name: 'SUNSET', category: 'Gradient', price: 249, rating: 4.9, image: '🌅' },
];

const categories = ['All', 'Minimal', 'Metallic', 'Gradient', 'Graphic', 'Personalized'];

export default function ShopPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory);

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-black mb-4">SHOP THE DROP</h1>
          <p className="text-xl text-gray-400">Curated collection of premium phone cases</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} />
            <h2 className="font-bold text-lg">FILTER BY STYLE</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Product Image */}
              <div className="bg-gray-100 h-56 flex items-center justify-center text-6xl group-hover:bg-gray-200 transition-colors">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.category} Edition</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating) ? 'text-black' : 'text-gray-300'}
                      >
                        ★
                      </span>
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
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
