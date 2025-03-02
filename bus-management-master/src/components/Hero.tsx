import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'skip the long queue in town and book your ride';
  const typingSpeed = 100;

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayText]);

  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/5150586/5150586-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl text-white mb-8"
            style={{ fontFamily: 'Courier New, monospace', fontWeight: 'normal' }}
          >
            {displayText}
            <span className="animate-[blink_1s_infinite]">|</span>
          </h1>
          <a
            href="#book"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-full text-lg font-semibold
                     transform transition-transform duration-300 hover:scale-105 hover:bg-[#A52A2A]"
          >
            book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;