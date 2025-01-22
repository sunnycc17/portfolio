/* global AOS */

// script.js (in the root folder)
import { projects } from './data/ProjectData.js'; // Import the data from the 'data' folder
import { socialMediaLinks } from './data/SocialMediaData.js'; // Import social media data
import { skills } from './data/SkillsData.js';

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
    'w-64 h-64 p-4 rounded-lg border border-gray-300 shadow-lg shadow-black  flex items-center justify-center'; // Fixed width and height for a square shape

  // Create img element
  const img = document.createElement('img');
  img.setAttribute('src', project.imgSrc);
  img.setAttribute('alt', project.alt);
  img.className =
    'w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105'; // Ensure the image fits the container

  // Append img to div
  div.appendChild(img);

  // Create title paragraph
  const title = document.createElement('p');
  title.textContent = project.title;
  title.className =
    'font-light text-center mt-2 hover:text-gray-300 transition-transform duration-500';

  // Append div and title to anchor
  anchor.appendChild(div);
  anchor.appendChild(title);

  // Append anchor to container
  container.appendChild(anchor);
});

/**
 * Renders skills in the skills grid with pagination support (next/previous).
 */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('skills-grid');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const dotsContainer = document.getElementById('pagination-dots');

  let currentIndex = 0;
  const itemsPerPage = 6; // Show 6 skills at a time
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  /**
   * Renders a set of skills based on the current index and items per page.
   * @param {number} index - The index to start rendering skills from.
   */
  function renderSkills(index) {
    grid.innerHTML = ''; // Clear current skills
    const visibleSkills = skills.slice(index, index + itemsPerPage);

    visibleSkills.forEach((skill) => {
      /**
       * Creates and appends a skill element with its icon, name, and rating.
       * @param {Object} skill - The skill object containing src, alt, name, and stars.
       * @param {string} skill.src - The source URL of the skill icon.
       * @param {string} skill.alt - The alt text for the skill icon.
       * @param {string} skill.name - The name of the skill.
       * @param {number} skill.stars - The rating stars for the skill.
       */
      const wrapper = document.createElement('div');
      wrapper.className =
        'relative flex flex-col items-center p-1 border border-gray-200 rounded-lg hover:bg-violet-900 transition-colors duration-300 ease-in-out w-20 h-20 aspect-square';

      // Skill Image
      const img = document.createElement('img');
      img.src = skill.src;
      img.alt = skill.alt;
      img.className = ' w-10 h-10 object-contain aspect-square'; // Adjust icon size herea

      // Skill Name
      const name = document.createElement('p');
      name.textContent = skill.name;
      name.className =
        'text-xs font-semibold text-white text-center text-wrap break-words max-w-[80px] w-15 leading-tight';

      // Star Ratings
      const stars = document.createElement('div');
      stars.className = 'text-sm text-purple-200';
      stars.innerHTML = '★'.repeat(skill.stars) + '☆'.repeat(5 - skill.stars); // Fill stars logic

      wrapper.appendChild(img);
      wrapper.appendChild(name);
      wrapper.appendChild(stars);
      grid.appendChild(wrapper);
    });

    updatePaginationDots(index / itemsPerPage);
  }

  /**
   * Updates the current skill set based on the carousel direction (next or previous).
   * @param {string} direction - The direction to update the carousel ('next' or 'prev').
   */
  function updateCarousel(direction) {
    const maxIndex = skills.length - itemsPerPage;
    if (direction === 'next') {
      currentIndex =
        currentIndex + itemsPerPage > maxIndex
          ? 0
          : currentIndex + itemsPerPage;
    } else {
      currentIndex =
        currentIndex - itemsPerPage < 0
          ? maxIndex
          : currentIndex - itemsPerPage;
    }
    renderSkills(currentIndex);
  }

  function updatePaginationDots(activeIndex) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('div');
      dot.className = `h-3 w-3 rounded-full cursor-pointer ${
        i === activeIndex ? 'bg-purple-400' : 'bg-gray-500'
      } transition duration-300`;

      dot.addEventListener('click', () => {
        currentIndex = i * itemsPerPage;
        renderSkills(currentIndex);
      });

      dotsContainer.appendChild(dot);
    }
  }

  // Initial render
  renderSkills(currentIndex);

  /**
   * Adds click event listeners for the carousel buttons (next and prev).
   */
  nextBtn.addEventListener('click', () => {
    updateCarousel('next');
    nextBtn.classList.add('bg-sky-400');

    setTimeout(() => {
      nextBtn.classList.remove('bg-sky-400');
    }, 300);
  });
  prevBtn.addEventListener('click', () => {
    updateCarousel('prev');
    prevBtn.classList.add('bg-sky-400');

    setTimeout(() => {
      prevBtn.classList.remove('bg-sky-400');
    }, 300);
  });
});

AOS.init({
  debug: true, // Show AOS debug logs in the console
  duration: 1000, // Animation duration (ms)
  delay: 200, // Delay before animation starts
  easing: 'ease-in-out', // Type of easing
  once: false, // Should animation happen only once?
  mirror: false, // Should elements animate when scrolling back up?
  anchorPlacement: 'top-bottom', // Where animation triggers
});
