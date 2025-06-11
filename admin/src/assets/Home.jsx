import React from 'react';
import { authentication } from './Authication';
import { 
  Home, 
  Users,
  DollarSign,
  FileText,
  Calendar,
  ArrowRight,
  Plus,
  Activity,
  Clock
} from 'lucide-react';

const Homes = () => {
    const {authuser} = authentication();
  // Sample data
  const stats = [
    { title: "Total Properties", value: "1,248", change: "+12%", trend: "up", icon: <Home className="w-5 h-5" /> },
    { title: "Active Listings", value: "892", change: "+5%", trend: "up", icon: <Home className="w-5 h-5" /> },
    { title: "Registered Users", value: "5,421", change: "+24%", trend: "up", icon: <Users className="w-5 h-5" /> },
    { title: "Total Revenue", value: "$3.2M", change: "-2%", trend: "down", icon: <DollarSign className="w-5 h-5" /> }
  ];

  const quickActions = [
    { title: "Add New Property", icon: <Plus className="w-5 h-5" />, link: "/add" },
    { title: "View listed Properties", icon: <FileText className="w-5 h-5" />, link: "/list" },
    { title: "View Dashboard", icon: <Users className="w-5 h-5" />, link: "/dashboard" },
    { title: "View Clients messages", icon: <Calendar className="w-5 h-5" />, link: "/messages" }
  ];

  const recentActivities = [
    { user: "Sarah Johnson", action: "added new property", time: "2 mins ago", property: "Malibu Beach Villa" },
    { user: "Michael Chen", action: "updated listing", time: "15 mins ago", property: "Manhattan Penthouse" },
    { user: "Emma Wilson", action: "completed purchase", time: "1 hour ago", property: "Beverly Hills Mansion" },
    { user: "David Kim", action: "requested viewing", time: "3 hours ago", property: "Miami Waterfront" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                {stat.icon}
              </div>
            </div>
            <h3 className="mt-4 text-gray-500 text-sm font-medium">{stat.title}</h3>
            <div className="mt-2 flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <span className="mr-3 p-2 rounded-lg bg-gray-50 text-gray-600">
                    {action.icon}
                  </span>
                  <span className="font-medium text-gray-700">{action.title}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity, index) => (
                <li key={index} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-amber-100 rounded-lg p-2 text-amber-600">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.user} <span className="text-gray-500 font-normal">{activity.action}</span>
                          {activity.property && (
                            <span className="text-amber-600"> {activity.property}</span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 py-3 bg-gray-50 text-center border-t border-gray-200">
              <a href="/admin/activity" className="text-sm font-medium text-amber-600 hover:text-amber-700">
                View all activity
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;