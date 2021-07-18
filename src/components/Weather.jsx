import React from "react";
import "./weather.css";
const Weather = (props) => {
  return (
    <div class="container">
        {props.tempreature && <p>Tempreature : {props.tempreature}</p>}
        {props.city && <p>City : {props.city}</p>}
        {props.country && <p>Country : {props.country}</p>}
        {props.humidity && <p>Humidity : {props.humidity}</p>}
        {props.description && <p>Description : {props.description}</p>}
        {props.error && (
          <p>
            Error !!! <br />
            {props.error}
          </p>
        )}
    </div>
  );
};

export default Weather;
