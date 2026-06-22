'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Características', href: '#features' },
    { name: 'Testimonios', href: '#testimonials' },
  ]

  const features = [
    {
      title: 'Rápido y Eficiente',
      description: 'Optimizado para ofrecer el mejor rendimiento en cualquier dispositivo.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Seguro y Confiable',
      description: 'Tus datos están protegidos con los estándares más altos de la industria.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Fácil de Usar',
      description: 'Interfaz intuitiva diseñada para que empieces en minutos.',
      icon: (
        <svg className="w-6 h-6"