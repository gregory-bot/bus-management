import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const images = [
    "https://th.bing.com/th/id/OIP.WtQkwB7DG-bn8losu5ciTAHaE_?rs=1&pid=ImgDetMain",
    "https://www.nairobileo.co.ke/storage/uploads/2022/02/IMG-20220227092803.jpg",
    "https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // State to control the fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out the current image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image after fade-out
        setIsFading(false); // Fade in the new image
      }, 500); // Wait for the fade-out to complete before changing the image
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Suppermetro</h2>
            <p className="text-gray-600 mb-4">
              Suppermetro is Nairobi's premier commuter service, dedicated to providing reliable,
              comfortable, and efficient transportation solutions for the city's residents.
            </p>
            <p className="text-gray-600 mb-4">
              Established with a vision to transform urban commuting, operating a fleet of modern
              buses serving major routes across Nairobi and its suburbs. Trust me, you won't queue
              long again 🙂😂
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Modern fleet of comfortable buses</li>
              <li>✓ Professional and experienced drivers</li>
              <li>✓ Convenient online booking system</li>
              <li>✓ Reliable schedules and timely service</li>
              <li>✓ Extensive route network</li>
            </ul>
          </div>

          {/* Right Image Section with Smooth Transition */}
          <div className="relative w-full h-[400px]">
            <img
              src={images[currentImageIndex]}
              alt="Suppermetro Bus"
              className={`rounded-lg shadow-lg w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
              key={currentImageIndex}
            />
            <div className="absolute -bottom-6 -left-6 bg-[#8B0000] text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm">Years of service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;