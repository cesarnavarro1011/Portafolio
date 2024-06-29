'use client'

import { useState, useEffect } from 'react';
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa6";


const tools = [
  {
    name: 'Next.js',
    description: 'Next.js es un framework de React que permite la creación de aplicaciones web modernas y rápidas con renderizado del lado del servidor (SSR) y generación estática (SSG).',
    icon: 'https://example.com/nextjs-icon.png',
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS es un framework de CSS utilitario que proporciona clases predefinidas para construir interfaces de usuario de manera rápida y eficiente.',
    icon: 'https://example.com/tailwind-icon.png',
  },
  {
    name: 'React',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.',
    icon: 'https://example.com/react-icon.png',
  },
  {
    name: 'Node.js',
    description: 'Node.js es un entorno de ejecución de JavaScript que permite ejecutar código en el lado del servidor, ideal para construir aplicaciones web escalables.',
    icon: 'https://example.com/nodejs-icon.png',
  },
  {
    name: 'Vercel',
    description: 'Vercel es una plataforma de despliegue que facilita el hospedaje de aplicaciones web con un flujo de trabajo sencillo y eficiente.',
    icon: 'https://example.com/vercel-icon.png',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 7000); // Cambia de slide cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="text-center">
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">{tool.name}</h2>
              <p className="mt-2 text-gray-600">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length)}
          className="p-2 ml-2   shadow-md focus:outline-none"
        >
        <HiOutlineChevronLeft/>
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length)}
          className="p-2 mr-2  shadow-md focus:outline-none"
        >
        <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}
