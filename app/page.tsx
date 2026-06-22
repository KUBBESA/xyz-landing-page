```tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Producto XYZ</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#0066FF] transition-colors font-medium">
                Características
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0066FF] transition-colors font-medium">
                Testimonios
              </a>
              <a
                href="#cta"
                className="bg-[#0066FF] text-white px-5 py-2.5 rounded-lg hover:bg-[#0052CC] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Comenzar ahora
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
             