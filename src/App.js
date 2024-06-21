// src/App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Team from './components/Team';
import Services from './components/Services';
import Query from './components/Query';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/query" element={<Query />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
