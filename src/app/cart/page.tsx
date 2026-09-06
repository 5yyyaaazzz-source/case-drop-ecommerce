'use client';

import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">YOUR CART IS EMPTY</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven't added any cases yet.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black mb-12">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                  {item.image}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right flex flex-col justify-center">
                  <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-8 rounded-2xl h-fit sticky top-24">
            <h2 className="font-bold text-2xl mb-6">ORDER SUMMARY</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>₹{Math.round(totalPrice * 0.18)}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-xl mb-6">
              <span>Total</span>
              <span>₹{totalPrice + Math.round(totalPrice * 0.18)}</span>
            </div>

            <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all mb-4">
              PROCEED TO CHECKOUT
            </button>

            <Link
              href="/shop"
              className="block text-center py-3 border-2 border-gray-300 font-bold rounded-xl hover:border-black transition-colors"
            >
              CONTINUE SHOPPING
            </Link>

            <p className="text-sm text-gray-500 text-center mt-4">
              Free shipping on orders over ₹500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
