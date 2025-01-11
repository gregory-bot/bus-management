import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069"
      >
        <source
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            skip the long queue in town and book your ride
          </h1>
          <a
            href="#book"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-full text-lg font-semibold
                     transform transition-transform duration-300 hover:scale-105 hover:bg-[#A52A2A]"
          >
            book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;