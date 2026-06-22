'use client';

import { useState } from 'react';
import Image from 'next/image';

const PRIMARY_COLOR = '#0066FF';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const features: Feature[] = [
  {
    title: 'Rápido y Eficiente',
    description: 'Optimizado para ofrecer el mejor rendimiento en cualquier dispositivo.',
    icon: '⚡',
  },
  {
    title: 'Seguro y Confiable',
    description: 'Tus datos están protegidos con los estándares más altos de la industria.',
    icon: '🔒',
  },
  {
    title: 'Fácil de Usar',
    description: 'Interfaz intuitiva diseñada para una experiencia de usuario sin fricciones.',
    icon: '😊',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'CEO, TechStart',
    content: 'Producto XYZ transformó completamente nuestra forma de trabajar. Altamente recomendado.',
    avatar: 'https://placehold.co/100x100/png?text=AG',
  },
  {
    name: 'Carlos Mendez',
    role: 'Director de Marketing',
    content: 'La mejor inversión que hemos hecho este año. El soporte es excepcional.',
    avatar: 'https://placehold.co/100x100/png?text=CM',
  },
  {
    name: 'Lucía Fernández',
    role: 'Desarrolladora Senior',
    content: 'Integración sencilla y documentación clara. Un producto realmente bien pensado.',
    avatar: 'https://placehold.co/100x100/png?text=LF',
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6