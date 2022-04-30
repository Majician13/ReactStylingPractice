//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const morning = "Good Morning";
const morningStyle = {
  color: "red"
};
const afternoon = "Good Afternoon";
const afternoonStyle = {
  color: "green"
};
const evening = "Good Evening";
const eveningStyle = {
  color: "blue"
};

const date = new Date();

if (date.getHours() >= 0 && date.getHours() <= 12) {
  timeOfDay = morning;
  timeOfDayStyle = morningStyle;
} else if (date.getHours() > 12 && date.getHours() < 18) {
  timeOfDay = afternoon;
  timeOfDayStyle = afternoonStyle;
} else if (date.getHours() >= 18 && date.getHours() < 24) {
  timeOfDay = evening;
  timeOfDayStyle = eveningStyle;
}

ReactDOM.render(
  <h1 className="heading" style={timeOfDayStyle}>
    {timeOfDay}
  </h1>,
  document.getElementById("root")
);
