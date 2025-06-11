import React from 'react';
import Slider from 'react-slick';
import { testimonals } from '../assets/assets';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#C69C6D] to-[#D4AF37] p-3 rounded-full shadow-2xl z-10 hover:scale-110 transition-transform"
    onClick={onClick}
  >
    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M7 4l5 6-5 6" /></svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#C69C6D] to-[#D4AF37] p-3 rounded-full shadow-2xl z-10 hover:scale-110 transition-transform"
    onClick={onClick}
  >
    <svg className="w-6 h-6 text-black rotate-180" fill="currentColor" viewBox="0 0 20 20"><path d="M7 4l5 6-5 6" /></svg>
  </button>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-[#D4AF37] uppercase tracking-wider mb-2 drop-shadow-lg">
          Client Experiences
        </h2>
        <h3 className="text-6xl font-extralight text-gray-800 mb-8">
          Testimonials
        </h3>
        <Slider {...settings} className="relative">
          {testimonals.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-full ring-4 ring-[#D4AF37] mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">“{item.review}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
