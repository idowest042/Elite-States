import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Loader, MapPin, Home, Bed, Bath, Ruler, Heart, Share2, Phone, Calendar, Star } from 'lucide-react';
import { axiosInstance } from './axios';
import { motion } from 'framer-motion';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchProperty = async (propertyId) => {
    try {
      if (!propertyId || propertyId === 'undefined') {
        throw new Error('Invalid property ID');
      }

      setIsLoading(true);
      setError(null);
      
      const response = await axiosInstance.get(`/homes/gethouse/${propertyId}`);
      
      if (!response.data) {
        throw new Error('Property not found');
      }

      setProductData(response.data);
      setMainImage(response.data.image[0]);
      
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to load property');
      setTimeout(() => navigate('/properties'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id && id !== 'undefined') {
      fetchProperty(id);
    } else {
      setError('Invalid property URL');
      setIsLoading(false);
      navigate('/properties');
    }
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center"
        >
          <Loader className="animate-spin w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Loading Luxury Property</h3>
          <p className="text-gray-500 mt-2">Preparing the finest details...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !productData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Unavailable</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/properties')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Browse Available Properties
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Property Header */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={mainImage}
          alt={productData.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{productData.name}</h1>
            <div className="flex items-center text-lg">
              <MapPin className="w-5 h-5 mr-2 text-blue-300" />
              <span>{productData.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-full backdrop-blur-md ${isFavorite ? 'bg-red-100 text-red-500' : 'bg-white/90 text-gray-700'}`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button className="p-3 rounded-full bg-white/90 backdrop-blur-md text-gray-700">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Price and Quick Facts */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${productData.price.toLocaleString()}
                  </span>
                  {productData.price > 1000000 && (
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                
              </div>

              <div className="mt-4 md:mt-0 flex gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-700">
                    <Bed className="w-5 h-5 mr-1" />
                    <span className="font-semibold">{productData.rooms}</span>
                  </div>
                  <span className="text-xs text-gray-500">Bedrooms</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-700">
                    <Bath className="w-5 h-5 mr-1" />
                    <span className="font-semibold">{productData.bathrooms || 2}</span>
                  </div>
                  <span className="text-xs text-gray-500">Bathrooms</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-700">
                    <Ruler className="w-5 h-5 mr-1" />
                    <span className="font-semibold">{productData.sqft || '---'}</span>
                  </div>
                  <span className="text-xs text-gray-500">Sq Ft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="p-4 border-b border-gray-100 overflow-x-auto">
            <div className="flex gap-3">
              {productData.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === img
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-white hover:border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-100">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-6 py-4 font-medium text-sm flex items-center ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Home className="w-4 h-4 mr-2" />
                Details
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-6 py-4 font-medium text-sm flex items-center ${activeTab === 'map' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 font-medium text-sm flex items-center ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Star className="w-4 h-4 mr-2" />
                Reviews
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'details' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Property</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {productData.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {[
                    'Central Air',
                    'Gourmet Kitchen',
                    'Hardwood Floors',
                    'Walk-in Closet',
                    'Smart Home',
                    'Mountain Views',
                    'Swimming Pool',
                    'Home Office',
                    'Garage'
                  ].slice(0, productData.rooms + 3).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-medium text-gray-900 mb-3">Property Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Property Type</p>
                      <p className="font-medium">{productData.type || 'Single Family Home'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year Built</p>
                      <p className="font-medium">{productData.yearBuilt || '2020'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Lot Size</p>
                      <p className="font-medium">{productData.lotSize || '0.5 acres'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Parking</p>
                      <p className="font-medium">{productData.parking || '2 car garage'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'map' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-96 bg-gray-200 rounded-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive map would display here</p>
                  <p className="text-sm text-gray-400 mt-1">{productData.location}</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">4.2 (12 reviews)</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {[1, 2].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                          <p className="font-medium">Reviewer {review}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < (review === 1 ? 4 : 3) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {review === 1
                          ? "This property exceeded all our expectations. The location is perfect and the finishes are high quality."
                          : "Beautiful home but the neighborhood is a bit noisy at night. Otherwise a great experience."}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">2 months ago</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Fixed CTA on mobile */}
          <div className="lg:hidden p-4 bg-white border-t border-gray-100 sticky bottom-0 z-10 shadow-lg">
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Contact
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-4 h-4" />
                Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sidebar CTA (Desktop) */}
      <div className="hidden lg:block fixed right-8 bottom-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-6 w-72"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-4">Interested in this property?</h3>
          <div className="space-y-3">
            <Link to='/contacts'>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              Contact Agent
            </button>
            </Link>
             <Link to='/contacts'>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule a Tour
            </button>
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Or call us at <span className="text-blue-600 font-medium">(555) 123-4567</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;