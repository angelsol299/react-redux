import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "riu", age: 20, belt: "black", id: 1 },
      { name: "mario", age: 24, belt: "green", id: 2 },
      { name: "luigi", age: 34, belt: "red", id: 3 }
    ]
  };
  addNinja = ninja => {};
  render() {
    return (
      <div className="App">
        <h1>Welcome home homie</h1>
        <p>Welcome Home compa</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
