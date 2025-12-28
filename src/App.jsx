import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

// Simple placeholder for About to save space
const About = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-bold mb-6">About Us</h1>
    <p className="text-xl text-gray-400 leading-relaxed">
      We are building the UI infrastructure for the next generation of web applications. 
      Our mission is to provide clean, accessible, and performant interfaces.
    </p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<div className="p-20 text-center text-2xl">Contact Page Placeholder</div>} />
        <Route path="*" element={<div className="p-20 text-center text-red-400">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;