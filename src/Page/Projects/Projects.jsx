import React from 'react'
import "./Projects.css"
import MainTitle from '../../components/Atoms/MainTitle/MainTitle'
import ProjectCard from '../../components/Atoms/ProjectsCards/ProjectCard'
import ProjectData from "../../components/Data/ProjectsData.json";

const Projects = () => {
  return (
    <div className='container projectMainContainer'>
        <MainTitle content={"Projects"} para={"I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source."}/>
        <div className='ProjectsArea'>
        {ProjectData.map((project, index) => (
          <ProjectCard
            key={index}
            Img={project.ProjectImg}
            title={project.ProjectName}
            para={project.Description}
            Link={project.LiveUrl}
          />
        ))}
        </div>
    </div>
  )
}

export default Projects 