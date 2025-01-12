'use client';
import React from 'react'

const CTA = () => {
    return (
        <div className="bg-blue-600 text-white rounded-lg p-6 max-w-md mx-auto shadow-md text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2 px-4">Get Started with KoinX for FREE</h1>
          
          {/* Description */}
          <p className="text-sm mb-4">
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
          </p>
          
          {/* Illustration */}
          <div className="flex justify-center mb-4">
            <img
              src="./Frame.png" // Replace this with the actual illustration URL
              alt="KoinX Illustration"
              className="w-32"
            />
          </div>
          
          {/* Button */}
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center mx-auto"
            onClick={() => console.log('Get Started clicked')}
          >
            Get Started for FREE 
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      );
}


export default CTA;
