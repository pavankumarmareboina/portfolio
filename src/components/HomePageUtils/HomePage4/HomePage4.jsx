import React from "react";
import MainTitle from "../../Atoms/MainTitle/MainTitle";
import "./Homepage4.css";
import ProjectCard from "../../Atoms/ProjectsCards/ProjectCard";

const HomePage4 = () => {
  return (
    <div className="HomePage4Container container">
      <MainTitle
        content={"Projects"}
        para={"these are my Projects, Take a look"}
      />
      <div className="HomePage4Cards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default HomePage4;
