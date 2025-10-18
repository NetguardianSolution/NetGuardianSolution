import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaUser, FaLock, FaArrowRight, FaSpinner, FaUserShield } from 'react-icons/fa';
import PinInput from '../components/PinInput';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState()
  const navigate = useNavigate()
  
//   const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const username = "Mattew"
    const pass = "welcome1234"

    await new Promise(resolve => setTimeout(resolve, 4000));
    
    
    // const success = login(email, password);
    // if (!success) {
    //   setError('Invalid email or password. Please check your credentials and try again.');
    // }
    if(userName == username && password == pass){

        const user = [userName, password]
        // setUser(email , password)
        console.log(user)
        setUserName("")
        setPassword("")
        toast.success("LogIn successful")
        setIsLoading(false);
        navigate('/Verification');
    }
  };

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-bluw-500 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer />

      <div className="max-w-md w-full space-y-8">
        
        

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
                <FaUser className="text-cyan-400 text-sm" />
                <span>User Name</span>
              </label>
              <div className="relative">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="userName"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-4 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your username"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-slate-400 text-lg" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
                <FaLock className="text-cyan-400 text-sm" />
                <span>Password</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400 text-lg" />
                </div>
              </div>
            </div>

{/* <PinInput /> */}


            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" />
                    <span className="text-lg">Signing In...</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg">Sign Up</span>
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