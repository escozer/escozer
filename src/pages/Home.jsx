import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Klasik Blazer',
      price: '₺899',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
    },
    {
      id: 2,
      name: 'Yazlık Elbise',
      price: '₺459',
      image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg'
    },
    {
      id: 3,
      name: 'Spor Ceket',
      price: '₺699',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Kıyafetleri Sanal Olarak Deneyin
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Yapay zeka teknolojisi ile kıyafetleri üzerinizde görün
        </p>
        <div className="mt-8">
          <Link
            to="/virtual-try-on"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Hemen Deneyin
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}