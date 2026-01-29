import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookMessenger, FaFile, FaMoneyBill } from "react-icons/fa";
import logo from '../assets/image.jpg'
import { CgMediaLive } from "react-icons/cg";
import { 
  FaMobile, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaTelegramPlane,
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
  FaClock,
  FaTelegram,
  FaTimes,
  FaBitcoin,
  FaEthereum,
  FaCopy,
  FaCheck
} from 'react-icons/fa';
import { RiVipDiamondFill, RiVipDiamondLine } from "react-icons/ri";
import { IoIosStats, IoMdPhonePortrait } from 'react-icons/io';
import { IoLogoWechat } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showEncryptionModal, setShowEncryptionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentCheck, setShowPaymentCheck] = useState(false);
  const [selectedPaymentAmount, setSelectedPaymentAmount] = useState(340); // 50% of $2500
  const [paymentMethod, setPaymentMethod] = useState('bitcoin');
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication on component mount
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/', { replace: true });
    }
  }, [navigate]);
  
  // Configurable amount - you can change this value
  const totalEncryptionCost = 5000;
  const amountPaid = 1200; // Example paid amount - you can update this

  const devices = [
    {
      id: 1,
      status: 'tracking',
      type: 'Number',
      lastSeen: '2 minutes ago',
      location: 'New York, NY',
      battery: 85,
      isLocked: false,
      imei: '(+1)810 334 0160'
    },
  ];

  const stats = [
    { label: 'WhatsApp', value: '999+', icon: FaWhatsapp, color: 'green' },
    { label: 'Telegram', value: '70', icon: FaTelegramPlane, color: 'cyan' },
    { label: 'Messanger', value: '999+', icon: FaFacebookMessenger, color: 'blue' },
    { label: 'WeChat', value: '30', icon: IoLogoWechat, color: 'green' },
    { label: 'All files', value: '999+', icon: FaFile, color: 'cyan' }
  ];

  

  const cryptoWallets = {
    bitcoin: 'bc1q3ha0xm39g58mcn7kkmsmll8jceapty83xfuwl7',
    ethereum: '0xe7D36c7D0b102C55030225A0CcDf3e69516A7326'
  };

  const handleStatClick = () => {
    setShowEncryptionModal(true);
  };

  const handleEncryptNow = () => {
    setShowEncryptionModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async () => {
    // Simulate payment processing
    setPaymentStatus('processing');
    await new Promise(resolve => setTimeout(resolve, 3000));
    setPaymentStatus('completed');
    
    // After payment completion, show success and close modal
    setTimeout(() => {
      setShowPaymentModal(false);
      setPaymentStatus('pending');
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
    alert('Wallet address copied to clipboard!');
  };

  const paymentPercentage = (amountPaid / totalEncryptionCost) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Header */}
      <header className=" bg-gradient-to-r from-white via-white to-blue-900 backdrop-blur-xl sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3">
              {/* <span className="text-white font-bold text-xl">DashBoard</span> */}
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <div className="relative">
                {/* <IoMdPhonePortrait className="text-cyan-400 text-2xl" />
                <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-50"></div> */}
              </div>
              <img className='w-20 h-20' src={logo}/>
              {/* <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NetGuardian Solution
              </span> */}
            </motion.div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <CgMediaLive className="text-green-400 text-xl hover:text-cyan-400 cursor-pointer transition-colors" />
                {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div> */}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
                <span className="text-white font-medium">Mattew Bower</span>
              </div>
              <LogoutButton />
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
          <p className="text-gray-400">Monitor and manage your connected device in real-time</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={handleStatClick}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
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
                        <div className={`p-3 rounded-lg bg-blue-500/10`}>
                          <FaMobile className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{device.type} • {device.imei}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                              {device.status}
                            </span>
                            <span className="text-gray-400 text-xs">{device.lastSeen}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Server Details</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: RiVipDiamondFill, label: 'Vip Active', color: 'amber', onClick: () => {} },
                  { icon: FaMoneyBill, label: 'Server Balance', color: 'green', onClick: () => setShowPaymentCheck(true) },
                  { icon: FaShieldAlt, label: 'Security 100%', color: 'amber', onClick: () => {} },
                  { icon: FaDatabase, label: 'Backup', color: 'purple', onClick: () => {} }
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.onClick}
                    onMouseEnter={action.onMouseEnter}
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

      {/* Encryption Required Modal */}
      <AnimatePresence>
        {showEncryptionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-cyan-400 text-2xl" />
                  <h2 className="text-2xl font-bold text-white">Server BackUp Required</h2>
                </div>
                <button
                  onClick={() => setShowEncryptionModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-300">
                  To access detailed analytics and advanced features, you need to backUpyour server infrastructure.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                  <h3 className="text-amber-400 font-semibold mb-2">Total BackUp Cost: $680</h3>
                  <p className="text-amber-300 text-sm">
                    One-time payment for lifetime server backUp and security features.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowEncryptionModal(false)}
                  className="flex-1 bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Later
                </button>
                <button
                  onClick={handleEncryptNow}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
                >
                  BackUp Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800/90   backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-cyan-400 text-2xl" />
                  <h2 className="text-2xl font-bold text-white">Server backUp Payment</h2>
                </div>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {paymentStatus === 'completed' ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <FaSync className="text-white text-2xl" />

                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Please Hold We are confirming your payment</h3>
                  <p className="text-gray-300 mb-6">
                    Your server backUp payment is being processed.
                  </p>
                  {/* <button
                    onClick={() => setShowPaymentModal(false)}
                    className="bg-cyan-500 text-white py-3 px-6 rounded-xl hover:bg-cyan-600 transition-colors"
                  >
                    Close
                  </button> */}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Payment Amount Selection */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Select Payment Amount</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { amount: 340, label: '50% Deposit', description: '$ - Start backUp process' },
                        { amount: 680, label: 'Full Payment', description: '$600 - Complete backUp' }
                      ].map((option) => (
                        <motion.button
                          key={option.amount}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPaymentAmount(option.amount)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            selectedPaymentAmount === option.amount
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="text-2xl font-bold text-white">${option.amount}</div>
                          <div className="text-slate-400 text-sm font-semibold">{option.label}</div>
                          <div className="text-slate-500 text-xs mt-1">{option.description}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Payment Method</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { method: 'bitcoin', icon: FaBitcoin, label: 'Bitcoin' },
                        { method: 'ethereum', icon: FaEthereum, label: 'Ethereum' }
                      ].map(({ method, icon: Icon, label }) => (
                        <motion.button
                          key={method}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setPaymentMethod(method)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            paymentMethod === method
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <Icon className={`text-2xl mb-2 ${
                            paymentMethod === method ? 'text-cyan-400' : 'text-slate-400'
                          }`} />
                          <div className="text-white text-sm">{label}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Payment Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                        <span className="text-slate-400">Amount to Pay:</span>
                        <span className="text-white font-mono text-xl">${selectedPaymentAmount} USD</span>
                      </div>

                      <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 text-sm">Wallet Address:</span>
                          <button
                            onClick={() => copyToClipboard(cryptoWallets[paymentMethod])}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <FaCopy className="text-sm" />
                            <span className="text-sm">Copy</span>
                          </button>
                        </div>
                        <div className="font-mono text-sm text-white break-all bg-black/50 p-2 rounded">
                          {cryptoWallets[paymentMethod]}
                        </div>
                      </div>

                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                        <h4 className="text-amber-400 font-semibold mb-2">Important:</h4>
                        <ul className="text-amber-300 text-sm space-y-1">
                          <li>• Send exactly ${selectedPaymentAmount} USD equivalent in {paymentMethod.toUpperCase()}</li>
                          <li>• Payment confirmation may take 10-30 minutes</li>
                          <li>• Contact support if you encounter any issues</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePaymentSubmit}
                    disabled={paymentStatus === 'processing'}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {paymentStatus === 'processing' ? (
                      <>
                        <FaSync className="animate-spin" />
                        <span>Processing Payment...</span>
                      </>
                    ) : (
                      <>
                        <FaShieldAlt />
                        <span>Confirm backUp Payment</span>
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Check Modal */}
      <AnimatePresence>
        {showPaymentCheck && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FaMoneyBill className="text-green-400 text-2xl" />
                  <h2 className="text-2xl font-bold text-white">Server Balance</h2>
                </div>
                <button
                  onClick={() => setShowPaymentCheck(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">${amountPaid}</div>
                  {/* <div className="text-3xl font-bold text-white mb-2">${amountPaid} / ${totalEncryptionCost}</div> */}
                  {/* <p className="text-gray-400">Total Paid vs Required</p> */}
                </div>

                {/* Progress Bar */}
                {/* <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-cyan-400">{paymentPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${paymentPercentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full relative"
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </div>
                </div> */}

                <div className="bg-white/5 rounded-xl p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Amount Paid:</span>
                      <span className="text-green-400">${amountPaid}</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="text-gray-400">Remaining:</span>
                      <span className="text-amber-400">${totalEncryptionCost - amountPaid}</span>
                    </div> */}
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={paymentPercentage >= 100 ? "text-green-400" : "text-amber-400"}>
                        {paymentPercentage >= 100 ? "Fully Paid" : "Partial Payment"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowPaymentCheck(false)}
                  className="w-full bg-cyan-500 text-white py-3 px-4 rounded-xl hover:bg-cyan-600 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;