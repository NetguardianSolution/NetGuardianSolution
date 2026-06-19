import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

const Soon = () => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white/5 backdrop-blur-xl text-center rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300'>
            <p className='text-gray-400 text-4xl flex items-center'>GIVE US A SEC <span className='text-yellow-500'> <FiAlertTriangle/></span> </p>
            <p className='text-gray-400 text-4xl'>we are confirming your verification request...</p>
        </div>
      </div>
    </>
  )
}

export default Soon
