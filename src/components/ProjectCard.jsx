import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
        className="project-card-img"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="project-card-overlay">
          <Link
            to={gitUrl} // Use 'to' instead of 'href' for react-router
            className="project-card-link"
          >
            <CodeBracketIcon className="project-card-icon" />
          </Link>
          <Link
            to={previewUrl} // Use 'to' for the preview URL
            className="project-card-link"
          >
            <EyeIcon className="project-card-icon" />
          </Link>
        </div>
      </div>
      <div className="project-card-content">
        {" "}
        {/* Added missing space after bg-[#181818] */}
        <h5 className="project-card-title">{title}</h5>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
