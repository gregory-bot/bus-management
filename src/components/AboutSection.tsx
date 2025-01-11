import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">about suppermetro</h2>
            <p className="text-gray-600 mb-4">
              suppermetro is Nairobi's premier commuter service, dedicated to providing reliable, 
              comfortable, and efficient transportation solutions for the city's residents.
            </p>
            <p className="text-gray-600 mb-4">
              established with a vision to transform urban commuting,operating a fleet of modern 
              buses serving major routes across Nairobi and its suburbs. 
              trust me you won't queue long again🙂😂
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Modern fleet of comfortable buses</li>
              <li>✓ Professional and experienced drivers</li>
              <li>✓ Convenient online booking system</li>
              <li>✓ Reliable schedules and timely service</li>
              <li>✓ Extensive route network</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069"
              alt="Suppermetro Bus"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#8B0000] text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm">years of service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;