import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-400 mb-8">
          This page is currently under development. 
          Please check back later or return to the homepage.
        </p>

        <Link 
          to="/"
          className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all"
        >
          ← Back to Home
        </Link>

        <p className="mt-8 text-gray-400 text-sm">
          ALTER FM Radio
        </p>
      </div>
    </div>
  );
}

export default NotFound;
