import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCrown, 
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
  FaUpload,
  FaCreativeCommonsRemix
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VIPRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentAmount, setPaymentAmount] = useState(375); // 50% of $750
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
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setPaymentStatus('completed');
    setIsProcessing(false);
    toast.success('Payment verified successfully!');
    
    // Move to success step after delay
    setTimeout(() => setCurrentStep(3), 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Address copied to clipboard!');
  };

  const steps = [
    { number: 1, title: 'VIP Details', status: currentStep >= 1 },
    { number: 2, title: 'Payment', status: currentStep >= 2 },
    { number: 3, title: 'Complete', status: currentStep >= 3 }
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
              <FaCrown className="text-amber-400 text-4xl" />
              {/* <div className="absolute inset-0 bg-amber-400 blur-sm opacity-50"></div> */}
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              VIP Membership
            </h1>
          </div>
          <p className="text-slate-300 text-lg">Enterprise-grade device tracking & unlocking</p>
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
            {/* Step 1: VIP Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">VIP Membership Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      'Premium Device Unlocking',
                      'Advanced Tracking Features',
                      'Priority 24/7 Support',
                      'Multi-Device Management',
                      'Enterprise Security',
                      'Regular Feature Updates'
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5"
                      >
                        <FaCheck className="text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/20 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-400 mb-2">$750</div>
                    <div className="text-slate-300">One-time lifetime payment</div>
                    <div className="text-sm text-slate-400 mt-2">50% deposit required to activate</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep(2)}
                  className="w-full bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
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
                  <div className="grid grid-cols-3   gap-4">
                    {[
                        {amount: 180, label: 'Minimum Deposit'},
                      { amount: 375, label: '50% Deposit' },
                      { amount: 750, label: 'Full Payment' }
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
{/* 
                    <div className="text-center p-4 bg-black/20 rounded-lg border border-dashed border-white/10">
                      <FaQrcode className="text-4xl text-white/50 mx-auto mb-2" />
                      <div className="text-slate-400 text-sm">Scan QR code with your wallet</div>
                    </div> */}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePaymentSubmit}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      <FaShieldAlt />
                      <span>Confirm Payment</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-2xl text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white">VIP Membership Activated!</h2>
                
                <p className="text-slate-300 text-lg">
                  Welcome to elite device management. Your VIP access has been successfully activated. You will be contacted with more information.
                </p>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 max-w-md mx-auto">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Payment Amount:</span>
                      <span className="text-white font-mono">${paymentAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-cyan-400">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">VIP Access:</span>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>

                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  Access VIP Dashboard
                </motion.button> */}
              </motion.div>

              // <motion.div
              // key="step3"
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // className="text-center space-y-6"
              // >
              // <div className="w-20 h-20 bg-cyan-500 shadow-inner rounded-full flex items-center justify-center mx-auto mb-4">
              //   <FaCreativeCommonsRemix className="text-2xl text-white" />
              // </div>

              // <h2 className="text-3xl font-bold text-white">VIP Membership is Being Processed!</h2>

              // <p className="text-slate-300 text-lg">
              //   Please Hold, we are confirming your payment.You will be contacted whe your payment is confirmed.
              // </p>

              // <div className="bg-white/5 rounded-xl p-6 border border-white/10 max-w-md mx-auto">
              //   <div className="space-y-3 text-left">
              //     <div className="flex justify-between">
              //       <span className="text-slate-400">Payment Amount:</span>
              //       <span className="text-white font-mono">${paymentAmount}</span>
              //     </div>
              //     {/* <div className="flex justify-between">
              //       <span className="text-slate-400">Status:</span>
              //       <span className="text-cyan-400">Completed</span>
              //     </div> */}
              //     <div className="flex justify-between">
              //       <span className="text-slate-400">VIP Access:</span>
              //       <span className="text-green-400">Processing...</span>
              //     </div>
              //   </div>
              // </div>

              // {/* <motion.button
              //   whileHover={{ scale: 1.02 }}
              //   whileTap={{ scale: 0.98 }}
              //   className="bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              // >
              //   Access VIP Dashboard
              // </motion.button> */}
              // </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VIPRegistration;