import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Home, 
  Users,
  Settings,
  LogOut,
  Package,
  FileText,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  HomeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { authentication } from './Authication';
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
   const { logout } = authentication();
   const handleLogout = () => {
    logout()
    navigate('/login');
   }
  const navItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/dashboard'
    },
    {
      name: 'Properties',
      icon: <Home className="w-5 h-5" />,
      submenu: [
        { name: 'All Properties', path: '/list' },
        { name: 'Add New', path: '/add' },
      ]
    },
    {
      name: 'Listings',
      icon: <Package className="w-5 h-5" />,
      submenu: [
        { name: 'Active Listings', path: '/list' },
      ]
    },
    {
      name: 'Messages',
      icon: <FileText className="w-5 h-5" />,
      path:'/messages'
    },
    {
      name:"Home",
     icon: <HomeIcon className="w-5 h-5" />,
      path: '/'
    }
    
  ];

  return (
    <>
      {/* Toggle Button (visible on all screen sizes) */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Admin Navbar (open/close works on all screen sizes) */}
      <nav className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col h-full">
          {/* Brand Logo */}
          <div className="p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold flex items-center">
              <span className="bg-amber-500 p-2 rounded-lg mr-2">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </span>
              Admin Panel
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors ${activeDropdown === item.name ? 'bg-gray-700' : ''}`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                        {activeDropdown === item.name ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      {activeDropdown === item.name && (
                        <ul className="ml-8 mt-1 space-y-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className="block p-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-700">
            <button onClick={handleLogout} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay (only shows on small screens) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminNavbar;
