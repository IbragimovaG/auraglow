import './App.css';
import React, { useEffect } from "react";
import Home from './pages/Home.js'
import OurStory from './pages/OurStory.js';
import Products from './pages/Products.js';
import VirtualMirror from './pages/VirtualMirror.js';
import Navbar from'./components/Navbar.js'
import Rewievs from './pages/Rewievs.js';
import Footer from './pages/Footer.js';
import Aos from 'aos';
function App() {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <div className="App xl:container mx-auto  ">
      <Navbar/>
      <Home/>
      <OurStory/>
      <Products/>
      <Rewievs/>
      <VirtualMirror/>
      <Footer/>
    </div>
  );
}

export default App;
