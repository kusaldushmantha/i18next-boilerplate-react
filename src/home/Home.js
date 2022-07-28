import { localize } from "../i18n/Localize";
import React from "react";
import PropTypes from "prop-types";

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
