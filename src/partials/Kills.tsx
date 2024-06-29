'use client'
import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si';
import Kills from '@/utils/Carrusel';

const icons = [
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiVercel />, name: 'Vercel' },
  
  // Agrega más íconos si es necesario
];

export default function InfiniteCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startPos = 0;
    let animationFrameId: number;

    const animate = () => {
      startPos -= 1;
      carousel.style.transform = `translateX(${startPos}px)`;

      if (startPos <= -carousel.clientWidth) {
        startPos = 0;
        carousel.appendChild(carousel.firstElementChild as HTMLElement);
      }
    //   carousel.style.transform = `translateX(${startPos}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="overflow-hidden max-w-7xl mt-40 w-full flex flex-col items-center justify-center">
        <h3 className="text-2xl">Kills</h3>
      <div ref={carouselRef} className="flex mt-10">
        {icons.concat(icons).map((item, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-32 m-2 flex items-center justify-center text-6xl">
          {item.icon}
        </div>
        ))}
      </div>
    </div>
  );
}
