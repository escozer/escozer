import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      features: [
        '25 AI Try-Ons',
        'HD Quality Output',
        'Email Support',
        '14-day access'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Professional',
      price: '$149',
      features: [
        '150 AI Try-Ons',
        '4K Quality Output',
        'Priority Support',
        '30-day access',
        'Multiple Angles'
      ],
      color: 'from-indigo-600 to-blue-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      features: [
        'Unlimited AI Try-Ons',
        '8K Quality Output',
        '24/7 VIP Support',
        'Unlimited access',
        'Custom Branding',
        'API Access'
      ],
      color: 'from-blue-600 to-cyan-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 sm:text-6xl">
          Transform Your Fashion Experience
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Experience the future of fashion with our state-of-the-art AI virtual try-on technology
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/virtual-try-on"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Try Now Free
          </Link>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-base font-medium rounded-md text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200"
          >
            View Pricing
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-gray-50 text-lg font-medium text-gray-500">Featured in</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
        <div className="col-span-1 flex justify-center items-center">
          <img className="h-12 opacity-50" src="https://images.pexels.com/photos/12899138/pexels-photo-12899138.jpeg" alt="Brand" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img className="h-12 opacity-50" src="https://images.pexels.com/photos/12899143/pexels-photo-12899143.jpeg" alt="Brand" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img className="h-12 opacity-50" src="https://images.pexels.com/photos/12899145/pexels-photo-12899145.jpeg" alt="Brand" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img className="h-12 opacity-50" src="https://images.pexels.com/photos/12899147/pexels-photo-12899147.jpeg" alt="Brand" />
        </div>
      </div>

      <div id="pricing" className="mt-24">
        <h2 className="text-4xl font-extrabold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} rounded-2xl shadow-xl overflow-hidden transform transition-all duration-200 hover:scale-[1.02]`}>
                <div className="p-8 bg-white bg-opacity-90 backdrop-blur-lg">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-bold text-gray-900">{plan.price}</p>
                  <ul className="mt-6 space-y-4">
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
                    className={`mt-8 w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r ${plan.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    Get Started
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