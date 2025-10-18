import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBitcoin, 
  FaEthereum, 
  FaClock, 
  FaCheck, 
  FaExclamationTriangle,
  FaCopy,
  FaQrcode,
  FaDownload,
  FaShieldAlt,
  FaArrowLeft,
  FaWallet,
  FaExchangeAlt
} from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';
import NavBar from '../components/NavBar';

const PaymentTracking = () => {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [copied, setCopied] = useState(false);

  const cryptoWallets = {
    bitcoin: {
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      amount: '0.0125 BTC',
      usd: '$750',
      icon: FaBitcoin,
      color: 'orange'
    },
    ethereum: {
      address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      amount: '2.15 ETH',
      usd: '$750',
      icon: FaEthereum,
      color: 'purple'
    },
    usdt: {
      address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      amount: '750 USDT',
      usd: '$750',
      icon: FaShieldAlt,
      color: 'green'
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paymentSteps = [
    { step: 1, title: 'Select Crypto', status: 'completed' },
    { step: 2, title: 'Make Payment', status: paymentStatus === 'pending' ? 'current' : 'completed' },
    { step: 3, title: 'Confirmation', status: paymentStatus === 'completed' ? 'current' : 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Header
      <header className="bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <IoMdPhonePortrait className="text-cyan-400 text-2xl" />
              <span className="text-white font-bold text-xl">SecureTrack Pro</span>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/dashboard"
              className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <FaArrowLeft />
              Back to Dashboard
            </motion.a>
          </div>
        </div>
      </header> */}
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Payment Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">VIP Payment Tracking</h1>
          <p className="text-gray-400 text-lg">Complete your VIP membership payment using cryptocurrency</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-8">
            {paymentSteps.map((step, index) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    step.status === 'completed' 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : step.status === 'current'
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'border-gray-600 text-gray-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <FaCheck className="text-sm" />
                    ) : (
                      <span>{step.step}</span>
                    )}
                  </div>
                  <span className={`text-sm mt-2 ${
                    step.status === 'completed' ? 'text-green-400' :
                    step.status === 'current' ? 'text-cyan-400' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < paymentSteps.length - 1 && (
                  <div className={`w-16 h-0.5 ${
                    paymentSteps[index + 1].status !== 'pending' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timer Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FaClock className="text-red-400 text-2xl" />
                  <div>
                    <h3 className="text-white font-semibold">Payment Timer</h3>
                    <p className="text-red-300 text-sm">Complete payment within the time limit</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-red-400">{formatTime(timeLeft)}</div>
                  <div className="text-red-300 text-sm">Time remaining</div>
                </div>
              </div>
            </motion.div>

            {/* Crypto Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Select Payment Method</h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(cryptoWallets).map(([key, crypto]) => {
                  const Icon = crypto.icon;
                  return (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCrypto(key)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        selectedCrypto === key
                          ? `border-${crypto.color}-500 bg-${crypto.color}-500/10`
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`text-2xl mb-3 ${
                        selectedCrypto === key ? `text-${crypto.color}-400` : 'text-gray-400'
                      }`} />
                      <div className="text-white font-semibold capitalize">{key}</div>
                      <div className="text-gray-400 text-sm mt-1">{crypto.amount}</div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Payment Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
              
              <div className="space-y-6">
                {/* Amount */}
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-xl">
                  <span className="text-gray-400">Total Amount:</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{cryptoWallets[selectedCrypto].usd}</div>
                    <div className="text-cyan-400 font-mono">{cryptoWallets[selectedCrypto].amount}</div>
                  </div>
                </div>

                {/* Wallet Address */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Wallet Address:</span>
                    <button
                      onClick={() => copyToClipboard(cryptoWallets[selectedCrypto].address)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FaCopy className="text-sm" />
                      {copied ? 'Copied!' : 'Copy Address'}
                    </button>
                  </div>
                  <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="font-mono text-sm text-white break-all">
                      {cryptoWallets[selectedCrypto].address}
                    </div>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="text-center p-8 bg-black/20 rounded-xl border border-dashed border-white/10">
                  <FaQrcode className="text-4xl text-white/30 mx-auto mb-4" />
                  <div className="text-gray-400 text-sm">Scan QR code with your wallet app</div>
                  <div className="text-cyan-400 text-xs mt-2">(QR Code Display)</div>
                </div>

                {/* Instructions */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                  <h4 className="text-cyan-400 font-semibold mb-2">Payment Instructions:</h4>
                  <ul className="text-cyan-300 text-sm space-y-1">
                    <li>• Send exact amount: {cryptoWallets[selectedCrypto].amount}</li>
                    <li>• Network fees are your responsibility</li>
                    <li>• Payment confirmation may take 10-30 minutes</li>
                    <li>• Contact support if payment fails</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>VIP Membership:</span>
                  <span>$750.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Lifetime Access:</span>
                  <span className="text-green-400">Included</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Priority Support:</span>
                  <span className="text-green-400">Included</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-cyan-400">$750.00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Status Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Payment Status</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <FaClock className="text-amber-400 text-xl" />
                  <div>
                    <div className="text-white font-semibold">Pending Confirmation</div>
                    <div className="text-amber-300 text-sm">Waiting for blockchain confirmation</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Transactions Found:</span>
                    <span className="text-cyan-400">0/1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Confirmations:</span>
                    <span className="text-cyan-400">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last Checked:</span>
                    <span className="text-cyan-400">Just now</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <FaExchangeAlt />
                  Check Status
                </motion.button>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-400 text-sm mb-4">
                Having trouble with your payment? Our support team is here to help.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <FaWallet />
                  <span>Verify wallet address</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <FaShieldAlt />
                  <span>Security check</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <FaDownload />
                  <span>Transaction help</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTracking;