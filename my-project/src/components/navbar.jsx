import { useState } from 'react'
import { Menu, X, Home, Info, Building, Settings, Phone } from "lucide-react"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  
  const toggleMobileMenu = () => {
    setMenu(!menu)
  }

  const closeMobileMenu = () => {
    setMenu(false)
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Properties', path: '/properties', icon: Building },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contacts', path: '/contacts', icon: Phone }
  ]

  return (
    <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex-shrink-0">
            <div className="group cursor-pointer">
              <h1 className='font-joseph font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 transition-all duration-300 group-hover:scale-105'>
                Elite <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600'>States</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 group ${
                    isActive(item.path)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <Link to="/contacts" onClick={closeMobileMenu}>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200'
            aria-label="Toggle mobile menu"
          >
            {menu ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        menu 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pb-4 bg-white border-t border-gray-100">
          <div className="space-y-2 py-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-500'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
          
          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/contacts"
          >
            <button 
              onClick={closeMobileMenu}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 lg:hidden z-[-1]"
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  )
}

export default Navbar