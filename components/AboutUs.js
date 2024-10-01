"use client";
import React from 'react';
import teamImage from '@/public/quote.jpg'; // Replace with your team image

const AboutUs = () => {
  return (
    <section id="about" className="bg-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8">
          <div className="p-6 bg-primary rounded-lg shadow-md mb-6">
            <h2 className="text-4xl font-bold text-white mb-4">About Evershine</h2>
            <p className="text-lg text-white mb-4">
              At Evershine Cleaning Services, we believe that a clean space is a happy space. Our journey began with a passion for cleanliness and a commitment to enhancing the lives of our clients.
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-4">
            To provide high-quality, eco-friendly cleaning solutions tailored to your unique needs.
          </p>
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-700">
            <li>Integrity: Honest and transparent service.</li>
            <li>Quality: Exceptional service every time.</li>
            <li>Respect: Valuing our clients and their spaces.</li>
            <li>Sustainability: Eco-friendly practices to protect our planet.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-primary mb-2">Why Choose Us?</h3>
          <p className="text-lg text-gray-700">
            Choosing Evershine means a partner who cares about your needs. Our customized services fit your schedule and requirements.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 md:mt-0 mt-8">
          <img 
            src={teamImage.src} 
            alt="Our Team" 
            className="" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
