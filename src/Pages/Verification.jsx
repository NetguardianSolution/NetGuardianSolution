import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';

export default function Verification() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Static PIN code - you can change this
  const VALID_PIN = "0507";

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move to next input if a number was entered
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 4);
    if (/^\d+$/.test(paste)) {
      const newPin = paste.split("");
      setPin(newPin);
      newPin.forEach((digit, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = digit;
        }
      });
      
      // Focus the last input after paste
      if (inputRefs.current[3]) {
        inputRefs.current[3].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const enteredPin = pin.join("");
    
    if (enteredPin === VALID_PIN) {
      // Store authentication data in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({
        name: 'Mattew Bower',
        email: 'mattew@example.com',
        pin: enteredPin,
        verifiedAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      }));
      
      toast.success("Verification successful! Redirecting...");
      
      // Reset form
      setPin(["", "", "", ""]);
      
      // Redirect to dashboard after delay
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 1500);
      
    } else {
      toast.error("Invalid PIN. Please try again.");
      setPin(["", "", "", ""]);
      
      // Clear input values
      inputRefs.current.forEach(input => {
        if (input) input.value = '';
      });
      
      // Focus first input
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
    
    setIsLoading(false);
  };

  // Check if all PIN digits are filled
  const isPinComplete = pin.every(digit => digit !== "");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Secure Verification</h2>
          <p className="text-gray-400 mt-2">Enter your 4-digit PIN to access the dashboard</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* PIN Input Section */}
            <div className="space-y-4">
              <label className="block text-gray-300 text-sm font-medium">
                Enter 4-digit PIN
              </label>
              
              <div className="flex gap-3" onPaste={handlePaste}>
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="password"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full h-16 text-center text-2xl font-bold bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="•"
                    disabled={isLoading}
                  />
                ))}
              </div>
              
             
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isPinComplete || isLoading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" />
                    <span className="text-lg">Verifying...</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg">Verify & Access Dashboard</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </div>
              
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-hover:duration-1000 duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}