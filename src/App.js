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
import Footer from './components/Footer';
import ContactUsPage from './Pages/ContactUsPage';
import ApplicationPage from './Pages/ApplicationPage';
import ValuesPage from './Pages/ValuesPage';
import DisclaimerPage from './Pages/DisclaimerPage';
import AboutUs from './Pages/AboutUsPage';
import NoContentPage from './Pages/NoContentPage';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';

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

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<main>
					<ScrollToTop />
					<SplashScreen>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/team" element={<TeamPage />} />
							<Route path="/aboutus" element={<AboutUs />} />
							<Route path="/services" element={<ServicesPage />} />
							<Route path="/services/bussiness_setup_in_india_and_registration" element={<BussinessSetup />} />
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
					</SplashScreen>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
