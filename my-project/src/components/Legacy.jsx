import React from 'react'
import { assets } from '../assets/assets'
import { Award, Users, Building, ArrowRight, Star, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Legacy = () => {
  const achievements = [
    { icon: Calendar, label: "Since 1996", value: "28+ Years", color: "text-amber-600" },
    { icon: Building, label: "Properties Sold", value: "5,000+", color: "text-blue-600" },
    { icon: Users, label: "Happy Clients", value: "2,500+", color: "text-green-600" },
    { icon: Award, label: "Industry Awards", value: "50+", color: "text-purple-600" }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={assets.info} 
                alt="Luxury property showcase" 
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-xl">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">28+ Years</div>
                    <div className="text-sm text-gray-600">Excellence</div>
                  </div>
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-900">5.0 Client Rating</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-200/30 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              <span>Our Legacy</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Redefining Luxury <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Real Estate
              </span> Since 1996
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                Elite Estates represents the pinnacle of luxury real estate, offering 
                unparalleled service and access to the world's most extraordinary properties.
              </p>
              
              <p>
                With decades of experience and a network spanning across the globe, we connect 
                discerning clients with homes that transcend the ordinary and embrace the exceptional.
              </p>
              
              <p>
                Our portfolio includes architectural masterpieces, historical landmarks, waterfront estates, and urban penthouses 
                that define the very essence of luxury living.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-opacity-10 ${achievement.color.replace('text-', 'bg-')}`}>
                        <Icon className={`w-5 h-5 ${achievement.color}`} />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-gray-900 group-hover:scale-105 transition-transform">
                          {achievement.value}
                        </div>
                        <div className="text-sm text-gray-600">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/about'>
              <button className="group bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              </Link>
              <Link to='/services'>
              <button className="border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:bg-amber-50">
                View Portfolio
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Recognized excellence in luxury real estate</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            {/* Placeholder for partner logos - you can replace with actual logos */}
            <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 1</span>
            </div>
            <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 2</span>
            </div>
            <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 3</span>
            </div>
            <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legacy