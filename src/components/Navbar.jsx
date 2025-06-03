import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">DressAI</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </Link>
              <Link to="/virtual-try-on" className="text-white opacity-75 hover:opacity-100 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Try On
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}