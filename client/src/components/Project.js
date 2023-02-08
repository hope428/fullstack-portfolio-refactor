import React from "react";
import "../styles/Project.css";

export default function Project({ item }) {
  return (
    <div className="project">
      <h2>Scroll Here!</h2>
      <img src={item.imgSrc} alt="preview of project" className="project-img" />
      <div className="project-info">
        <h1 className="project-title">{item.title}</h1>
        <span className="technologies">{item.technologies.join(" | ")}</span>
        <p>{item.description}</p>
        <span className="links">
          <a target="_blank" href={item.repo}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href={item.deployed}>
            <i class="fa-solid fa-rocket"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
