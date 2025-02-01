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
const container = document.querySelector('.projects'); // Select the projects container

projects.forEach((project) => {
  /**
   * Creates and appends a project tile for each project.
   * @param {Object} project - The project object containing the href, imgSrc, alt and title.
   * @param {string} project.href - The URL to the project's page.
   * @param {string} project.imgSrc - The source URL of the project image.
   * @param {string} project.alt - The alt text for the project image.
   * @param {string} project.title - The title of the project.
   */
  const anchor = document.createElement('a');
  anchor.setAttribute('href', project.href);
  anchor.setAttribute('target', '_blank');
  anchor.className = 'project-tile block hover:cursor-pointer';

  // Create inner div
  const div = document.createElement('div');
  div.className =
    'w-64 h-52 border rounded-lg  flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500'; // Fixed width and height for a square shape

  // Create img element
  const img = document.createElement('img');
  img.setAttribute('src', project.imgSrc);
  img.setAttribute('alt', project.alt);
  img.className = 'w-full h-full object-cover rounded-t-lg'; // Ensure the image fits the container

  // Append img to div
  div.appendChild(img);

  // Create title paragraph
  const title = document.createElement('p');
  title.textContent = project.title;
  title.className =
    'font-light text-center p-2 hover:text-gray-300 transition-transform duration-500';

  // Append div and title to anchor
  anchor.appendChild(div);
  div.appendChild(title);

  // Append anchor to container
  container.appendChild(anchor);
});

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
  loop: true,
  loopCount: Infinity,
  fadeOut: false,
  startDelay: 1000,
  showCursor: false,
});
