import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    times: ["Corinthians", "Flamengo", "Santos"]
  };

  render() {
    return (
      <>
        <h1>Atividade de React</h1>

        <div class="Times">
          <p>{this.state.times[0]}</p>
          <p>{this.state.times[1]}</p>
          <p>{this.state.times[2]}</p>
        </div>
      </>
    );
  }
}
