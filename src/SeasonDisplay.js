import React from "react";

import "./SeasonDisplay.css";

const seasonConfig = {
  verano: {
    text: "Vamos a la playaaa!!",
    iconName: "massive sun icon"
  },
  invierno: {
    text: "Esta helado :c",
    iconName: "massive winter icon"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "verano" : "invierno";
  } else {
    return lat > 0 ? "invierno" : "verano";
  }
};

//Funtional component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
