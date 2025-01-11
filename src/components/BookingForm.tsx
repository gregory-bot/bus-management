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
    "westlands",
    "pipeline",
    "donholm",
    "allsops",
    "fedha",
    "uthiru",
    "kawangware",
    "mlolongo",
    "kilimani",
    "kileleshwa",
    "kariobangi",
    "runda",
    "garden city",
    "ngara",
    "rongai",
    "gataka",
    "ngongroad",
    "kasarani",
    "toll",
    "car wash",
    "bypass",
    "kihunguro",
    "eastlands",
    "survey",
    "kahawa west",
    "kahawa sukari",
    "ku",
    "china square",
    "roysambu",
    "zimmerman",
    "githurai",
    "ruiru",
    "gwa kairu",
    "kenyatta road",
    "kimbo",
    "juja",
    "sewage",
    "highpoint",
    "wetheithe",
    "mangu",
    "makongeni",
    "thika"
  ];

  const routePrices = {
    "westlands": { price: "KSh 100", duration: "30 mins" },
    "kasarani": { price: "KSh 80", duration: "45 mins" },
    "eastlands": { price: "KSh 70", duration: "40 mins" },
    "kahawa west": { price: "KSh 70", duration: "50 mins" },
    "roysambu": { price: "KSh 60", duration: "45 mins" },
    "zimmerman": { price: "KSh 60", duration: "55 mins" },
    "githurai": { price: "KSh 70", duration: "60 mins" },
    "ruiru": { price: "KSh 80", duration: "60 mins" },
    "juja": { price: "KSh 80", duration: "80 mins" },
    "ngara":{ price: "KSH 50", duration: "30 mins"},
    "rongai":{ price: "KSH 100", duration: "50 mins"},
    "gataka":{ price: "KSH 60", duration: "40 mins"},
    "ngongroad":{ price: "KSH 60", duration: "40 mins"},
    "toll":{ price: "KSH 80", duration: "60 mins"},
    "car wash":{ price: "KSH 60", duration: "55 mins"},
    "bypass":{ price: "KSH 80", duration: "60 mins"},
    "kihunguro":{ price: "KSH 80", duration: "60 mins"},
    "survey":{ price: "KSH 60", duration: "40 mins"},
    "kahawa sukari":{ price: "KSH 70", duration: "50 mins"},
    "ku":{ price: "KSH 70", duration: "50 mins"},
    "china square":{ price: "KSH 70", duration: "50 mins"},
    "gwa kairu":{ price: "KSH 80", duration: "60 mins"},
    "kenyatta road":{ price: "KSH 80", duration: "70 mins"},
    "kimbo":{ price: "KSH 80", duration: "60 mins"},
    "sewage":{ price: "KSH 80", duration: "80 mins"},
    "highpoint":{ price: "KSH 80", duration: "80 mins"},
    "wetheithe":{ price: "KSH 90", duration: "90 mins"},
    "mangu":{ price: "KSH 90", duration: "90 mins"},
    "makongeni":{ price: "KSH 100", duration: "1 hour"},
    "pipeline":{ price: "KSH 50", duration: "40 mins"},
    "donholm":{ price: "KSH 50", duration: "40 mins"},
    "allsops":{ price: "KSH 60", duration: "50 mins"},
    "fedha":{ price: "KSH 50", duration: "40 mins"},
    "uthiru":{ price: "KSH 70", duration: "50 mins"},
    "kawangware":{ price: "KSH 70", duration: "40 mins"},
    "mlolongo":{ price: "KSH 70", duration: "40 mins"},
    "kileleshwa":{ price: "KSH 70", duration: "50 mins"},
    "kilimani":{ price: "KSH 70", duration: "40 mins"},
    "kariobangi":{ price: "KSH 60", duration: "40 mins"},
    "runda":{ price: "KSH 60", duration: "40 mins"},
    "garden city":{ price: "KSH 60", duration: "50 mins"},
    "thika": { price: "KSh 100", duration: "1 hour" }
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

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">from</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              >
                <option value="">select pickup location</option>
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
                <option value="">select destination</option>
                {locations.map((location) => (
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
                <p className="text-sm text-gray-600">estimated travel time:</p>
                <p className="font-semibold">{routeInfo.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">fare:</p>
                <p className="font-semibold text-[#8B0000]">{routeInfo.price}</p>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#8B0000] text-white py-3 px-4 rounded-md hover:bg-[#A52A2A] transition-colors font-semibold"
        >
          book now
        </button>
      </form>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">booking confirmation</h3>
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">journey details</h4>
                <p className="text-gray-600">from: {formData.from}</p>
                <p className="text-gray-600">to: {formData.to}</p>
                <p className="text-gray-600">date: {formData.date}</p>
                <p className="text-gray-600">time: {formData.time}</p>
              </div>
              
              {routeInfo && (
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">fare details</h4>
                  <p className="text-gray-600">amount: {routeInfo.price}</p>
                  <p className="text-gray-600">duration: {routeInfo.duration}</p>
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
                  proceed to payment
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="w-full mt-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors font-semibold"
                >
                  cancel
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