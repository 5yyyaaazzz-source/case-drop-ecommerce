'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface CustomFormData {
  name: string;
  initials: string;
  phoneModel: string;
  designPreference: string;
}

export default function CustomSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomFormData>();

  const onSubmit = (data: CustomFormData) => {
    console.log('Custom case data:', data);
    // In a real app, this would send to backend
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            MAKE IT YOURS.
          </h2>
          <p className="text-xl text-gray-400">
            Your name. Your initials. Your design.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-900 p-8 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-bold mb-2">Your Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="e.g., ALEX"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white outline-none transition-colors"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Initials Input */}
            <div>
              <label className="block text-sm font-bold mb-2">Your Initials</label>
              <input
                type="text"
                {...register('initials', { required: 'Initials are required', maxLength: { value: 3, message: 'Max 3 characters' } })}
                placeholder="e.g., AX"
                maxLength={3}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white outline-none transition-colors"
              />
              {errors.initials && <p className="text-red-400 text-sm mt-1">{errors.initials.message}</p>}
            </div>

            {/* Phone Model */}
            <div>
              <label className="block text-sm font-bold mb-2">Phone Model</label>
              <select
                {...register('phoneModel', { required: 'Phone model is required' })}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white outline-none transition-colors"
              >
                <option value="">Select Model</option>
                <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                <option value="iPhone 15">iPhone 15</option>
                <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                <option value="Samsung S24">Samsung S24</option>
                <option value="Samsung A54">Samsung A54</option>
              </select>
              {errors.phoneModel && <p className="text-red-400 text-sm mt-1">{errors.phoneModel.message}</p>}
            </div>

            {/* Design Preference */}
            <div>
              <label className="block text-sm font-bold mb-2">Design Style</label>
              <select
                {...register('designPreference', { required: 'Design preference is required' })}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white outline-none transition-colors"
              >
                <option value="">Select Style</option>
                <option value="Minimal">Minimal</option>
                <option value="Bold">Bold</option>
                <option value="Gradient">Gradient</option>
                <option value="Graphic">Graphic</option>
              </select>
              {errors.designPreference && <p className="text-red-400 text-sm mt-1">{errors.designPreference.message}</p>}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl font-bold">Price: ₹299</p>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              CREATE MY CASE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
