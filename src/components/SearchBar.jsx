import "./myComponent.css";
import React, { Component } from "react";

// export default class SearchBar extends Component {
//   render() {
//     console.log(this.props.data);
//     const data = this.props.data;
//     return (
//       <form>
//         <label>
//           Sök väder för stad:
//           <input type="text" name="city" />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default class SearchBar extends Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.parentCallBack(this.state.value);
    /*alert("A city was submitted: " + this.state.value);*/
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Skriv in vilken stad du vill se vädret för:
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
