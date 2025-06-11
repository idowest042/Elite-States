import React from 'react';
import { 
  Home, 
  Building2, 
  LandPlot, 
  Hotel, 
  Handshake, 
  BadgeCheck,
  ShieldCheck,
  Trophy,
  Users,
  BarChart2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-amber-600" />,
      title: "Residential Properties",
      description: "Find your dream home from our curated selection of luxury houses, apartments, and villas.",
      features: [
        "Luxury villas & apartments",
        "Gated communities",
        "Waterfront properties",
        "Smart home solutions"
      ]
    },
    {
      icon: <Building2 className="w-10 h-10 text-amber-600" />,
      title: "Commercial Real Estate",
      description: "Premium office spaces, retail locations, and commercial buildings for your business needs.",
      features: [
        "Prime location offices",
        "Mixed-use developments",
        "Co-working spaces",
        "Retail storefronts"
      ]
    },
    {
      icon: <LandPlot className="w-10 h-10 text-amber-600" />,
      title: "Land Acquisition",
      description: "Strategic land purchases for development, investment, or personal use with clear titles.",
      features: [
        "Agricultural land",
        "Residential plots",
        "Commercial zones",
        "Development parcels"
      ]
    },
    {
      icon: <Hotel className="w-10 h-10 text-amber-600" />,
      title: "Vacation Properties",
      description: "Exclusive holiday homes and rental properties in the most sought-after destinations.",
      features: [
        "Befront properties",
        "Mountain retreats",
        "Short-term rentals",
        "Resort communities"
      ]
    },
    {
      icon: <Handshake className="w-10 h-10 text-amber-600" />,
      title: "Property Management",
      description: "Comprehensive management services for rental properties and investment portfolios.",
      features: [
        "Tenant screening",
        "Maintenance coordination",
        "Rent collection",
        "Financial reporting"
      ]
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-amber-600" />,
      title: "Valuation Services",
      description: "Professional property valuation for sales, purchases, taxation, and legal purposes.",
      features: [
        "Market analysis",
        "Comparative evaluations",
        "Investment appraisals",
        "Legal dispute valuations"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      title: "Trusted Expertise",
      description: "20+ years in the real estate industry with proven track record"
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized as top real estate agency for 5 consecutive years"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Client Focused",
      description: "5000+ satisfied clients with 98% satisfaction rate"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-amber-600" />,
      title: "Market Leaders",
      description: "Access to exclusive listings before they hit the market"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Premium</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs, from luxury homes to commercial investments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <button className="px-6 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Our expert consultants are ready to guide you through every step of your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacts" >
            <button className="px-8 py-3 bg-white text-amber-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            </Link>
            <Link to="/properties">
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors">
              Browse Listings
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;