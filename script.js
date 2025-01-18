// script.js (in the root folder)
import { projects } from './data/data.js'; // Import the data from the 'data' folder

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
    "p-4 rounded-lg border border-gray-300 shadow-lg shadow-[rgba(117,61,89,0.62)]";

  // Create img element
  const img = document.createElement("img");
  img.setAttribute("src", project.imgSrc);
  img.setAttribute("alt", project.alt);
  img.className =
    "h-48 w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105";

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

document.getElementById("year").textContent = new Date().getFullYear();