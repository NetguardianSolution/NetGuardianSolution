import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage';
import VIPRegistration from './Pages/VIPRegistration';
import Verification from './Pages/Verification'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import NavBar from './components/NavBar'
import BackupPayment from './Pages/BackupPayment'
import PaymentComplete from './Pages/PaymentComplete'



function App() {
  const backgroundImage = ""; // Replace with your image URL


  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Verification" element={<Verification />} />
        </Routes>
      </Router> */}
      {/* <Login /> */}
      {/* <Verification /> */}
      <Router>
      <div className="App">
      
        <Routes>

          <Route path="/Home" element={<LandingPage backgroundImage={backgroundImage} />} />
          <Route path="/dashboard" element={<Dashboard backgroundImage={backgroundImage} />} />
          <Route path="/vip" element={<VIPRegistration backgroundImage={backgroundImage} />} />
          {/* <Route path="/backup" element={<BackupPayment backgroundImage={backgroundImage} />} /> */}
          <Route path="/backup" element={<PaymentComplete backgroundImage={backgroundImage} />} />
          <Route path="/" element={<Login />} />
          <Route path="/Verification" element={<Verification />} />
          {/* Add your other routes for login and verification */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
