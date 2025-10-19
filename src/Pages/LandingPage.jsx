import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaUnlock, 
  FaMobile, 
  FaGlobe, 
  FaClock, 
  FaHeadset, 
  FaCrown, 
  FaArrowRight, 
  FaCheck,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaLock,
  FaMapMarkerAlt,
  FaDatabase,
  FaSync,
  FaRocket,
  FaAward,
  FaUsers,
//   FaShield,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { IoMdPhonePortrait, IoIosStats } from 'react-icons/io';
import NavBar from '../components/NavBar';

const LandingPage = ({ backgroundImage }) => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: FaUnlock,
      title: 'Advanced Device Unlocking',
      description: 'Professional carrier unlocking for all major providers including AT&T, Verizon, T-Mobile, and international carriers',
      details: ['IMEI-based unlocking', 'Network blacklist removal', 'Factory unlock services', 'Permanent solutions']
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Real-Time Tracking',
      description: 'Military-grade encrypted location tracking with live updates and geofencing capabilities',
      details: ['Real-time GPS tracking', 'Location history', 'Geofence alerts', 'Stealth mode available']
    },
    {
      icon: FaMobile,
      title: 'Multi-Platform Support',
      description: 'Comprehensive compatibility across iOS, Android, and emerging mobile platforms',
      details: ['iOS 12-17 support', 'Android 8-14 support', 'Tablet compatibility', 'Wearable integration']
    },
    {
      icon: FaDatabase,
      title: 'Data Recovery & Backup',
      description: 'Secure data extraction and backup solutions for lost or damaged devices',
      details: ['Contact recovery', 'Media backup', 'App data extraction', 'Cloud synchronization']
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Advanced Location Services',
      description: 'Precision tracking with multiple location technologies and mapping integrations',
      details: ['GPS/Wi-Fi triangulation', 'Cell tower tracking', 'Offline location cache', 'Route history']
    },
    {
      icon: FaSync,
      title: 'Remote Device Management',
      description: 'Complete remote control and management capabilities for authorized devices',
      details: ['Remote lock/unlock', 'Data wipe commands', 'App management', 'Settings control']
    }
  ];

//   const vipBenefits = [
//     { icon: FaHeadset, text: '24/7 Priority Support', desc: 'Dedicated support team with 15-minute response time' },
//     { icon: FaUnlock, text: 'Unlimited Device Unlocks', desc: 'No restrictions on number of devices or carriers' },
//     { icon: FaChartLine, text: 'Real-Time Analytics', desc: 'Advanced tracking analytics and reporting dashboard' },
//     { icon: FaShieldAlt, text: 'Enhanced Security Suite', desc: 'Additional security layers and monitoring' },
//     { icon: FaUsers, text: 'Multi-Device Management', desc: 'Manage up to 10 devices simultaneously' },
//     { icon: FaRocket, text: 'Early Feature Access', desc: 'Beta access to new features and tools' },
//     { icon: FaAward, text: 'Certified Solutions', desc: 'Industry-certified unlocking methods' },
//     { icon: FaSync, text: 'Automated Services', desc: 'Scheduled tracking and automated reports' }
//   ];

  const stats = [
    { number: '50,000+', label: 'Devices Unlocked' },
    { number: '98.7%', label: 'Success Rate' },
    { number: '150+', label: 'Countries Supported' },
    { number: '24/7', label: 'Support Availability' }
  ];

  const enterpriseClients = [
    { name: 'TechCorp', role: 'Enterprise Security' },
    { name: 'GlobalTel', role: 'Telecom Partner' },
    { name: 'SecureNet', role: 'Security Provider' },
    { name: 'MobileFirst', role: 'Service Partner' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Enhanced Navigation */}
      {/* <nav className="bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <IoMdPhonePortrait className="text-cyan-400 text-2xl" />
                <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-50"></div>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NetGuardian Solution
              </span>
            </motion.div>
            
            
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-8">
                {['Features'].map((item) => (
                    <motion.a
                    key={item}
                    whileHover={{ scale: 1.05, color: "#22d3ee" }}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                    >
                    {item}
                    </motion.a>
                ))}
                </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/login"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/vip"
                className="bg-cyan-500  hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
              >
                <FaCrown />
                VIP Access
              </motion.a>
            </div>
          </div>
        </div>
      </nav> */}
        <NavBar />
      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
                <FaAward className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Trusted by Enterprise Clients Worldwide</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">NetGuardian Solution</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Advanced mobile device management, tracking, and unlocking solutions.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="/backup"
                className="bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center gap-4 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-3">
                  {/* <FaCrown className="text-lg" /> */}
                  <span>BackUp Now</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-cyan-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-black/40 border-y border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h3 className="text-lg text-gray-400 mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {enterpriseClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
                >
                  <FaBuilding className="text-cyan-400 text-3xl mx-auto mb-3" />
                  <div className="text-white font-semibold">{client.name}</div>
                  <div className="text-cyan-300 text-sm">{client.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Enterprise-Grade Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of mobile device management tools designed for security-conscious organizations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="text-cyan-400 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-cyan-300">
                          <FaCheck className="text-cyan-400 text-xs" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced VIP Section */}
      {/* <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-amber-500/20 rounded-xl">
                    <FaCrown className="text-amber-400 text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">Enterprise VIP</h2>
                    <p className="text-cyan-300">Comprehensive access package</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Unlock the full potential of our platform with lifetime access to all enterprise features, 
                  priority support, and advanced security capabilities.
                </p>

                <div className="mb-8">
                  <div className="text-6xl font-bold text-white mb-2">$750</div>
                  <div className="text-amber-300 text-lg font-semibold">One-time payment • Lifetime access</div>
                  <div className="text-cyan-300 text-sm mt-2">Includes all future updates and feature releases</div>
                </div>

                <div className="space-y-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/vip"
                    className="w-full bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg shadow-cyan-500/25"
                  >
                    <FaCrown />
                    <span>Get Enterprise VIP Access</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">30-day money-back guarantee • Enterprise SLA included</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {vipBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
                  >
                    <benefit.icon className="text-amber-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-semibold mb-2">{benefit.text}</h4>
                    <p className="text-cyan-300 text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Mobile Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of enterprise clients who trust NetGuardian Solution with their mobile security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/backup"
                className="bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                Backup Now
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                Contact Sales
              </motion.a> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      {/* <footer className="bg-black/80 backdrop-blur-xl border-t border-cyan-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <IoMdPhonePortrait className="text-cyan-400 text-2xl" />
                <span className="text-white font-bold text-xl">NetGuardian Solution</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Enterprise-grade mobile device management and security solutions for modern organizations.
              </p>
              <div className="flex gap-4">
                {[FaTwitter, FaLinkedin, FaGithub].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, color: "#22d3ee" }}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Solutions",
                links: ["Device Unlocking", "Location Tracking", "Data Recovery", "Remote Management"]
              },
              {
                title: "Company",
                links: ["About", "Enterprise", "Careers", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Compliance"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          </div>
        </footer> */}
        <div className="pt-8 pb-8 bg-gray-800 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 NetGuardian Solution. All rights reserved. Enterprise-ready solutions.
          </p>
        </div>
    </div>
  );
};

export default LandingPage;