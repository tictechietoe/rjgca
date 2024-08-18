// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import ServicesPage from './Pages/ServicesPage';
import QueryPage from './Pages/QueryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUsPage from './Pages/ContactUsPage';
import ApplicationPage from './Pages/ApplicationPage';
import ValuesPage from './Pages/ValuesPage';
import DisclaimerPage from './Pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
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
