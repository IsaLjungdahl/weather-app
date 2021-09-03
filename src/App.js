import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

export default class App extends Component {
  state = { weatherData: undefined };
  async componentDidMount() {
    const weatherData = await this.getWeather("malmö");

    this.setState({ weatherData: weatherData });
  }

  getWeather = async (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const CITY = city;
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );

      const response = await api_call.json();
      if (response.cod === 200) {
        return response;
      } else {
        alert(`${response.cod}: ${response.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateWeather = async (CITY) => {
    const weatherData = await this.getWeather(CITY);
    this.setState({ weatherData: weatherData });
  };

  render() {
    return (
      <>
        {this.state.weatherData && (
          <WeatherInfo data={this.state.weatherData} />
        )}

        <SearchBar parentCallBack={this.updateWeather} />
      </>
    );
  }
}
