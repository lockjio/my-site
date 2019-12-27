import React from "react"

const Educ = props => (
  <div className="card">
    <div className="flex-container">
      <div className="flex">
        <h5>{props.title}</h5>
        <p className="gray-text subtitle">{props.subtitle}</p>
      </div>
      <a href={props.schoolLink} rel="noopener noreferrer" target="_BLANK">
        <img
          src={props.logo}
          className="background-image"
          alt={props.logoAlt}
          aria-hidden="true"
        />
      </a>
    </div>
    <p>
      {props.firstSection} (
      <a href={props.firstLink} rel="noopener noreferrer" target="_BLANK">
        {props.firstLinked}
      </a>
      ) {props.secondSection}
      <a href={props.secondLink} rel="noopener noreferrer" target="_BLANK">
        {props.secondLinked}
      </a>
      {props.thirdSection}
    </p>
    <p>
      <strong>Relevant Coursework</strong>: {props.coursework}
    </p>
  </div>
)

export default Educ
