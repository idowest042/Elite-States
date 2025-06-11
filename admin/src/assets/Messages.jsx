import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MessageSquare, Search, Trash2, Archive, Filter } from 'lucide-react';
import { axiosInstance } from './axios';
import { toast } from 'react-toastify';

const AdminMessagesDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Replace with your actual API call
        // const response = await fetch('/api/admin/messages');
        // const data = await response.json();
        
        // Mock data
        const response = await axiosInstance.get('/homes/info')
        
        setMessages(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async(id) => {
    try{
    const response =await axiosInstance.delete(`/homes/deleteemail/${id}`);
    if (response.data) {
        toast.success(response.data.message);
        setMessages(response.data.filter(message => message._id !== id));
    }else{
        toast.error(response.data.message || "Failed to delete message");
        console.log('Error deleting message:', response.data.message);
    }
     
    }catch(error){
         console.error('Error deleting message:', error);
            toast.error(error.response?.data?.message || "Failed to delete message");
        }
   
  };

  const handleArchive = (id) => {
    // Implement archive functionality
    console.log('Archive message:', id);
  };

  const toggleSelectMessage = (id) => {
    setSelectedMessages(prev => 
      prev.includes(id) 
        ? prev.filter(messageId => messageId !== id) 
        : [...prev, id]
    );
  };

  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Client Messages</h1>
          <p className="text-gray-600 mt-2">View and manage all client inquiries</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 border-b border-gray-200 font-medium text-gray-700">
            <div className="col-span-1"></div>
            <div className="col-span-3">Client</div>
            <div className="col-span-3">Contact</div>
            <div className="col-span-4">Message</div>
            <div className="col-span-1">Actions</div>
          </div>

          {isLoading ? (
            <div className="p-8 text-center text-gray-500">
              Loading messages...
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No messages found
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div 
                key={message._id} 
                className={`grid grid-cols-12 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 ${
                  !message.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="col-span-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedMessages.includes(message._id)}
                    onChange={() => toggleSelectMessage(message._id)}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      !message.read ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{message.name}</p>
                      <p className="text-sm text-gray-500">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{message.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{message.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-sm line-clamp-2">{message.message}</p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center justify-end gap-2">
                  <button 
                    onClick={() => handleArchive(message._id)}
                    className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-full"
                    title="Archive"
                  >
                    <Archive className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(message._id)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bulk Actions */}
        {selectedMessages.length > 0 && (
          <div className="mt-4 flex justify-between items-center bg-yellow-50 p-3 rounded-lg">
            <div className="text-sm text-gray-700">
              {selectedMessages.length} message{selectedMessages.length !== 1 ? 's' : ''} selected
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                Mark as read
              </button>
              <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                Archive
              </button>
              <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessagesDashboard;