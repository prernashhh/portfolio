import React from 'react';
import './ProjectCard.css';

function ProjectCard({ link, h3, p, techStack }) {
  // Generate a consistent background color based on project name
  const getColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Create a soft pastel color
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 85%)`;
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{ backgroundColor: getColor(h3) }}
    >
      <div className="project-content">
        <h3>{h3}</h3>
        {techStack && <div className="tech-stack">{techStack}</div>}
        <p>{p}</p>
        <div className="view-project">View Project →</div>
      </div>
    </a>
  );
}

export default ProjectCard;
