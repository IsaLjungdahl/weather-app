import React, { Component } from "react";

export default class App extends Component {
  state = { weatherData: undefined };
  async componentDidMount() {
    const weatherData = await this.getWeather();
    this.setState({ weatherData: weatherData });
  }

  getWeather = async () => {
    const API_KEY = "";
    const CITY = "gothenburg";
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );

      const response = await api_call.json();
      if (response.cod === 200) {
        console.log("Succesful fetch");
        console.log(response);
      } else {
        alert(`${response.cod}: ${response.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.weatherData);
    return <></>;
  }
}
