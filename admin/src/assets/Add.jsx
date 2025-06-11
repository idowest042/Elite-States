import React, { useState } from 'react';
import { 
  Upload, 
  Home, 
  MapPin, 
  DollarSign, 
  BedDouble,
  Text,
  Plus,
  Loader2
} from 'lucide-react';
import { axiosInstance } from './axios';
import { toast } from 'react-toastify';
import { assets } from "./assets";

const Add = () => {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: '',
    rooms: '',
    description: ''
  });

  const handleImageChange = (e, imageKey) => {
    if (e.target.files[0]) {
      setImages(prev => ({
        ...prev,
        [imageKey]: e.target.files[0]
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      
      Object.entries(images).forEach(([key, value]) => {
        if (value) formDataObj.append(key, value);
      });

      const response = await axiosInstance.post('/homes/addhouse', formDataObj);
      
      if (response.data) {
        toast.success(response.data.message || "Property added successfully");
        // Reset form
        setFormData({
          name: '',
          price: '',
          location: '',
          rooms: '',
          description: ''
        });
        setImages({
          image1: null,
          image2: null,
          image3: null,
          image4: null
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Plus className="mr-2 w-6 h-6 text-amber-500" />
        Add New Property
      </h1>

      <form onSubmit={onSubmitHandler} className="space-y-6">
        {/* Image Upload Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Upload className="mr-2 w-4 h-4" />
            Property Images (Upload up to 4)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <label 
                key={num}
                htmlFor={`image${num}`}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden hover:border-amber-400 transition-colors">
                  {images[`image${num}`] ? (
                    <img 
                      src={URL.createObjectURL(images[`image${num}`])} 
                      alt={`Preview ${num}`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <img src={assets.upload_area} alt="Upload area" className="mx-auto w-12 h-12 opacity-70" />
                      <span className="text-xs text-gray-500 mt-2 block">Image {num}</span>
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  id={`image${num}`} 
                  accept="image/*"
                  hidden 
                  onChange={(e) => handleImageChange(e, `image${num}`)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Home className="mr-2 w-4 h-4" />
              Property Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Luxury Villa"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin className="mr-2 w-4 h-4" />
              Location
            </label>
            <input
              name="location"
              type="text"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Beverly Hills, CA"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <DollarSign className="mr-2 w-4 h-4" />
              Price
            </label>
            <input
              name="price"
              type="text"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="$1,200,000"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Rooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <BedDouble className="mr-2 w-4 h-4" />
              Bedrooms
            </label>
            <input
              name="rooms"
              type="text"
              value={formData.rooms}
              onChange={handleInputChange}
              placeholder="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Text className="mr-2 w-4 h-4" />
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            placeholder="Describe the property features, amenities, and unique selling points..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all ${isLoading ? 'bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 w-5 h-5" />
                Adding Property...
              </>
            ) : (
              <>
                <Plus className="mr-2 w-5 h-5" />
                Add Property
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;