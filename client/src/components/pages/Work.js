import React from "react";
import Project from "../Project"
import projectsData from "../../data/projectsData"
import "../../styles/Project.css"

export default function Work(){
    return (
        <>
        <h1>My Projects</h1>
        <div className="container">
            {projectsData.map((item, index) => {
               return <Project key={index} item={item}/>
            })}
        </div>
        </>
    )
}