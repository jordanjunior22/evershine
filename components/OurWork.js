"use client";
import React from 'react';
import project1 from '@/public/project1.jpg'; // Replace with your actual project images
import project2 from '@/public/project2.jpg';
import project3 from '@/public/project3.jpg';

const OurWork = () => {
  const projects = [
    {
      title: "Residential Cleaning",
      description: "A complete cleaning service for a cozy home, focusing on kitchens and living rooms.",
      image: project1,
    },
    {
      title: "Office Space Revamp",
      description: "Transforming an office space into a clean, productive environment for staff.",
      image: project2,
    },
    {
      title: "Deep Cleaning Service",
      description: "Comprehensive deep cleaning for a move-in/move-out service, ensuring every corner is spotless.",
      image: project3,
    },
  ];

  return (
    <section id="our-work" className="bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Our Work</h2>
        <p className="text-lg text-gray-700 text-center mb-8">Check out some of our completed projects that showcase our commitment to quality and detail.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={project.image.src} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
