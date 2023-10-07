import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des Pages
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error404.jsx';

import './styles/index.css';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product/:id" element={<Product />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Home />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
