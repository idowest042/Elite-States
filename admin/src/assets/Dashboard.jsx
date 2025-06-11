import React from 'react';
import { 
  BarChart3, 
  Home, 
  Users,
  DollarSign,
  Calendar,
  Clock,
  ArrowUpRight,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  ChevronDown
} from 'lucide-react';

const AdminDashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Properties", value: "1,248", change: "+12%", trend: "up", icon: <Home className="w-6 h-6" /> },
    { title: "Active Listings", value: "892", change: "+5%", trend: "up", icon: <Home className="w-6 h-6" /> },
    { title: "Registered Users", value: "5,421", change: "+24%", trend: "up", icon: <Users className="w-6 h-6" /> },
    { title: "Total Revenue", value: "$3.2M", change: "-2%", trend: "down", icon: <DollarSign className="w-6 h-6" /> }
  ];

  const recentActivities = [
    { user: "Sarah Johnson", action: "added new property", time: "2 mins ago", property: "Malibu Beach Villa" },
    { user: "Michael Chen", action: "updated listing", time: "15 mins ago", property: "Manhattan Penthouse" },
    { user: "Emma Wilson", action: "completed purchase", time: "1 hour ago", property: "Beverly Hills Mansion" },
    { user: "David Kim", action: "requested viewing", time: "3 hours ago", property: "Miami Waterfront" },
    { user: "Lisa Rodriguez", action: "created account", time: "5 hours ago", property: "" }
  ];

  const propertiesByType = [
    { type: "Villas", count: 420, percent: 35 },
    { type: "Apartments", count: 380, percent: 30 },
    { type: "Penthouses", count: 210, percent: 15 },
    { type: "Mansions", count: 190, percent: 15 },
    { type: "Others", count: 48, percent: 5 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                <span className="text-gray-700">Last 30 days</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <div className="p-3 rounded-lg bg-amber-50 text-amber-600">
                  {stat.icon}
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <h3 className="mt-4 text-gray-500 text-sm font-medium">{stat.title}</h3>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="ml-1 text-sm font-medium">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Statistics */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Property Statistics</h2>
              <button className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                View all <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="h-80">
              {/* Placeholder for chart - replace with your actual chart component */}
              <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                <BarChart3 className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Property Analytics Chart</span>
              </div>
            </div>
          </div>

          {/* Property Types */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Properties by Type</h2>
            <div className="space-y-4">
              {propertiesByType.map((property, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{property.type}</span>
                    <span className="font-medium text-gray-900">{property.count} ({property.percent}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-500 h-2 rounded-full" 
                      style={{ width: `${property.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {recentActivities.map((activity, index) => (
              <li key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 rounded-lg p-2 text-amber-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.user} <span className="text-gray-500 font-normal">{activity.action}</span>
                        {activity.property && (
                          <span className="text-amber-600"> {activity.property}</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-3 bg-gray-50 text-center">
            <button className="text-sm font-medium text-amber-600 hover:text-amber-700">
              View all activity
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;