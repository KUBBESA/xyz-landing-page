```tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// ========== Components ==========

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#features', label: 'Características' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#cta', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray