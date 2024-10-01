"use client";
import React from 'react';
import { FaHome, FaBriefcase, FaBrush } from 'react-icons/fa'; // Importing icons

const Services = () => {
  return (
    <section id="services" className="bg-primary p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-6">Our Services</h2>
        <p className="text-lg text-gray-200 text-center mb-8">
          We offer a wide range of cleaning services tailored to your needs.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0 md:w-1/3 md:mr-4">
            <div className="flex items-center mb-4">
              <FaHome className="text-primary text-3xl mr-2" />
              <h3 className="text-2xl font-semibold text-primary">Home Cleaning</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Keep your home spotless with our comprehensive home cleaning services, customized to your schedule.
            </p>
            <a href="#quote" className="text-lightTeal font-bold">Get a Quote</a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0 md:w-1/3 md:mr-4">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-primary text-3xl mr-2" />
              <h3 className="text-2xl font-semibold text-primary">Office Cleaning</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Maintain a productive work environment with our professional office cleaning services.
            </p>
            <a href="#quote" className="text-lightTeal font-bold">Get a Quote</a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <FaBrush className="text-primary text-3xl mr-2" />
              <h3 className="text-2xl font-semibold text-primary">Deep Cleaning</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Experience a thorough clean with our deep cleaning services, perfect for a fresh start.
            </p>
            <a href="#quote" className="text-lightTeal font-bold">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
