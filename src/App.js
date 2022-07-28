import React from "react";
import "./App.css";
import Home from "./Home";
import { LocaleToggle } from "./Toggle";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocaleToggle />
          <h1>React i18n App</h1>
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
