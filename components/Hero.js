"use client"
import React from 'react';
import Image from 'next/image';
import heroImage from '@/public/hero.jpg'; // Replace with your hero image path

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-lightTeal p-6">
      {/* Text Section */}
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Evershine Cleaning Services</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Experience a spotless space with our professional cleaning services tailored to your needs. 
          Let us make your environment shine!
        </p>
        <a href="/get-a-quote" className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-goldenYellow transition duration-300">
          Get a Quote
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <Image 
          src={heroImage} 
          alt="Evershine Cleaning" 
          className="object-cover rounded-lg shadow-lg" 
          width={600} 
          height={400} 
        />
      </div>
    </div>
  );
};

export default HeroSection;
