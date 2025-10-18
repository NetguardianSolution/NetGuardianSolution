import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaUser, FaLock, FaArrowRight, FaSpinner, FaUserShield } from 'react-icons/fa';
import PinInput from '../components/PinInput';

export default function Verification() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState()

  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // move to next input if a number was entered
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
      newPin.forEach((_, i) => {
        if (inputRefs.current[i]) inputRefs.current[i].value = newPin[i];
      });
    }
  };
  
//   const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    
    // const success = login(email, password);
    // if (!success) {
    //   setError('Invalid email or password. Please check your credentials and try again.');
    // }
    // const user = [pin]
    // setUser(email , password)
    // console.log(user)





    // setPin()
    if (pin.every((digit) => digit !== "")) {
        const userpIN = pin.join("")
        const pinn = "0507"
        if (userpIN === pinn){
            console.log("Entered PIN:", pin.join(""));
            console.log(userpIN)
            setPin(["", "", "", ""]);
        toast.success("Verification successful")
        navigate('/Home');
        setIsLoading(false);
          }else if (userpIN !== pinn){

            toast.error(`Invalid Pin Please try again`)
            setPin(["", "", "", ""]);
            setIsLoading(false);
        }
        // setEmail("")
        // setPassword("")
        
    }
  };

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-bluw-500 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer />

      <div className="max-w-md w-full space-y-8">
        
        

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            

          <div className="flex gap-3" onPaste={handlePaste}>
        {pin.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-full px-4 py-4 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
        ))}
      </div>


            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" />
                    <span className="text-lg">Verifying...</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg">Verify</span>
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
    </>
  );
}