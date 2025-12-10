import { useState, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import ProtectedRoute from './components/ProtectedRoute';
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage';
import VIPRegistration from './Pages/VIPRegistration';
import Verification from './Pages/Verification'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import NavBar from './components/NavBar'
import BackupPayment from './Pages/BackupPayment'
import PaymentComplete from './Pages/PaymentComplete'

function App() {
  const backgroundImage = ""; // Replace with your image URL
  const [count, setCount] = useState(0);

  // Clear authentication on new session
  useEffect(() => {
    // Clear any previous session data on app load
    if (!sessionStorage.getItem('sessionInitialized')) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      sessionStorage.setItem('sessionInitialized', 'true');
    }

    // Also clear on browser refresh if you want fresh session every time
    const handleBeforeUnload = () => {
      // Optional: clear session flag so next load is fresh
      sessionStorage.removeItem('sessionInitialized');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes - No authentication required */}
            <Route path="/" element={<Login />} />
            <Route path="/verification" element={<Verification />} />
            
            {/* Protected Routes - Require authentication */}
            <Route path="/home" element={
              <ProtectedRoute>
                <LandingPage backgroundImage={backgroundImage} />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard backgroundImage={backgroundImage} />
              </ProtectedRoute>
            } />
            
            <Route path="/vip" element={
              <ProtectedRoute>
                <VIPRegistration backgroundImage={backgroundImage} />
              </ProtectedRoute>
            } />
            
            <Route path="/backup" element={
              <ProtectedRoute>
                <BackupPayment backgroundImage={backgroundImage} />
              </ProtectedRoute>
            } />
            
            <Route path="/payment-complete" element={
              <ProtectedRoute>
                <PaymentComplete backgroundImage={backgroundImage} />
              </ProtectedRoute>
            } />
            
            {/* Catch-all route - redirect to appropriate page based on auth status */}
            <Route path="*" element={
              <Navigate to="/" replace />
            } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

// App.jsx
