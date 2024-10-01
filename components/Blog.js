"use client";
import React from 'react';
import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';

const Blog = () => {
  const posts = [
    {
      title: "10 Tips for a Spotless Home",
      excerpt: "Discover our top tips for keeping your home spotless and organized. From decluttering to cleaning hacks, we've got you covered!",
      date: "September 30, 2024",
      image: image1,
    },
    {
      title: "Why Choose Eco-Friendly Cleaning Products?",
      excerpt: "Learn the benefits of using eco-friendly cleaning products for your home and the environment.",
      date: "September 28, 2024",
      image: image2,
    },
    {
      title: "The Importance of Regular Deep Cleaning",
      excerpt: "Understand why regular deep cleaning is essential for maintaining a healthy living space.",
      date: "September 25, 2024",
      image: image3,
    },
  ];

  return (
    <section id="blog" className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img 
                src={post.image.src} 
                alt={post.title} 
                className="rounded-lg mb-4 h-48 w-full object-cover" // Set a fixed height
              />
              <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
