import React from "react";
import "./App.css";
import Home from "./home/Home";
import { LocaleToggle } from "./localeToggle/LocaleToggle";
import { LocaleContext } from "./i18n/LocaleContext";
import { translator } from "./i18n/Localize";
import i18n from "./i18n/i18n";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.getLang(),
    };
  }

  changeLanguage = () => {
    this.setState(() => ({
      lang: this.getLang(),
    }));
  };

  getLang = () => {
    return localStorage.getItem("lang") || i18n.options.fallbackLng;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocaleToggle changeLanguage={this.changeLanguage} />
          <br />
          <LocaleContext.Provider value={{ translator, lang: this.state.lang }}>
            <h1>React i18n App</h1>
            <Home />
          </LocaleContext.Provider>
        </header>
      </div>
    );
  }
}

export default App;
