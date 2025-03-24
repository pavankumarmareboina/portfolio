import React, { useState } from "react";
import "./HomePage6.css";
import InputCard from "../../Atoms/InputCard/InputCard";
import icon from "../../../assets/HomePage/sendsvg.svg"

const HomePage6 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="HomePage6Container container">
              <div className='HomePage6UpperBlock'>
             <h2>Send Me A Message!</h2>
             <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
             </div>
      <div className="HomePage6LowerBlock">
        <div className="HomePage6Lowerone">
          <InputCard title={"Full Name"} />
          <InputCard title={"Email"} />
        </div>
        <div className="HomePage6Lowertwo">
          <div className="p-4 text-white rounded-lg w-96 radioOptions">
            <h2 className=" HomePage6Lowertitle">Why are you contacting us?</h2>
            <div className="space-y-2 radioOptionSub">
              {[
                "Web Development",
                "App Development",
                "Freelance",
                "Others",
              ].map((option) => (
                <label key={option} className="HomePage6LowerOptionsub">
                  <input
                    type="checkbox"
                    name="contactReason"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="inputcheckbox"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="HomePage6Lowerthird">
          <div className="InputCardContainer InputCardContainerCustom">
            <div className="InputCardTitle">
              <p>Your Message</p>
            </div>
            <div className="InputCardInput">
              <input type="text" placeholder="Type here" />
            </div>
          </div>
        </div>
        <div className="HomePage6Lowerfourth">
          <div className="skillTagContainer ">
            <div className="SkillTagLeftIcon">
              <img src={icon} alt={icon} />
            </div>
            <div className="SkillTagRightText">
              <p>
                <a href="">Submit</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage6;
