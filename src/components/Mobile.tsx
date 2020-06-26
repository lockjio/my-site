import React from "react"

const Mobile = (props: {
  vid: string
  vidAlt: string
  vidBackup: string
  vidBackupAlt: string
}) => {
  return (
    <div className="mobile mobile-screenshot">
      <div className="side">
        <div className="screen">
          <video autoPlay loop muted playsInline>
            <source
              autoPlay
              loop
              muted
              playsInline
              src={props.vid}
              alt={props.vidAlt}
              type='video/webm; codecs="vp8, vorbis"'
            />
            <source
              autoPlay
              loop
              muted
              playsInline
              src={props.vidBackup}
              alt={props.vidBackupAlt}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
      <div className="line" />
      <div className="header" />
      <div className="volume-button" />
      <div className="power-button" />
    </div>
  )
}

export default Mobile
