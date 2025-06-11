import React, { useState, useEffect } from 'react';
import { 
  Trash2, 
  Edit, 
  Home, 
  MapPin, 
  BedDouble, 
  DollarSign,
  Loader2,
  Plus,
  Search,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { axiosInstance } from './axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ListedHouse = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedProperty, setExpandedProperty] = useState(null);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/homes/getallhouse');
      if (Array.isArray(response.data)) {
        setProperties(response.data);
      } else {
        setProperties([]);
        toast.error("No properties found or invalid response");
      }
    } catch (error) {
      setProperties([]);
      toast.error(error.response?.data?.message || error.message || "Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  const removeProperty = async (propertyId) => {
    setDeletingId(propertyId);
    try {
      const response = await axiosInstance.delete(`/homes/deletehouse/${propertyId}`);
      if (response.data?.success) {
        toast.success(response.data.message);
        setProperties(prev => prev.filter(prop => prop._id !== propertyId));
      } else {
        toast.error(response.data?.message || "Failed to delete property");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete property");
    } finally {
      setDeletingId(null);
    }
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredProperties = sortedProperties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.rooms.toString().includes(searchTerm)
  );

  useEffect(() => {
    fetchProperties();
  }, []);

  const PropertyDetailRow = ({ icon, label, value }) => (
    <div className="flex items-center py-1">
      <span className="flex items-center text-gray-500 w-24">
        {icon}
        <span className="ml-2">{label}</span>
      </span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Home className="mr-2 w-6 h-6 text-amber-500" />
              Property Portfolio
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your listed properties ({properties.length} total)
            </p>
          </div>
          <Link to="/add" >
          <button className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Add New Property
          </button>
          </Link>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-12 h-12 text-amber-500" />
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left text-sm font-medium text-gray-700">Property</th>
                    <th 
                      className="p-4 text-left text-sm font-medium text-gray-700 cursor-pointer"
                      onClick={() => requestSort('location')}
                    >
                      <div className="flex items-center">
                        Location
                        {sortConfig.key === 'location' && (
                          sortConfig.direction === 'asc' ? 
                            <ChevronUp className="ml-1 w-4 h-4" /> : 
                            <ChevronDown className="ml-1 w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th 
                      className="p-4 text-left text-sm font-medium text-gray-700 cursor-pointer"
                      onClick={() => requestSort('price')}
                    >
                      <div className="flex items-center">
                        Price
                        {sortConfig.key === 'price' && (
                          sortConfig.direction === 'asc' ? 
                            <ChevronUp className="ml-1 w-4 h-4" /> : 
                            <ChevronDown className="ml-1 w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-700">Details</th>
                    <th className="p-4 text-right text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProperties.map((property) => (
                    <React.Fragment key={property._id}>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center">
                            <img 
                              src={property.image[0]} 
                              alt={property.name} 
                              className="w-16 h-12 object-cover rounded-lg"
                            />
                            <div className="ml-4">
                              <h3 className="font-medium text-gray-800">{property.name}</h3>
                              <p className="text-sm text-gray-500">{property.rooms} rooms</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center text-gray-700">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {property.location}
                          </div>
                        </td>
                        <td className="p-4 text-gray-700">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                            {property.currency}{property.price.toLocaleString()}
                          </div>
                        </td>
                        <td className="p-4">
                          <button 
                            onClick={() => setExpandedProperty(expandedProperty === property._id ? null : property._id)}
                            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                          >
                            {expandedProperty === property._id ? 'Hide Details' : 'View Details'}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => removeProperty(property._id)}
                              disabled={deletingId === property._id}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full disabled:opacity-50"
                            >
                              {deletingId === property._id ? (
                                <Loader2 className="animate-spin w-5 h-5" />
                              ) : (
                                <Trash2 className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedProperty === property._id && (
                        <tr>
                          <td colSpan="5" className="bg-gray-50 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-medium text-gray-800 mb-3">Property Information</h4>
                                <PropertyDetailRow 
                                  icon={<BedDouble className="w-4 h-4" />} 
                                  label="Rooms" 
                                  value={property.rooms} 
                                />
                                <PropertyDetailRow 
                                  icon={<MapPin className="w-4 h-4" />} 
                                  label="Address" 
                                  value={property.address || 'Not specified'} 
                                />
                                <PropertyDetailRow 
                                  icon={<DollarSign className="w-4 h-4" />} 
                                  label="Price" 
                                  value={`${property.currency}${property.price.toLocaleString()}`} 
                                />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800 mb-3">Description</h4>
                                <p className="text-gray-700">{property.description || 'No description available'}</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {filteredProperties.map((property) => (
                <div key={property._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">{property.name}</h3>
                        <div className="flex items-center mt-1 text-gray-600">
                          <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                          <span>{property.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                        <span>{property.currency}{property.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <div className="flex items-center text-gray-600">
                        <BedDouble className="w-4 h-4 mr-1 text-gray-400" />
                        <span>{property.rooms} rooms</span>
                      </div>

                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => removeProperty(property._id)}
                          disabled={deletingId === property._id}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full disabled:opacity-50"
                        >
                          {deletingId === property._id ? (
                            <Loader2 className="animate-spin w-5 h-5" />
                          ) : (
                            <Trash2 className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => setExpandedProperty(expandedProperty === property._id ? null : property._id)}
                      className="mt-4 w-full text-center text-amber-600 hover:text-amber-700 text-sm font-medium"
                    >
                      {expandedProperty === property._id ? 'Hide Details' : 'Show More Details'}
                    </button>

                    {expandedProperty === property._id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="space-y-3">
                          <PropertyDetailRow 
                            icon={<BedDouble className="w-4 h-4" />} 
                            label="Rooms" 
                            value={property.rooms} 
                          />
                          <PropertyDetailRow 
                            icon={<MapPin className="w-4 h-4" />} 
                            label="Address" 
                            value={property.address || 'Not specified'} 
                          />
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Description</h4>
                            <p className="text-gray-700 text-sm">{property.description || 'No description available'}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {!loading && filteredProperties.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h3 className="text-lg font-medium text-gray-800">No properties found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your search or add a new property</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedHouse;