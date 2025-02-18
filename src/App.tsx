import React, { useState } from 'react';
import { Hotel, Search, Calendar, Users, Star, ArrowRight, Dumbbell, Wifi, School as Pool, Coffee, Utensils, Car, Tv, Wine, Bath, Bed, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean Suite",
    size: "45m²",
    price: 599,
    occupancy: "2 Adults, 1 Child",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200",
    amenities: ["King Bed", "Ocean View", "Mini Bar", "Free WiFi"]
  },
  {
    id: 2,
    name: "Premium Mountain View",
    size: "40m²",
    price: 499,
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200",
    amenities: ["Queen Bed", "Balcony", "Workspace", "Free WiFi"]
  },
  {
    id: 3,
    name: "Family Suite",
    size: "65m²",
    price: 799,
    occupancy: "4 Adults",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200",
    amenities: ["2 Bedrooms", "Living Area", "Kitchen", "Free WiFi"]
  },
  {
    id: 4,
    name: "Presidential Suite",
    size: "120m²",
    price: 1299,
    occupancy: "4 Adults, 2 Children",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
    amenities: ["Private Pool", "Butler Service", "Panoramic View", "Luxury Spa"]
  },
  {
    id: 5,
    name: "Beachfront Villa",
    size: "85m²",
    price: 999,
    occupancy: "3 Adults, 2 Children",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1200",
    amenities: ["Private Beach", "Jacuzzi", "Gourmet Kitchen", "Garden"]
  },
  {
    id: 6,
    name: "Penthouse Suite",
    size: "100m²",
    price: 1099,
    occupancy: "4 Adults",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200",
    amenities: ["Rooftop Terrace", "Wine Cellar", "Private Chef", "City View"]
  }
];

const facilities = [
  { icon: <Pool className="w-6 h-6" />, name: "Swimming Pool", description: "Infinity pool with ocean view" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "Fitness Center", description: "24/7 state-of-the-art equipment" },
  { icon: <Utensils className="w-6 h-6" />, name: "Restaurant", description: "Fine dining experience" },
  { icon: <Car className="w-6 h-6" />, name: "Parking", description: "Free valet parking" },
  { icon: <Wifi className="w-6 h-6" />, name: "Free WiFi", description: "High-speed internet" },
  { icon: <Coffee className="w-6 h-6" />, name: "Café", description: "Artisan coffee & snacks" }
];

const sports = [
  {
    name: "Tennis Courts",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200",
    description: "Professional tennis courts with equipment rental"
  },
  {
    name: "Beach Volleyball",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200",
    description: "Beachfront volleyball courts"
  },
  {
    name: "Water Sports",
    image: "https://images.unsplash.com/photo-1533558793814-45f1f0990456?q=80&w=1200",
    description: "Including kayaking, surfing, and paddleboarding"
  }
];

function App() {
  const [searchDate, setSearchDate] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hotel className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LuxStay
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#rooms" className="text-gray-600 hover:text-indigo-600 transition-colors">Rooms</a>
            <a href="#facilities" className="text-gray-600 hover:text-indigo-600 transition-colors">Facilities</a>
            <a href="#sports" className="text-gray-600 hover:text-indigo-600 transition-colors">Sports</a>
            <a href="#booking" className="text-gray-600 hover:text-indigo-600 transition-colors">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200"
          alt="Luxury Hotel"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Experience Luxury Living
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Where comfort meets elegance
          </p>
        </div>
      </div>

      {/* Booking Search */}
      <div className="container mx-auto px-4 -mt-16 relative z-10" id="booking">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <section className="py-20 container mx-auto px-4" id="rooms">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Luxurious Rooms
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <div className="flex items-center mb-2">
                  <Bed className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">{room.occupancy}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Bath className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">{room.size}</span>
                </div>
                <ul className="mb-4">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-600 mb-1">
                      <Star className="w-4 h-4 text-indigo-600 mr-2" />
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-indigo-600">${room.price}</span>
                    <span className="text-gray-500">/night</span>
                  </div>
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                    <span>Book Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white" id="facilities">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hotel Facilities
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20" id="sports">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sports & Activities
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{sport.name}</h3>
                  <p className="text-gray-200">{sport.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hotel className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  LuxStay
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Experience unparalleled luxury and comfort at LuxStay. Where every stay becomes an unforgettable memory.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span>123 Luxury Avenue, Paradise City</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span>contact@luxstay.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#rooms" className="text-gray-400 hover:text-indigo-400 transition-colors">Our Rooms</a>
                </li>
                <li>
                  <a href="#facilities" className="text-gray-400 hover:text-indigo-400 transition-colors">Facilities</a>
                </li>
                <li>
                  <a href="#sports" className="text-gray-400 hover:text-indigo-400 transition-colors">Sports & Activities</a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-indigo-400 transition-colors">Book Now</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2025 LuxStay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;