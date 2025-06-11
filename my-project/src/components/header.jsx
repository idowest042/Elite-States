import React from 'react';
import { assets } from '../assets/assets';
import { ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header 
      className="relative h-screen min-h-[600px] flex items-center justify-start px-4 md:px-12 lg:px-20 bg-cover bg-no-repeat"
     style={{ backgroundImage: `url(${assets.header})` }}
    >
      {/* Content Container */}
      <div className="max-w-3xl z-10 space-y-8 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
          Extraordinary Homes.<br />
          <span className="text-amber-400">Exceptional Lives</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed">
          Discover the most exclusive properties in the world's most coveted locations.
          Your journey to extraordinary living begins here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/properties">
          <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 transition-all duration-300 rounded-lg group">
            View Properties
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
          <Link to='/contacts'>
          <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-medium py-3 px-8 transition-all duration-300 rounded-lg group">
            <Calendar className="w-5 h-5" />
            Schedule Viewing
          </button>
          </Link>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-4 border-amber-400 rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-scroll"></div>
        </div>
      </div>

      {/* Add this to your CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0.3; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;