import React from 'react'; 
import Header from './components/Header';  
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
      </div>
    </Router>
  );
};

export default App;
