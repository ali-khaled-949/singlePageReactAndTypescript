import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
