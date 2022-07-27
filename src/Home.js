import { localize } from "./i18n/localize";
import PropTypes from "prop-types";
import React from "react";

@localize
class Home extends React.Component {
  render() {
    return (
      <div className={"home"}>
        <h2 className={"home_heading-main"}>
          {this.props.translator("welcome.to.react")}
        </h2>
      </div>
    );
  }
}

Home.propTypes = {
  translator: PropTypes.func,
};

export default Home;
