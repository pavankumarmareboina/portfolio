import React from "react";
import "./About.css";
import AboutProfile from "../../components/Atoms/AboutProfile/AboutProfile";
import MainTitle from "../../components/Atoms/MainTitle/MainTitle";
import cookingImg from "../../assets/HomePage/aboutCraking.png";
import SkillTag from "../../components/Atoms/SkillTag/SkillTag";
import htmlIcon from "../../assets/HomePage/SkillIcon/html.svg";
import cssIcon from "../../assets/HomePage/SkillIcon/css.svg";
import jsIcon from "../../assets/HomePage/SkillIcon/javascript.svg";
import bootstrapIcon from "../../assets/HomePage/SkillIcon/bootstrap.svg";
import reactIcon from "../../assets/HomePage/SkillIcon/react.svg";
import figmaIcon from "../../assets/HomePage/SkillIcon/figma.svg";
import githubIcon from "../../assets/HomePage/SkillIcon/Github.svg";
import pythonIcon from "../../assets/HomePage/SkillIcon/python.svg";
import photoshopIcon from "../../assets/HomePage/SkillIcon/photoshop.svg";
import premiereProIcon from "../../assets/HomePage/SkillIcon/premierePro.svg";
import javaIcon from "../../assets/HomePage/javaIcon.svg";

const SkillsData = [
  { id: 1, icon: htmlIcon, text: "HTML" },
  { id: 2, icon: cssIcon, text: "CSS" },
  { id: 3, icon: jsIcon, text: "JAVASCRIPT" },
  { id: 4, icon: reactIcon, text: "REACT" },
  { id: 5, icon: bootstrapIcon, text: "BOOTSTRAP" },
  { id: 7, icon: githubIcon, text: "GITHUB" },
  { id: 8, icon: pythonIcon, text: "PYTHON" },
  { id: 6, icon: figmaIcon, text: "FIGMA" },
  { id: 10, icon: premiereProIcon, text: "PREMIERE PRO" },
  { id: 11, icon: javaIcon, text: "JAVA" },
  { id: 9, icon: photoshopIcon, text: "PHOTOSHOP" },
];

const About = () => {
  return (
    <div className="container AboutContainer">
      <AboutProfile />
      <div className="AboutSecondSection">
        <MainTitle
          content={"Currently on the Menu!"}
          para={
            "I'm juggling the final touches on some of my own projects, but I made time this week to dive into the TruthLens Website. It was an intense 2-months sprint of coding and teamwork"
          }
        />
        <img src={cookingImg} alt={cookingImg} />
        <p>A shot of my teammate and I'm working on TrutLens Website</p>
      </div>
      <div className="AboutThirdSection">
        <MainTitle
          content={"Skills"}
          para={
            "The tools, technologies, and gadgets I rely on daily—though my toolkit is always evolving!"
          }
        />
        <div className="AboutThirdSectionTags">
          {SkillsData.map((skills) => (
            <SkillTag key={skills.id} icon={skills.icon} Text={skills.text} />
          ))}
        </div>
      </div>       
    </div>
  );
};
export default About;
