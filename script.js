// script.js (in the root folder)
import { projects } from './data/ProjectData.js'; // Import the data from the 'data' folder

// script.js (in the root folder)
import { socialMediaLinks } from './data/SocialMediaData.js'; // Import social media data

import { skills } from './data/SkillsData.js';

const socialMediasContainer = document.querySelector('.social-medias'); // Select the container

socialMediaLinks.forEach((link) => {
  // Create anchor element
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

//FOOTER YEAR FUNCTION
document.getElementById('year').textContent = new Date().getFullYear();

const container = document.querySelector('.projects'); // Select the projects container

projects.forEach((project) => {
  // Create anchor element
  const anchor = document.createElement('a');
  anchor.setAttribute('href', project.href);
  anchor.setAttribute('target', '_blank');
  anchor.className = 'project-tile block hover:cursor-pointer';

  anchor.setAttribute('title', project.tooltip); // <--- This line adds the tooltip

  // Create inner div
  const div = document.createElement('div');
  div.className =
    'w-64 h-64 p-4 rounded-lg border border-gray-300 shadow-lg shadow-[rgba(117,61,89,0.62)] flex items-center justify-center'; // Fixed width and height for a square shape

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

// SKILL ICONS

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('skills-grid');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;
  const itemsPerPage = 6; // Show 4 skills at a time

  function renderSkills(index) {
    grid.innerHTML = ''; // Clear current skills
    const visibleSkills = skills.slice(index, index + itemsPerPage);

    visibleSkills.forEach((skill) => {
      const wrapper = document.createElement('div');
      wrapper.className =
        'relative flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:bg-violet-900 transition-colors duration-300 ease-in-out cursor-pointer w-32 h-40';

      // Skill Image
      const img = document.createElement('img');
      img.src = skill.src;
      img.alt = skill.alt;
      img.className = ' w-19 h-19 object-contain'; // Adjust icon size here

      // Skill Name
      const name = document.createElement('p');
      name.textContent = skill.name;
      name.className =
        'mt-3 text-sm font-semibold text-white text-center text-wrap break-words max-w-[80px] w-24 h-12 leading-tight';

      // Star Ratings
      const stars = document.createElement('div');
      stars.className = 'mt-1 text-purple-200';
      stars.innerHTML = '★'.repeat(skill.stars) + '☆'.repeat(5 - skill.stars); // Fill stars logic

      // Tooltip on click (name + stars)
      const tooltip = document.createElement('div');
      tooltip.className =
        'absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-300';
      tooltip.innerHTML = `<div>${skill.name}</div><div>${'★'.repeat(skill.stars)}</div>`;

      let isTooltipVisible = false;
      wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        isTooltipVisible = !isTooltipVisible;
        tooltip.style.opacity = isTooltipVisible ? '1' : '0';
        tooltip.style.pointerEvents = isTooltipVisible ? 'auto' : 'none';
      });

      document.addEventListener('click', () => {
        if (isTooltipVisible) {
          tooltip.style.opacity = '0';
          tooltip.style.pointerEvents = 'none';
          isTooltipVisible = false;
        }
      });

      wrapper.appendChild(img);
      wrapper.appendChild(name);
      wrapper.appendChild(stars);
      wrapper.appendChild(tooltip);
      grid.appendChild(wrapper);
    });
  }

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

  // Initial render
  renderSkills(currentIndex);

  //CLICK EVENT FOR BUTTONS

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
