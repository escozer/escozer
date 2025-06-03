import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0">
          <p className="text-center text-base text-white">
            &copy; 2024 DressAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}