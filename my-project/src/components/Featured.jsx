import React, { useEffect } from 'react';
import { apimanagement } from './apiManagement';
import { Link } from 'react-router-dom';

const Featured = () => {
  const{Allproperties,fetchAllproperties} = apimanagement()
  useEffect(()=>{
    fetchAllproperties()
  },[])
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-lg font-semibold text-amber-500 tracking-wider">
            Curated Collection
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Featured Properties
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Allproperties.slice(0, 3).map((property) => (
            <div 
              key={property.id} 
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image[0]}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-bold text-gray-900">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {property.name}
                    </h3>
                    <p className="text-gray-500 mt-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                    {property.rooms}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 line-clamp-2">
                  {property.description}
                </p>
                <Link to={`/property/${property._id}`}>
                <button className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 -mr-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 border border-amber-500 rounded-lg text-lg font-medium text-amber-600 bg-white hover:bg-amber-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            View All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 -mr-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;