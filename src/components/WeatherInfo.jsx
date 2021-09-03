import React, { Component } from "react";
import "../App.css";

export default class WeatherInfo extends Component {
  render() {
    const formatTime = (unix, timezone) => {
      const date = new Date((unix + timezone - 7200) * 1000);
      const hour = date.getHours();
      const minute = date.getMinutes();

      return hour + ":" + minute;
    };
    console.log(this.props.data);
    const data = this.props.data;

    return (
      <div className="weather">
        <div className="actual_temp">
          <h1>Temperature </h1> <p>{data.main.temp} °C</p>
        </div>
        <div className="feels_like">
          <h1>Feels like </h1> <p>{data.main.feels_like} °C</p>
        </div>
        <div className="sunrise">
          <h1>Sunrise </h1> <p>{formatTime(data.sys.sunrise, data.timezone)}</p>
        </div>
        <div className="sunset">
          <h1>Sunset </h1> <p>{formatTime(data.sys.sunset, data.timezone)}</p>
        </div>
      </div>
    );
  }
}
