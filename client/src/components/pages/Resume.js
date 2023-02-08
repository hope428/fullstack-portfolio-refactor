import React from "react";
import "../../styles/Resume.css";
import PDF from "../../assets/resumefile.pdf";

export default function Resume() {
  return (
    <div className="column">
      <h1>
        Click to View my
        <a className="highlight" href={PDF} target="_blank">
          {" "}
          Resume
        </a>
      </h1>

      <section className="container skill-container column">
        <h2>Front-end Skills</h2>
        <ul className="skill-list">
          <li className="skill-list-item">HTML</li>
          <li className="skill-list-item">CSS</li>
          <li className="skill-list-item">Javascript</li>
          <li className="skill-list-item">Bootstrap</li>
          <li className="skill-list-item">jQuery</li>
          <li className="skill-list-item">Handlebars</li>
          <li className="skill-list-item">React</li>
          <li className="skill-list-item">Responsive Web Development</li>
          <li className="skill-list-item">Webpack</li>
        </ul>
      </section>

      <section className="container skill-container column">
        <h2>Back-end Skills</h2>
        <ul className="skill-list">
          <li className="skill-list-item">Node.js</li>
          <li className="skill-list-item">Express.js</li>
          <li className="skill-list-item">MySQL</li>
          <li className="skill-list-item">Sequelize</li>
          <li className="skill-list-item">MongoDB</li>
          <li className="skill-list-item">Mongoose</li>
        </ul>
      </section>

      <section className="container skill-container column">
        <h2>Other Skills</h2>
        <ul className="skill-list">
          <li className="skill-list-item">Git</li>
          <li className="skill-list-item">Github</li>
          <li className="skill-list-item">Command line</li>
          <li className="skill-list-item">MVC</li>
          <li className="skill-list-item">Heroku</li>
          <li className="skill-list-item">RESTful API</li>
        </ul>
      </section>
    </div>
  );
}
