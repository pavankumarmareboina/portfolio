import React from 'react'
import "./ProjectCard.css"
import SkillTag from '../SkillTag/SkillTag'
import projectLinkIcon from "../../../assets/HomePage/liveurlIcon.svg"
import temporaryIcon from "../../../assets/HomePage/TEMPIMG.png"


const ProjectCard = ({Img, title, para}) => {

  return (
    <div className='ProjectCardsContainer'>
        <div className="projectCardTop">
            <img src={temporaryIcon} alt="" />
        </div>
        <div className="projectCardMiddle">
            <h2>Welcome to my blog domain</h2>
            <p>I'm Victor Eke, an experienced frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.
                Lorem ipsum dolor sit.
            </p>

        </div>
        <div className="projectCardbtn">
            <SkillTag icon={projectLinkIcon} Text={"LIVE URL"} link={"www.google.com"}/>
        </div>
    </div>
  )
}

export default ProjectCard