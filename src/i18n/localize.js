import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import i18n from "./i18n";

const translator = (key, vars) => {
  return i18n.t(`lang:${key}`, vars);
};

export const localize = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  const Localize = class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} translator={this.props.translator} />
      );
    }
  };

  Localize.propTypes = {
    translator: PropTypes.func.isRequired,
  };

  Localize.defaultProps = {
    translator: translator,
  };

  return Localize;
};
