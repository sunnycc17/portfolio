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

document.getElementById("year").textContent = new Date().getFullYear();

const container = document.querySelector(".projects"); // Select the projects container

projects.forEach((project) => {
  // Create anchor element
  const anchor = document.createElement("a");
  anchor.setAttribute("href", project.href);
  anchor.setAttribute("target", "_blank");
  anchor.className = "project-tile block hover:cursor-pointer";

  anchor.setAttribute("title", project.tooltip); // <--- This line adds the tooltip

  // Create inner div
  const div = document.createElement("div");
  div.className =
    "w-64 h-64 p-4 rounded-lg border border-gray-300 shadow-lg shadow-[rgba(117,61,89,0.62)] flex items-center justify-center"; // Fixed width and height for a square shape

  // Create img element
  const img = document.createElement("img");
  img.setAttribute("src", project.imgSrc);
  img.setAttribute("alt", project.alt);
  img.className =
    "w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"; // Ensure the image fits the container

  // Append img to div
  div.appendChild(img);

  // Create title paragraph
  const title = document.createElement("p");
  title.textContent = project.title;
  title.className =
    "font-light text-center mt-2 hover:text-gray-300 transition-transform duration-500";

  // Append div and title to anchor
  anchor.appendChild(div);
  anchor.appendChild(title);

  // Append anchor to container
  container.appendChild(anchor);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skills-container");

  // Create a grid container
  const grid = document.createElement("div");
  grid.className = "grid grid-cols-2 sm:grid-cols-4 gap-4";

  // Add skill icons dynamically
  skills.forEach((skill) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center justify-center p-2 border border-gray-200 rounded-lg";

    const img = document.createElement("img");
    img.src = skill.src;
    img.alt = skill.alt;
    img.className = "w-16 h-16"; // Adjust size here

    wrapper.appendChild(img);
    grid.appendChild(wrapper);
  });

  container.appendChild(grid);
});