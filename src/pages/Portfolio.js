import React from "react";
import "../CSS/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Stock Wizard",
      description: "This project was created using HTML, CSS, JavaScript, DayJS, ChartJS, Local Storage, Polygon API and News API.",
      githubLink: "https://github.com/dylanadams98/stock-wizard",
    },
    {
      title: "Visual Vault",
      description: "Team project to create our very first full stack application.",
      githubLink: "https://github.com/AMillsy/Visual-Vault",
    },
    {
      title: "Squiz Game",
      description: "A simple quiz game.",
      githubLink: "https://github.com/Hasan0412/Squiz-Game",
    },
    {
      title: "README.md Generator",
      description: "This tool generates a formatted readme document.",
      githubLink: "https://github.com/yourusername/project4",
    },
    {
      title: "Weather Dashboard",
      description: "A website designed to check the weather in any given city over a 5 day period.",
      githubLink: "https://github.com/Hasan0412/Weather-Dashboard",
    },
    {
      title: "Just Another Text Editor (PWA)",
      description: "A Text editor website.",
      githubLink: "https://github.com/Hasan0412/text-editor-main",
    },
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
          {/* Add other project details and links here */}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
