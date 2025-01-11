import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import RouteCard from './components/RouteCard';
import AboutSection from './components/AboutSection';
import MoreSection from './components/MoreSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const popularRoutes = [
    {
      from: "Nairobi CBD",
      to: "Westlands",
      price: "KSh 100",
      time: "30 mins",
      nextBus: "5:30 PM"
    },
    {
      from: "Nairobi CBD",
      to: "Kasarani",
      price: "KSh 80",
      time: "45 mins",
      nextBus: "5:45 PM"
    },
    {
      from: "Nairobi CBD",
      to: "Eastlands",
      price: "KSh 70",
      time: "40 mins",
      nextBus: "6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Booking Section */}
      <section id="book" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-16">
            <h2 className="text-2xl font-bold mb-6">Book Your Ride</h2>
            <BookingForm />
          </div>

          {/* Popular Routes */}
          <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <RouteCard key={index} {...route} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <MoreSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;