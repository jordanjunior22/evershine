"use client";
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback: "Evershine transformed my home! Their attention to detail is unmatched.",
      location: "Los Angeles, CA",
    },
    {
      name: "Mark Thompson",
      feedback: "I can’t believe how clean my office is now. Highly recommend Evershine!",
      location: "New York, NY",
    },
    {
      name: "Emily Chen",
      feedback: "The deep cleaning service was incredible! Worth every penny.",
      location: "San Francisco, CA",
    },
  ];

  return (
    <section id="testimonials" className="bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-800 mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-semibold text-primary">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
