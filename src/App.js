import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeContextProvider } from './theme/ThemeContext';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import CourseDetails from './pages/CourseDetails';
import Certifications from './pages/Certifications';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';

// import Certifications from './pages/Certifications';
import Enterprise from './pages/Enterprise';



function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
console.log("Home updated");