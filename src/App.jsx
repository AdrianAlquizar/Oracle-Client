
import Header from './components/Header';  
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchPage from './pages/LaunchPage';    
import FeatureSection from './components/common/feature-sections';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <FeatureSection />
  </>
);

const App = () => {
  return (
    <Router> 
      <div> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
