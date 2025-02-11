/* global AOS */

// script.js (in the root folder)
import { projects } from './data/ProjectData.js'; // Import the data from the 'data' folder
import { socialMediaLinks } from './data/SocialMediaData.js'; // Import social media data

/**
 * Selects the social media container and appends social media links as anchor elements with icons.
 */
const socialMediasContainer = document.querySelector('.social-medias'); // Select the container

socialMediaLinks.forEach((link) => {
  /**
   * Creates and appends an anchor element for each social media link.
   * @param {Object} link - The social media link object containing the href, target, title, and iconClass.
   * @param {string} link.href - The URL of the social media link.
   * @param {string} link.target - The target attribute for the anchor.
   * @param {string} link.title - The title attribute for the anchor.
   * @param {string} link.iconClass - The class name for the icon to be displayed.
   */
  const anchor = document.createElement('a');
  anchor.setAttribute('href', link.href);
  anchor.setAttribute('target', link.target);
  anchor.setAttribute('title', link.title);

  // Create icon element
  const icon = document.createElement('i');
  icon.className = `${link.iconClass} ri-2x hover:text-gray-400 transition ease-in-out duration-300`;

  // Append icon to anchor
  anchor.appendChild(icon);

  // Append anchor to the container
  socialMediasContainer.appendChild(anchor);
});

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
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalLink = document.getElementById('modalLink');

  projects.forEach((project) => {
    const anchor = document.createElement('a');
    anchor.className =
      'block w-64 h-52 border border-purple-500 rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 cursor-pointer';
    anchor.addEventListener('click', () => {
      modalImg.src = project.imgSrc;
      modalImg.alt = project.alt;
      modalTitle.textContent = project.title;
      modalDesc.textContent = project.tooltip;
      modalLink.href = project.href;
      modal.showModal();
    });

    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.alt;
    img.className = 'w-full h-full object-cover';

    anchor.appendChild(img);
    container.appendChild(anchor);
  });
});
