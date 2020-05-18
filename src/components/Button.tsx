import React from "react"

const Button = (props: {
  link: string
  links: string
  title: string
  titles: string
}) => {
  if (props.links)
    return (
      <div className="buttons">
        <a
          href={props.link}
          rel="noopener noreferrer"
          target="_BLANK"
          className="btn btn-sm"
        >
          {props.title}
        </a>
        <a
          href={props.links}
          rel="noopener noreferrer"
          target="_BLANK"
          className="btn btn-sm"
        >
          {props.titles}
        </a>
      </div>
    )
  else
    return (
      <div className="buttons">
        <a
          href={props.link}
          rel="noopener noreferrer"
          target="_BLANK"
          className="btn btn-sm"
        >
          {props.title}
        </a>
      </div>
    )
}

export default Button