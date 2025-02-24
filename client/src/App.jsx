//import React from 'react'
import { Route,Routes } from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from '@stripe/react-stripe-js'
import BuyCredit from "./pages/BuyCredit"
import Home from "./pages/Home"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import { ToastContainer } from 'react-toastify';
const stripePromise=loadStripe(import.meta.env.STRIPE_PUBLISHABLE_KEY)


const App = () => {
  const {showLogin}=useContext(AppContext);
  return (
    <Elements stripe={stripePromise}>
      <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right"/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredit/>}/>
        
      </Routes>
      <Footer/>
    </div>
    </Elements>
  )
}

export default App