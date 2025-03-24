import React from "react";
import "./ProjectCard.css";
import SkillTag from "../SkillTag/SkillTag";
import projectLinkIcon from "../../../assets/HomePage/liveurlIcon.svg";
import temporaryIcon from "../../../assets/HomePage/TEMPIMG.png";

const ProjectCard = ({ Img, title, para, Link }) => {
  return (
    <div className="ProjectCardsContainer">
      <div className="projectCardTop">
        <img src={Img} alt="" />
      </div>
      <div className="projectCardMiddle">
        <h2>{title}</h2>
        <p>
          {para}
        </p>
      </div>
      <div className="projectCardbtn">
        <SkillTag
          icon={projectLinkIcon}
          Text={"LIVE URL"}
          link={Link}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
