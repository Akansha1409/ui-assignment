import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* EXACT LOGO IMAGE */}
<Link to="/" className="flex items-center">
  {/* Adjust h-10 (height) if needed to fit your specific logo size */}
  <img src="/images/logo.png" alt="NFTme Logo" className="h-10 w-auto object-contain" />
</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-300">
          <Link to="/about" className="hover:text-white transition">About us</Link>
          <Link to="/pricing" className="hover:text-white transition">Pricing</Link> {/* Replaced Store */}
          <Link to="/contact" className="hover:text-white transition">Contact</Link> {/* Replaced Games */}
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full transition backdrop-blur-md">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Btn */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-gray-800 p-4 flex flex-col gap-4 text-white z-50">
          <Link to="/about">About us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <button className="bg-primary px-4 py-2 rounded-lg">Connect Wallet</button>
        </div>
      )}
    </nav>
  );
};

// Footer matches the screenshot layout
const Footer = () => (
  <footer className="relative bg-background pt-20 pb-10 border-t border-white/5 overflow-hidden">
     {/* Bottom purple glow */}
    <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
      <div className="text-2xl font-bold text-white tracking-widest">NFTme</div>
      
      <div className="flex gap-8 text-sm text-gray-400">
        <Link to="/" className="hover:text-white">Explore</Link>
        <Link to="/" className="hover:text-white">Marketplace</Link>
        <Link to="/" className="hover:text-white">Artists</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </div>

      <div className="flex gap-4">
        {[Instagram, Facebook, Twitter].map((Icon, i) => (
          <div key={i} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition cursor-pointer">
            <Icon size={14} />
          </div>
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-12 text-xs text-gray-600 flex flex-col md:flex-row justify-between text-center">
      <p>Privacy Policy | Copyright @ 2025. All Rights Reserved.</p>
      <p>Terms of service</p>
    </div>
  </footer>
);

export const Layout = () => (
  <div className="bg-background min-h-screen font-sans text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);