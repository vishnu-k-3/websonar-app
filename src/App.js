import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Hire from './Pages/Hire.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Clients from './Pages/Clientele.jsx'
import Careers from './Pages/Careers.jsx';
import Contact from './Pages/Contacts.jsx';
import Quote from './Pages/Quote.jsx';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path="/serices" element={<Services />}/>
        <Route path="/hire" element={<Hire />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/clients" element={<Clients />}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/quote" element={<Quote />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
