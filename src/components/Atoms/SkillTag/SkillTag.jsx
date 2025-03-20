import React from 'react'
import './SkillTag.css'

const SkillTag = ({icon, Text}) => {
  return (
    <div className="skillTagContainer">
        <div className="SkillTagLeftIcon">
            <img src={icon} alt={icon} />
        </div>
        <div className="SkillTagRightText">
            <p>{Text}</p>
        </div>
    </div>
  )
}

export default SkillTag