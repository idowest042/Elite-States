import React from 'react';
import Slider from 'react-slick';
import { offer } from '../assets/assets';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Offer = () => {
  // Custom Arrow Components with Lucide icons
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-600 to-amber-400 p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-all duration-300 group"
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-900 transition-colors" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-600 to-amber-400 p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-all duration-300 group"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-900 transition-colors" />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { 
        breakpoint: 1536, 
        settings: { 
          slidesToShow: 4,
          arrows: false 
        } 
      },
      { 
        breakpoint: 1280, 
        settings: { 
          slidesToShow: 3,
          arrows: false 
        } 
      },
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          arrows: false 
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px'
        } 
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-amber-600 uppercase tracking-wider mb-4">
            What <span className="font-bold italic">we</span> Offer
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Our Elite, Exclusive Services
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1.5 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Slider Component */}
        <div className="relative">
          <Slider {...settings} className="px-2">
            {offer.map((item, idx) => (
              <div key={idx} className="px-3 focus:outline-none">
                <div className="bg-gray-800 rounded-3xl p-6 shadow-xl flex flex-col items-center h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                  <div className="w-40 h-40 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-amber-500 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl relative z-10 border-4 border-amber-500"
                    />
                  </div>
                  <h3 className="text-2xl text-white font-bold mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base text-center px-2 mb-6">
                    {item.description}
                  </p>
                  <button className="mt-auto px-6 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Offer;