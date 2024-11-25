'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { menus } from '@/data/menus';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const controls = useAnimation();

  const handleSetActiveMenu = (menuIndex: number) => {
    document
      .getElementById(menus[menuIndex].id)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute('data-index') || '',
            10
          );
          setActiveMenu(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.setAttribute('data-index', index.toString());
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    controls.start('animate');
  }, [activeMenu]);

  return (
    <nav className='fixed z-30 bottom-0 flex justify-around w-full max-w-md bg-white border-t border-t-maroon-dark/20 px-3 py-4 rounded-lg shadow-lg'>
      {menus.map((menu, index) => (
        <button
          key={menu.name}
          onClick={() => handleSetActiveMenu(index)}
          className={`w-full flex flex-col items-center gap-2 relative`}
        >
          {index == 0 && (
            <motion.div
              initial={{ x: 0 }}
              animate={controls}
              variants={{
                animate: {
                  x: `${activeMenu * 100}%`,
                  transition: { duration: 0.5, type: 'spring' },
                },
              }}
              className='absolute w-full h-[120%] -top-1 bg-maroon-dark rounded-md -z-10'
            />
          )}
          {activeMenu == index ? (
            <menu.icon.fill
              width={20}
              height={20}
              className='fill-none text-white'
            />
          ) : (
            <menu.icon.line
              width={20}
              height={20}
              className='fill-none text-gray/70'
            />
          )}
          <span
            className={`text-xs ${
              activeMenu == index ? 'text-white' : 'text-gray/70'
            }`}
          >
            {menu.name}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
