import React from 'react'
import "./HomePage6.css"
import InputCard from '../../Atoms/InputCard/InputCard'
import SkillTag from '../../Atoms/SkillTag/SkillTag'

const HomePage6 = () => {
  return (
    <div className='HomePage6Container container'>
        <div className='HomePage6UpperBlock'>
            <h2>Send Me A Message!</h2>
            <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        </div>
        <div className='HomePage6LowerBlock'>
            <div className="HomePage6Lowerone">
                <InputCard/>
                <InputCard/>
            </div>
            <div className="HomePage6Lowertwo"></div>
            <div className="HomePage6Lowerthird">
                <InputCard/>
                
            </div>
            <div className="HomePage6Lowerfourth">
                <SkillTag Text={"Submit"}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage6