import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Award, 
  Users, 
  MapPin, 
  BarChart2, 
  Handshake,
  ChevronRight,
  Phone,
  Mail,
  Map,
  Clock
} from 'lucide-react';

const AboutPage = () => {
  // State for animated counters
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    properties: 0,
    satisfaction: 0
  });

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounterAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    const targetValues = {
      years: 20,
      clients: 5000,
      properties: 2, // Will be converted to billions
      satisfaction: 98
    };

    const duration = 2000; // Animation duration in ms
    const steps = 50; // Number of animation steps
    const incrementTimes = duration / steps;

    const yearsIncrement = targetValues.years / steps;
    const clientsIncrement = targetValues.clients / steps;
    const propertiesIncrement = targetValues.properties / steps;
    const satisfactionIncrement = targetValues.satisfaction / steps;

    let currentValues = {
      years: 0,
      clients: 0,
      properties: 0,
      satisfaction: 0
    };

    const interval = setInterval(() => {
      currentValues = {
        years: Math.min(currentValues.years + yearsIncrement, targetValues.years),
        clients: Math.min(currentValues.clients + clientsIncrement, targetValues.clients),
        properties: Math.min(currentValues.properties + propertiesIncrement, targetValues.properties),
        satisfaction: Math.min(currentValues.satisfaction + satisfactionIncrement, targetValues.satisfaction)
      };

      setCounters({
        years: Math.floor(currentValues.years),
        clients: Math.floor(currentValues.clients),
        properties: currentValues.properties,
        satisfaction: Math.floor(currentValues.satisfaction)
      });

      // Stop interval when all targets reached
      if (
        currentValues.years >= targetValues.years &&
        currentValues.clients >= targetValues.clients &&
        currentValues.properties >= targetValues.properties &&
        currentValues.satisfaction >= targetValues.satisfaction
      ) {
        clearInterval(interval);
      }
    }, incrementTimes);

    return () => clearInterval(interval);
  };

  // Stats data with animated values
  const stats = [
    { value: `${counters.years}+`, label: "Years Experience" },
    { value: `${counters.clients.toLocaleString()}+`, label: "Happy Clients" },
    { value: `$${(counters.properties * 1).toFixed(1)}B+`, label: "Properties Sold" },
    { value: `${counters.satisfaction}%`, label: "Client Satisfaction" }
  ];

  // Team members data
  const team = [
    {
      name: "Michael Johnson",
      role: "Founder & CEO",
      bio: "With over 25 years in luxury real estate, Michael has built an unparalleled network in high-end property markets.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Director of Sales",
      bio: "Sarah specializes in matching clients with their dream properties through her exceptional market knowledge.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "David Chen",
      role: "Head of Acquisitions",
      bio: "David's financial expertise helps clients identify the most valuable investment opportunities.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Add your document head elements directly in your index.html or use react-helmet if needed */}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-amber-600">Our Company</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building relationships and finding exceptional properties since 2003
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Office Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Office</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2003, Luxe Properties began as a boutique real estate firm with a vision to redefine luxury property transactions. What started as a small team of passionate professionals has grown into one of the most respected names in high-end real estate.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our Beverly Hills flagship office reflects our commitment to excellence. Designed by award-winning architects, our space combines modern luxury with timeless elegance, mirroring the properties we represent.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4" />
                  <span className="text-gray-700">123 Beverly Hills, CA 90210</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-amber-600 mr-4" />
                  <span className="text-gray-700">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Our office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Our Flagship Office</h3>
                  <p className="text-amber-200">Award-winning design in the heart of Beverly Hills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section id="stats-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-4xl font-bold text-amber-600 mb-2 animate-count">
                  {stat.value}
                </p>
                <p className="text-gray-600 uppercase text-sm tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Handshake className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We believe in complete transparency and ethical dealings in every transaction, building trust that lasts beyond the sale.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Award className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                From property selection to client service, we pursue perfection in every detail to deliver exceptional results.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Users className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Client Focus</h3>
              <p className="text-gray-600 text-center">
                Your needs come first. We listen carefully and tailor our approach to help you achieve your real estate goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to start your journey?</h2>
              <p className="text-amber-100 mb-8 text-lg">
                Our team is ready to provide personalized guidance for your real estate needs. Contact us today to schedule a consultation.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-white mr-4" />
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-white mr-4" />
                  <span className="text-white">info@luxeproperties.com</span>
                </div>
                <div className="flex items-center">
                  <Map className="w-6 h-6 text-white mr-4" />
                  <span className="text-white">123 Beverly Hills, CA 90210</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Add this style tag for the counter animation */}
      <style jsx>{`
        .animate-count {
          transition: all 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;