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
import Footer from './components/Footer';
import ContactUsPage from './pages/ContactUsPage';
import ApplicationPage from './pages/ApplicationPage';
import ValuesPage from './pages/ValuesPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AboutUs from './pages/AboutUsPage';
import NoContentPage from './pages/NoContentPage';

import BussinessSetup from './services/BussinessSetup';
import Accounting from './services/Accounting';
import RegulatoryCompliance from './services/RegulatoryCompliance';
import CorporateAdvisory from './services/CorporateAdvisory';
import FemaAdvisory from './services/FemaAdvisory';
import TrustCooperativeSociety from './services/TrustCooperativeSociety';
import LoanSyndication from './services/LoanSyndication';
import AuditAssurance from './services/AuditAssurance';
import Secretarial from './services/Secretarial';
import CmaProjections from './services/CmaProjections';
import CfoServices from './services/CfoServices';

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
            <Route path="/services/bussiness_setup_in_india_&_registration" element={<BussinessSetup />} />
            <Route path="/services/accounting_and_business_support_services" element={<Accounting />} />
            <Route path="/services/regulatory_compliance_and_advisory" element={<RegulatoryCompliance />} />
            <Route path="/services/corporate_advisory" element={<CorporateAdvisory />} />
            <Route path="/services/fema_advisory" element={<FemaAdvisory />} />
            <Route path="/services/societies_trust_and_cooperative_society_regulations_and_advisory" element={<TrustCooperativeSociety />} />
            <Route path="/services/audit_and_assurance" element={<AuditAssurance />} />
            <Route path="/services/loan_syndication_services" element={<LoanSyndication />} />
            <Route path="/services/secretarial_services" element={<Secretarial />} />
            <Route path="/services/cma_projections" element={<CmaProjections />} />
            <Route path="/services/cfo_services" element={<CfoServices />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/careers" element={<ApplicationPage />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/*" element={<NoContentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
