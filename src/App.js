import ScrollBox from "./ScrollBox";
import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>밑으루</button>

        <IterationSample />
      </div>
    );
  }
}

export default App;
