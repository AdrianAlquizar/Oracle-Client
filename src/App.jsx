import React from 'react'; 
import Header from './components/Header';  
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchPage from './pages/LaunchPage';    

const App = () => {
  return (
    <Router> {/* Add Router here */}
      <div> 
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
        <Hero/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
