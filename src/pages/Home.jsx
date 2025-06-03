import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      features: [
        '50 AI Try-Ons',
        'Standard Processing',
        'Basic Support',
        '30-day access'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      features: [
        '200 AI Try-Ons',
        'Priority Processing',
        'Premium Support',
        '60-day access'
      ]
    },
    {
      name: 'Enterprise',
      price: '$499',
      features: [
        'Unlimited AI Try-Ons',
        'Real-time Processing',
        '24/7 Support',
        'Unlimited access'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Virtual Try-On with AI
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Experience clothes virtually with our advanced AI technology
        </p>
        <div className="mt-8">
          <Link
            to="/virtual-try-on"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Try Now
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-extrabold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-6">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/virtual-try-on"
                className="mt-8 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}