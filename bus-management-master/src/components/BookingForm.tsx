import React, { useState } from 'react';
import { MapPin, Calendar, Clock, X } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [routeInfo, setRouteInfo] = useState<{price?: string; duration?: string} | null>(null);

  const locations = [
    "Nairobi CBD",
    "Westlands",
    "Pipeline",
    "Donholm",
    "Allsops",
    "Fedha",
    "Uthiru",
    "Kawangware",
    "Mlolongo",
    "Kilimani",
    "Kileleshwa",
    "Kariobangi",
    "Runda",
    "Garden city",
    "Ngara",
    "Rongai",
    "Gataka",
    "Ngongroad",
    "Kasarani",
    "Toll",
    "Car wash",
    "Bypass",
    "Kihunguro",
    "Eastlands",
    "Survey",
    "Kahawa west",
    "Kahawa sukari",
    "Ku",
    "China square",
    "Roysambu",
    "Zimmerman",
    "Githurai",
    "Ruiru",
    "Gwa kairu",
    "Kenyatta road",
    "Kimbo",
    "Juja",
    "Sewage",
    "Highpoint",
    "Wetheithe",
    "Mangu",
    "Makongeni",
    "Thika"
  ];

  const routePrices = {
    "westlands": { price: "KSh 100", duration: "30 mins" },
    "Kasarani": { price: "KSh 80", duration: "45 mins" },
    "Eastlands": { price: "KSh 70", duration: "40 mins" },
    "Kahawa west": { price: "KSh 70", duration: "50 mins" },
    "Roysambu": { price: "KSh 60", duration: "45 mins" },
    "Zimmerman": { price: "KSh 60", duration: "55 mins" },
    "Githurai": { price: "KSh 70", duration: "60 mins" },
    "Ruiru": { price: "KSh 80", duration: "60 mins" },
    "Juja": { price: "KSh 80", duration: "80 mins" },
    "Ngara":{ price: "KSH 50", duration: "30 mins"},
    "Rongai":{ price: "KSH 100", duration: "50 mins"},
    "Gataka":{ price: "KSH 60", duration: "40 mins"},
    "Ngongroad":{ price: "KSH 60", duration: "40 mins"},
    "Toll":{ price: "KSH 80", duration: "60 mins"},
    "Car wash":{ price: "KSH 60", duration: "55 mins"},
    "Bypass":{ price: "KSH 80", duration: "60 mins"},
    "Kihunguro":{ price: "KSH 80", duration: "60 mins"},
    "Survey":{ price: "KSH 60", duration: "40 mins"},
    "Kahawa sukari":{ price: "KSH 70", duration: "50 mins"},
    "Ku":{ price: "KSH 70", duration: "50 mins"},
    "China square":{ price: "KSH 70", duration: "50 mins"},
    "Gwa kairu":{ price: "KSH 80", duration: "60 mins"},
    "Kenyatta road":{ price: "KSH 80", duration: "70 mins"},
    "Kimbo":{ price: "KSH 80", duration: "60 mins"},
    "Sewage":{ price: "KSH 80", duration: "80 mins"},
    "Highpoint":{ price: "KSH 80", duration: "80 mins"},
    "Wetheithe":{ price: "KSH 90", duration: "90 mins"},
    "Mangu":{ price: "KSH 90", duration: "90 mins"},
    "Makongeni":{ price: "KSH 100", duration: "1 hour"},
    "Pipeline":{ price: "KSH 50", duration: "40 mins"},
    "Donholm":{ price: "KSH 50", duration: "40 mins"},
    "Allsops":{ price: "KSH 60", duration: "50 mins"},
    "Fedha":{ price: "KSH 50", duration: "40 mins"},
    "Uthiru":{ price: "KSH 70", duration: "50 mins"},
    "Kawangware":{ price: "KSH 70", duration: "40 mins"},
    "Mlolongo":{ price: "KSH 70", duration: "40 mins"},
    "Kileleshwa":{ price: "KSH 70", duration: "50 mins"},
    "Kilimani":{ price: "KSH 70", duration: "40 mins"},
    "Kariobangi":{ price: "KSH 60", duration: "40 mins"},
    "Runda":{ price: "KSH 60", duration: "40 mins"},
    "Garden city":{ price: "KSH 60", duration: "50 mins"},
    "Thika": { price: "KSh 100", duration: "1 hour" }
  };

  const handleDestinationChange = (destination: string) => {
    setFormData(prev => ({ ...prev, to: destination }));
    if (destination in routePrices) {
      setRouteInfo(routePrices[destination as keyof typeof routePrices]);
    } else {
      setRouteInfo(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date && formData.time) {
      setShowConfirmation(true);
    }
  };

  const filteredLocations = locations.filter(location => location !== formData.from);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              >
                <option value="">Select pickup location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.to}
                onChange={(e) => handleDestinationChange(e.target.value)}
              >
                <option value="">Select destination</option>
                {filteredLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="time"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>
        </div>

        {routeInfo && (
          <div className="bg-gray-50 p-4 rounded-md mt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Estimated travel time:</p>
                <p className="font-semibold">{routeInfo.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fare:</p>
                <p className="font-semibold text-[#8B0000]">{routeInfo.price}</p>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#8B0000] text-white py-3 px-4 rounded-md hover:bg-[#A52A2A] transition-colors font-semibold"
        >
          Book Now
        </button>
      </form>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Booking Confirmation</h3>
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Journey Details</h4>
                <p className="text-red-600">From: {formData.from}</p>
                <p className="text-gray-600">To: {formData.to}</p>
                <p className="text-gray-600">Date: {formData.date}</p>
                <p className="text-gray-600">Time: {formData.time}</p>
              </div>
              
              {routeInfo && (
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Fare Details</h4>
                  <p className="text-gray-600">Amount: {routeInfo.price}</p>
                  <p className="text-gray-600">Duration: {routeInfo.duration}</p>
                </div>
              )}
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    alert('Proceeding to payment...');
                    setShowConfirmation(false);
                  }}
                  className="w-full bg-[#8B0000] text-white py-3 px-4 rounded-md hover:bg-[#A52A2A] transition-colors font-semibold"
                >
                  Proceed to Payment
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="w-full mt-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;