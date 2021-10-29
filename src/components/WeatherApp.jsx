import React from "react";

function Temp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}

const WeatherApp = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {props.city} {props.country}
        </h1>
        <h5 className="py-4">
          <i className={`wi ${props.icon} display-1`} />
        </h5>

        {props.celsius ? <h1 className="py-2">{props.celsius}&deg;</h1> : null}

        {Temp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

export default WeatherApp;
