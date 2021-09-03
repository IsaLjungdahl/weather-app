import React, { Component } from "react";
import "../App.css";

export default class SearchBar extends Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.parentCallBack(this.state.value);

    event.preventDefault();
  };
  /*TODO: Have a closer look at validation to make it work properly, right now only gives alert*/
  //   validateSubmit = (event) => {
  //     let value = this.state.value;
  //     let errors = {};
  //     let formIsValid = true;

  //     if (!value) {
  //       formIsValid = false;
  //       errors = "cannot be empty";
  //       alert("Du måste fylla i en stad");
  //     }

  //     if (typeof value !== "undefined") {
  //       if (!value.match(/^[a-zA-Z]+$/)) {
  //         formIsValid = false;
  //         errors = "Only letters";
  //         alert("Du kan bara fylla i bokstäver");
  //       }
  //     }
  //   };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <div className="header">
            <h1>
              Conversation about the weather is the last refuge of the
              unimaginative.
            </h1>

            <h2>Oscar Wilde</h2>
          </div>
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type the city you want to know about"
          />
        </label>
        <input className="submitbtn" type="submit" value="weather" />
      </form>
    );
  }
}
