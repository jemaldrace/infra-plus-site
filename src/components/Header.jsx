import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-brand-navy tracking-tight"
          onClick={closeMenu}
        >
          <img src="/logo.svg" alt="Infra+ logo" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-brand-teal transition ${isActive ? "text-brand-teal" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <NavLink
          to="/contact"
          className="hidden md:block bg-brand-teal text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
        >
          Schedule Consultation
        </NavLink>

        {/* Hamburger (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-brand-navy focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={closeMenu}
              className="block hover:text-brand-teal transition"
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block bg-brand-teal text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Schedule Consultation
          </NavLink>
        </div>
      )}
    </header>
  );
}
