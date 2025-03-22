// import React from "react";
// import './ToggleExpandCard.css'
// import plus from "../../../assets/HomePage/Plus.svg"
// import close from "../../../assets/HomePage/Close.svg"

// const ToggleExpandCard = () => {

//     const OnClickHandle = ()=>{

//     }

//   return (
//     <div className="ToggleExpandCardContainer">
//       <div className="ToggleExpandCardUpper">
//         <div className="ToggleExpandCardLeft">
//           <p>Lorem, ipsum dolor sit amet </p>
//         </div>
//         <div className="ToggleExpandCardRight">
//             <img src={close} alt={close} />
//         </div>
//       </div>
//       <div className="ToggleExpandCardLower">
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit odio soluta rem asperiores quas doloribus enim vel. Ratione dolorum neque vitae quod, veniam pariatur!</p>
//       </div>
//     </div>
//   );
// };

// export default ToggleExpandCard;


import React, { useState } from "react";
import "./ToggleExpandCard.css";
import plus from "../../../assets/HomePage/Plus.svg";

const ToggleExpandCard = ({questions, answers}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const OnClickHandle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ToggleExpandCardContainer">
      <div className="ToggleExpandCardUpper" onClick={OnClickHandle}>
        <div className="ToggleExpandCardLeft">
          <p>{questions}</p>
        </div>
        <div className="ToggleExpandCardRight">
          <img
            src={plus}
            alt="toggle icon"
            className={isExpanded ? "rotated" : ""}
          />
        </div>
      </div>
      <div className={`ToggleExpandCardLower ${isExpanded ? "open" : ""}`}>
        <p>
          {answers}
        </p>
      </div>
    </div>
  );
};

export default ToggleExpandCard;

