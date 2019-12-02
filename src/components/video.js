import React from "react";
import vid from "./vid/ice.mp4";


const video = vid;

export function BackgroundVideo () {

    return (
      <video loop autoPlay id="myVideo">
        <source src={video} type="video/mp4"/>
      Your browser does not support HTML5 video.
     </video>
    );

}