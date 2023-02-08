import React from "react";
import bioImg from "../../assets/IMG_0597.JPG";
import "../../styles/About.css";

export default function About() {
  return (
    <div className="container column about">
      <h1>About Me</h1>
      <img className="bioImg" src={bioImg} alt="Leon outside smiling"/>
      <p>
        Hey, my name is Leon Forsythe. I am a full-stack software developer
        passionate about solving problems and making cool user experiences. I hold a certificate in Full-Stack Development from the
        University of Pennsylvania and an Associates of Liberal Sciences from the Community College of Allegheny County.
      </p>
      <p>Reach out to me at <span className="email">lvforsythe95@gmail.com</span></p>
      <span>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-node"></i>
      </span>
    </div>
  );
}
