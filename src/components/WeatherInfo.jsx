import "./myComponent.css";
import React, { Component } from "react";

export default class WeatherInfo extends Component {
  render() {
    console.log(this.props.data);
    const data = this.props.data;
    return (
      <div className="flex-items">
        <div className="actual_temp">
          <h1>Temperatur :</h1> <p>{data.main.temp} grader</p>
        </div>
        <div className="feels_like">
          <h1>Känns som :</h1> <p>{data.main.feels_like} grader</p>
        </div>
      </div>
    );
  }
}
