/* global AOS */

lucide.createIcons();

// script.js (in the root folder)
import { projects } from './data/ProjectData.js'; // Import the data from the 'data' folder

/**
 * Sets the current year in the footer element.
 */
document.getElementById('year').textContent = new Date().getFullYear();

/**
 * Selects the projects container and appends project tiles as anchor elements.
 */

//  ANIMATE ON SCROLL SETTINGS
AOS.init({
  debug: true, // Show AOS debug logs in the console
  duration: 1000, // Animation duration (ms)
  delay: 200, // Delay before animation starts
  easing: 'ease-in-out', // Type of easing
  once: false, // Should animation happen only once?
  mirror: false, // Should elements animate when scrolling back up?
  anchorPlacement: 'top-bottom', // Where animation triggers
});

//HERO SECTION TYPED SETTINGS
// eslint-disable-next-line no-unused-vars, no-undef
var typed = new Typed('#element', {
  strings: ['A Front-End Developer.'],
  typeSpeed: 50,
  loop: false,
  loopCount: Infinity,
  fadeOut: false,
  startDelay: 1000,
  showCursor: false,
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projects');

  projects.forEach((project) => {
    // Card wrapper
    const card = document.createElement('div');
    card.className = `
      group bg-[#1f1f24] text-white rounded-xl overflow-hidden
      shadow-[0_0_12px_rgba(255,255,255,0.04)]
      hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
      transition-all duration-300
      w-full sm:max-w-sm md:max-w-md lg:max-w-none
    `;

    // Project image
    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.alt;
    img.className = `
      w-full h-48 sm:h-52 md:h-60 lg:h-64 object-cover
      transition-transform duration-500
      group-hover:scale-105 group-hover:opacity-80
    `;

    // Content section
    const content = document.createElement('div');
    content.className = 'p-5 flex flex-col min-h-[200px]';

    // Title
    const title = document.createElement('h3');
    title.textContent = project.title;
    title.className = 'text-2xl font-semibold mb-2';

    // Description
    const desc = document.createElement('p');
    desc.textContent = project.tooltip;
    desc.className = 'text-white/70 text-sm mb-6 line-clamp-3';

    // Button
    const button = document.createElement('a');
    button.href = project.href;
    button.target = '_blank';
    button.textContent = 'View Live';
    button.className = `
      mt-auto self-start inline-block px-5 py-2
      bg-white text-black font-medium rounded-full
      hover:bg-purple-400 hover:text-white
      transition duration-300
    `;

    // Build card
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(button);

    card.appendChild(img);
    card.appendChild(content);
    container.appendChild(card);
  });
});
