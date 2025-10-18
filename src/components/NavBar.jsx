import React from 'react'

import { motion } from 'framer-motion';
import logo from '../assets/image.jpg'

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

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-white via-white to-blue-700 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
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
            
            
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-8">
                {['Features'].map((item) => (
                    <motion.a
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-black/90 hover:text-black transition-colors font-medium"
                    >
                    {item}
                    </motion.a>
                ))}
                </div>
             
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
      </nav>
  )
}

export default NavBar
