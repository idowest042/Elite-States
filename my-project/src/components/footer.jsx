import { ArrowBigRight, Instagram, Linkedin, Mail, Phone, MapPin,ChevronRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-yellow-800  py-16 px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t-2 border-amber-500'>
      {/* Brand Section */}
      <div className="space-y-6">
        <h1 className=" text-5xl font-bold font-joseph">
          <span className="text-white ">Elites</span>{' '}
          <span className="text-amber-400">States</span>
        </h1>
        <p className="text-lg text-amber-100">
          Where extraordinary properties and exceptional clients find their perfect match.
        </p>
        <div className="socials flex gap-6 mt-6">
          <Linkedin 
            className='w-8 h-8 text-amber-400 hover:text-white hover:scale-110 cursor-pointer transition-all duration-300' 
          />
          <Instagram 
            className='w-8 h-8 text-amber-400 hover:text-white hover:scale-110 cursor-pointer transition-all duration-300' 
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-amber-400">Quick Links</h2>
        <ul className="space-y-3 text-amber-100">
          {['Home', 'Properties', 'About Us', 'Contact Us'].map((item) => (
            <li 
              key={item}
              className="group flex items-center cursor-pointer hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4 mr-2 text-amber-400 group-hover:text-white" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Global Offices */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-amber-400">Global Offices</h2>
        <ul className="space-y-4 text-amber-100">
          {[
            { country: 'Namibia', address: '123 Windhoek St, Namibia' },
            { country: 'Kenya', address: '456 Nairobi Rd, Kenya' },
            { country: 'Nigeria', address: '789 Lagos Ave, Nigeria' },
            { country: 'South Africa', address: '101 Cape Town Blvd, SA' }
          ].map((office) => (
            <li key={office.country} className="group">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-2 text-amber-400 group-hover:text-white" />
                <div>
                  <p className="font-medium group-hover:text-white">{office.country}</p>
                  <p className="text-sm opacity-80">{office.address}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter & Contact */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-amber-400">Stay Updated</h2>
        <p className="text-amber-100">
          Subscribe to our newsletter for the latest updates and exclusive offers.
        </p>
        
        <div className="relative mt-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full py-3 px-4 pr-12 rounded-lg bg-amber-900/50 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-amber-700 transition-colors">
            <ArrowBigRight className="w-6 h-6 text-amber-400 hover:text-white" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center text-amber-100 hover:text-white transition-colors">
            <Phone className="w-5 h-5 mr-3 text-amber-400" />
            <span>+1 (234) 567-8900</span>
          </div>
          <div className="flex items-center text-amber-100 hover:text-white transition-colors">
            <Mail className="w-5 h-5 mr-3 text-amber-400" />
            <span>info@elitesstates.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="md:col-span-2 lg:col-span-4 pt-10 border-t border-amber-700/50 text-center text-amber-200">
        <p>© {new Date().getFullYear()} Elites States. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer