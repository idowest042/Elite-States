import React from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from './axios'
import { useEffect, useState } from 'react'
import { apimanagement } from './apiManagement' 
import { MapPin, Home, ArrowRight, Eye } from 'lucide-react'

const AllProperties = () => {
const{Allproperties,fetchAllproperties}= apimanagement()
useEffect(() =>{
  fetchAllproperties()
},[])
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Properties</span>
            </h1>
            <div className="w-12 h-[3px] bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover your perfect home from our curated collection of premium properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Allproperties.map((property) => (
            <div 
              key={property.id} 
              className="group bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image[0]} 
                  alt={property.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Property Name */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-200">
                  {property.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="space-y-3 mb-5">
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ${property.price.toLocaleString()}
                    </span>
                    
                  </div>

                  {/* Location and Rooms */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                      <span className="truncate">{property.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Home className="w-4 h-4 mr-1 text-amber-500" />
                      <span>{property.rooms} rooms</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <Link to={`/property/${property._id}`} className="block">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no properties) */}
        {Allproperties.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Properties Available</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're currently updating our property listings. Please check back soon for new available properties.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProperties