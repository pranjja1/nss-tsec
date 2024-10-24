import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-red-600 text-white py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="/images/hero-background.png" // Replace with your hero background image
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Empowering Students, Enriching Society
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            Join the National Service Scheme (NSS) at Thadomal Shahani Engineering College and be part of a movement that combines education with impactful social service. Together, we can make a difference!
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#about"
              className="inline-block bg-white text-red-600 text-lg font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Join Us
            </a>
            <a
              href="#contact"
              className="inline-block bg-transparent border-2 border-white text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
