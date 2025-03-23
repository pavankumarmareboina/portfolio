import React from 'react'
import "./InputCard.css"

const InputCard = ({title}) => {
  return (
    <div className='InputCardContainer'>
        <div className='InputCardTitle'>
            <p>{title}</p>
        </div>
        <div className='InputCardInput'>
            <input type="text" placeholder='Type here'/>
        </div>
    </div>
  )
}

export default InputCard