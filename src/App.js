import React from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Menu/Navbar'
import Home from './pages/Home'
import About_us from './pages/About_us'
import OnlineReg from "./pages/Onlinereg"
import Certificate from './pages/Certificate'
import Placements from './pages/Placements'
import Blog from './pages/Blog'
import Contact_us from './pages/Contact_us'
import Slider from './pages/Slider';
import Footer from './pages/Footer';
import ImageSlider from 'react-simple-image-slider';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
      
      <Route exact path='/home' element={<Home />}/>
      <Route exact path='/about' element={<About_us />}/>
      <Route exact path='/o_reg' element={<OnlineReg />}/>
      <Route exact path='/certificate' element={<Certificate />}/>
      <Route exact path='/placement' element={<Placements />}/>
      <Route exact path='/blog' element={<Blog />}/>
      <Route exact path='/contact' element={<Contact_us />}/>
      
      </Routes><br/><Footer/></Router>
    
    </>
  )
}

export default App






