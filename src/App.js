// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import QueryPage from './pages/QueryPage';
import Footer from './components/Footer';
import ContactUsPage from './pages/ContactUsPage';
import ApplicationPage from './pages/ApplicationPage';
import ValuesPage from './pages/ValuesPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AboutUs from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/careers" element={<ApplicationPage />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
