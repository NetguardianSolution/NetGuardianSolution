import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobile, 
  FaMapMarkerAlt, 
  FaUnlock, 
  FaShieldAlt, 
  FaChartLine, 
  FaCog,
  FaSearch,
  FaBell,
  FaUser,
  FaSync,
  FaLock,
  FaEye,
  FaDatabase,
  FaNetworkWired,
  FaHistory,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock
} from 'react-icons/fa';
import { IoIosStats, IoMdPhonePortrait } from 'react-icons/io';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      status: 'active',
      type: 'iOS',
      lastSeen: '2 minutes ago',
      location: 'New York, NY',
      battery: 85,
      isLocked: false,
      imei: '358901052364810'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      status: 'tracking',
      type: 'Android',
      lastSeen: '5 minutes ago',
      location: 'Los Angeles, CA',
      battery: 42,
      isLocked: true,
      imei: '359098071234567'
    },
    {
      id: 3,
      name: 'iPad Pro',
      status: 'offline',
      type: 'iOS',
      lastSeen: '1 hour ago',
      location: 'Chicago, IL',
      battery: 0,
      isLocked: false,
      imei: '358901052364811'
    }
  ]);

  const stats = [
    { label: 'Total Devices', value: '12', icon: FaMobile, color: 'cyan' },
    { label: 'Active Tracking', value: '8', icon: FaMapMarkerAlt, color: 'green' },
    { label: 'Unlocked Devices', value: '9', icon: FaUnlock, color: 'amber' },
    { label: 'Security Alerts', value: '2', icon: FaShieldAlt, color: 'red' }
  ];

  const recentActivities = [
    { action: 'Device Unlocked', device: 'iPhone 15 Pro', time: '2 min ago', status: 'success' },
    { action: 'Location Tracked', device: 'Samsung S23', time: '5 min ago', status: 'info' },
    { action: 'Security Alert', device: 'iPad Pro', time: '1 hour ago', status: 'warning' },
    { action: 'Device Added', device: 'Google Pixel 8', time: '2 hours ago', status: 'success' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <IoMdPhonePortrait className="text-cyan-400 text-2xl" />
              <span className="text-white font-bold text-xl"></span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <FaBell className="text-gray-400 text-xl hover:text-cyan-400 cursor-pointer transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
                <span className="text-white font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Device Management Dashboard</h1>
          <p className="text-gray-400">Monitor and manage all your connected devices in real-time</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 bg-${stat.color}-500/10 rounded-xl`}>
                  <stat.icon className={`text-${stat.color}-400 text-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Devices List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Managed Devices</h2>
                <div className="flex gap-3">
                  <button className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                    Add Device
                  </button>
                  <button className="bg-white/5 text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <FaSync className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {devices.map((device) => (
                  <motion.div
                    key={device.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          device.status === 'active' ? 'bg-green-500/10' : 
                          device.status === 'tracking' ? 'bg-blue-500/10' : 'bg-gray-500/10'
                        }`}>
                          <FaMobile className={
                            device.status === 'active' ? 'text-green-400' : 
                            device.status === 'tracking' ? 'text-blue-400' : 'text-gray-400'
                          } />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{device.name}</h3>
                          <p className="text-gray-400 text-sm">{device.type} • {device.imei}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                              device.status === 'active' ? 'bg-green-500/20 text-green-400' : 
                              device.status === 'tracking' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {device.status}
                            </span>
                            <span className="text-gray-400 text-xs">{device.lastSeen}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors">
                          <FaMapMarkerAlt />
                        </button>
                        <button className="p-2 bg-amber-500/10 text-amber-400 rounded-lg hover:bg-amber-500/20 transition-colors">
                          {device.isLocked ? <FaLock /> : <FaUnlock />}
                        </button>
                        <button className="p-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors">
                          <FaCog />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500/20' :
                      activity.status === 'warning' ? 'bg-amber-500/20' : 'bg-cyan-500/20'
                    }`}>
                      {activity.status === 'success' ? <FaCheckCircle className="text-green-400" /> :
                       activity.status === 'warning' ? <FaExclamationTriangle className="text-amber-400" /> :
                       <FaClock className="text-cyan-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.device}</p>
                    </div>
                    <span className="text-gray-400 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaSearch, label: 'Track Device', color: 'cyan' },
                  { icon: FaUnlock, label: 'Unlock', color: 'green' },
                  { icon: FaShieldAlt, label: 'Security', color: 'amber' },
                  { icon: FaDatabase, label: 'Backup', color: 'purple' }
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-${action.color}-500/10 border border-${action.color}-500/20 rounded-xl hover:bg-${action.color}-500/20 transition-all duration-300`}
                  >
                    <action.icon className={`text-${action.color}-400 text-xl mb-2`} />
                    <span className="text-white text-sm font-medium">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;