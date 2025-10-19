import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaDownload, 
  FaEnvelope, 
  FaPrint, 
  FaShare,
  FaClock,
  FaShieldAlt,
  FaDatabase,
  FaCrown,
  FaMobile,
  FaArrowLeft,
  FaCopy
} from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';

const PaymentComplete = ({ paymentData = {} }) => {
  // Default data in case no props are passed
  const defaultPaymentData = {
    amount: 150,
    service: 'Premium Backup Service',
    paymentMethod: 'Bitcoin',
    transactionId: 'TX-7A83B2C9D4E5F6A7',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    status: 'Completed',
    walletAddress: 'bc1q3ha0xm39g58mcn7kkmsmll8jceapty83xfuwl7',
    serviceDuration: '1 Year',
    nextBilling: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
  };

  const data = { ...defaultPaymentData, ...paymentData };

  const serviceDetails = {
    'Premium Backup Service': {
      icon: FaDatabase,
      color: 'blue',
      features: ['1TB Cloud Storage', '30-Day Version History', '5 Devices', 'Automatic Backups']
    },
    'VIP Membership': {
      icon: FaCrown,
      color: 'amber',
      features: ['Unlimited Unlocks', 'Priority Support', 'Advanced Tracking', 'Multi-Device Management']
    }
  };

  const ServiceIcon = serviceDetails[data.service]?.icon || FaDatabase;
  const serviceColor = serviceDetails[data.service]?.color || 'blue';

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Payment Confirmation - ${data.service}`,
          text: `I've successfully completed payment of $${data.amount} for ${data.service}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <FaCheckCircle className="text-green-400 text-5xl" />
              <div className="absolute inset-0 bg-green-400 blur-sm opacity-20"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Payment Complete!</h1>
          <p className="text-slate-300 text-lg">Your transaction was successful</p>
        </motion.div>

        <div className="grid  gap-8">
          {/* Main Content */}
          <div className=" space-y-6">
            {/* Success Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-green-500/20 p-8"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-3 bg-${serviceColor}-500/10 border border-${serviceColor}-500/20 rounded-full px-6 py-3 mb-4`}>
                  <ServiceIcon className={`text-${serviceColor}-400`} />
                  <span className={`text-${serviceColor}-400 font-semibold`}>{data.service}</span>
                </div>
                <div className="text-6xl font-bold text-white mb-2">${data.amount}</div>
                <p className="text-slate-300">Amount Paid</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-4">Transaction Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transaction ID:</span>
                      <span className="text-white font-mono text-sm">{data.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Date & Time:</span>
                      <span className="text-white">{data.date} at {data.time}</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="text-slate-400">Payment Method:</span>
                      <span className="text-cyan-400">{data.paymentMethod}</span>
                    </div> */}
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-green-400 flex items-center gap-2">
                        <FaCheckCircle className="text-sm" />
                        {data.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-4">Service Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service Duration:</span>
                      <span className="text-white">{data.serviceDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Next Billing:</span>
                      <span className="text-cyan-400">{data.nextBilling}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Wallet Used:</span>
                      <span className="text-white text-sm font-mono truncate max-w-[120px]">
                        {data.walletAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-white font-semibold text-lg mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {(serviceDetails[data.service]?.features || []).map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                  >
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Next Steps */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6"
            >
              <h3 className="text-blue-400 font-semibold text-lg mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FaEnvelope className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Confirmation Email</h4>
                    <p className="text-blue-300 text-sm">You'll receive a detailed confirmation email within 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <FaDatabase className="text-green-400 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Service Activation</h4>
                    <p className="text-green-300 text-sm">Your service will be activated immediately and you'll receive setup instructions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <FaClock className="text-amber-400 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Support Available</h4>
                    <p className="text-amber-300 text-sm">Our support team is available 24/7 to help with setup</p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* Sidebar */}
          
        </div>

        {/* Security Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 pt-6 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <FaShieldAlt className="text-green-400" />
            <span>Payment secured with military-grade encryption • Transaction ID: {data.transactionId}</span>
          </div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-section,
          .print-section * {
            visibility: visible;
          }
          .print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

// Usage example with different services:
/*
// For Backup Service:
<PaymentComplete 
  paymentData={{
    amount: 220,
    service: 'Premium Backup Service',
    paymentMethod: 'Bitcoin',
    transactionId: 'TX-BACKUP-2024-001'
  }}
/>

// For VIP Service:
<PaymentComplete 
  paymentData={{
    amount: 750,
    service: 'VIP Membership',
    paymentMethod: 'Ethereum',
    transactionId: 'TX-VIP-2024-001'
  }}
/>
*/

export default PaymentComplete;