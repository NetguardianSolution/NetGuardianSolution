import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaDatabase, 
  FaShieldAlt, 
  FaBitcoin, 
  FaEthereum,
  FaCheck, 
  FaClock,
  FaLock,
  FaQrcode,
  FaCopy,
  FaArrowRight,
  FaSpinner,
  FaDownload,
  FaHistory,
  FaSync,
  FaMobile
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BackupPayment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentAmount, setPaymentAmount] = useState(150); // 50% of $220
  const [paymentMethod, setPaymentMethod] = useState('bitcoin');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // Static crypto wallet addresses
  const cryptoWallets = {
    bitcoin: 'bc1q3ha0xm39g58mcn7kkmsmll8jceapty83xfuwl7',
    ethereum: '0xe7D36c7D0b102C55030225A0CcDf3e69516A7326'
  };

  // Timer countdown
  useEffect(() => {
    if (currentStep === 2 && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setPaymentStatus('completed');
    setIsProcessing(false);
    toast.success('Backup payment verified successfully!');
    
    // Move to success step after delay
    setTimeout(() => setCurrentStep(3), 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Address copied to clipboard!');
  };

  const steps = [
    { number: 1, title: 'Backup Details', status: currentStep >= 1 },
    { number: 2, title: 'Payment', status: currentStep >= 2 },
    { number: 3, title: 'Complete', status: currentStep >= 3 }
  ];

  const backupFeatures = [
    'Complete Device Data Backup',
    'Secure Cloud Storage (1TB)',
    'Automatic Daily Backups',
    'Cross-Platform Compatibility',
    'Encrypted Data Transfer',
    '30-Day Version History',
    'Quick Data Restoration',
    'Multi-Device Support'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-8 px-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <FaDatabase className="text-blue-400 text-4xl" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Premium Backup Service
            </h1>
          </div>
          <p className="text-slate-300 text-lg">Secure cloud backup for all your device data</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    step.status 
                      ? 'bg-cyan-500 border-cyan-500 text-white' 
                      : 'border-slate-600 text-slate-400'
                  }`}>
                    {step.status ? (
                      <FaCheck className="text-sm" />
                    ) : (
                      <span>{step.number}</span>
                    )}
                  </div>
                  <span className={`text-sm mt-2 ${
                    step.status ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ${
                    steps[index + 1].status ? 'bg-cyan-500' : 'bg-slate-600'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
          <AnimatePresence mode="wait">
            {/* Step 1: Backup Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Premium Backup Features</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {backupFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                      >
                        <FaCheck className="text-blue-400 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Storage Details */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <FaDownload className="text-blue-400 text-2xl mx-auto mb-2" />
                    <div className="text-white font-bold">1TB Storage</div>
                    <div className="text-blue-300 text-sm">Secure Cloud</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <FaHistory className="text-green-400 text-2xl mx-auto mb-2" />
                    <div className="text-white font-bold">30 Days</div>
                    <div className="text-green-300 text-sm">Version History</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <FaMobile className="text-purple-400 text-2xl mx-auto mb-2" />
                    <div className="text-white font-bold">5 Devices</div>
                    <div className="text-purple-300 text-sm">Multi-Device</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">$150</div>
                    <div className="text-slate-300">One-time annual payment</div>
                    {/* <div className="text-sm text-slate-400 mt-2">50% deposit required to activate service</div> */}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep(2)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Continue to Payment</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Payment Timer */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-3 text-red-400">
                    <FaClock />
                    <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                    <span>Time remaining to complete payment</span>
                  </div>
                </div>

                {/* Payment Amount Selection */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Payment Amount</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      // { amount: 110, label: '50% Deposit' },
                      { amount: 150, label: 'Full Payment' }
                    ].map((option) => (
                      <motion.button
                        key={option.amount}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPaymentAmount(option.amount)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentAmount === option.amount
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="text-2xl font-bold text-white">${option.amount}</div>
                        <div className="text-slate-400 text-sm">{option.label}</div>
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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Payment Details</h3>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <FaLock className="text-sm" />
                      <span className="text-sm">Secure</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-slate-400">Amount:</span>
                      <span className="text-white font-mono">${paymentAmount} USD</span>
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
                      <div className="font-mono text-sm text-white break-all">
                        {cryptoWallets[paymentMethod]}
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">Service Activation:</h4>
                      <ul className="text-blue-300 text-sm space-y-1">
                        <li>• Backup service activates immediately after payment confirmation</li>
                        <li>• You'll receive setup instructions via email</li>
                        <li>• 24/7 support available for setup assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePaymentSubmit}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      <FaDatabase />
                      <span>Activate Backup Service</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {currentStep === 3 && (
              // <motion.div
              //   key="step3"
              //   initial={{ opacity: 0, scale: 0.9 }}
              //   animate={{ opacity: 1, scale: 1 }}
              //   className="text-center space-y-6"
              // >
              //   <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              //     <FaCheck className="text-2xl text-white" />
              //   </div>
                
              //   <h2 className="text-3xl font-bold text-white">Backup Service Activated!</h2>
                
              //   <p className="text-slate-300 text-lg">
              //     Your premium backup service has been successfully activated. You will receive setup instructions and login details shortly.
              //   </p>

              //   <div className="bg-white/5 rounded-xl p-6 border border-white/10 max-w-md mx-auto">
              //     <div className="space-y-3 text-left">
              //       <div className="flex justify-between">
              //         <span className="text-slate-400">Payment Amount:</span>
              //         <span className="text-white font-mono">${paymentAmount}</span>
              //       </div>
              //       <div className="flex justify-between">
              //         <span className="text-slate-400">Service:</span>
              //         <span className="text-blue-400">Premium Backup</span>
              //       </div>
              //       <div className="flex justify-between">
              //         <span className="text-slate-400">Status:</span>
              //         <span className="text-green-400">Active</span>
              //       </div>
              //       <div className="flex justify-between">
              //         <span className="text-slate-400">Duration:</span>
              //         <span className="text-cyan-400">1 Year</span>
              //       </div>
              //     </div>
              //   </div>

              //   {/* <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              //     <motion.button
              //       whileHover={{ scale: 1.02 }}
              //       whileTap={{ scale: 0.98 }}
              //       className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-blue-500/20"
              //     >
              //       Setup Guide
              //     </motion.button>
              //     <motion.button
              //       whileHover={{ scale: 1.02 }}
              //       whileTap={{ scale: 0.98 }}
              //       className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-cyan-500/20"
              //     >
              //       Contact Support
              //     </motion.button>
              //   </div> */}
              // </motion.div>

              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-2xl text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white">Backup Service Payment Is Being Confirmed</h2>
                
                <p className="text-slate-300 text-lg">
                  Please Hold. You Will Be Confirmed Shortly.
                </p>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 max-w-md mx-auto">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Payment Amount:</span>
                      <span className="text-white font-mono">${paymentAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service:</span>
                      <span className="text-blue-400">Premium Backup</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-yellow-400">Processing</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-cyan-400">1 Year</span>
                    </div>
                  </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-blue-500/20"
                  >
                    Setup Guide
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-cyan-500/20"
                  >
                    Contact Support
                  </motion.button>
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BackupPayment;