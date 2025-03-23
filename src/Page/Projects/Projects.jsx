import React from 'react'
import "./Projects.css"
import MainTitle from '../../components/Atoms/MainTitle/MainTitle'
import ProjectCard from '../../components/Atoms/ProjectsCards/ProjectCard'

const Projects = () => {
  return (
    <div className='container projectMainContainer'>
        <MainTitle content={"Projects"} para={"I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source."}/>
        <div className='ProjectsArea'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default Projects 