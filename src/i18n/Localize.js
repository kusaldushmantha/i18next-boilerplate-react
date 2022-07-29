import React, { Component } from "react";
import i18n from "./i18n";
import { LocaleContext } from "./LocaleContext";
import PropTypes from "prop-types";

export const translator = (key, vars) => {
  return i18n.t(`lang:${key}`, vars);
};

export const localize = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  class LocalizerHOC extends Component {
    static contextType = LocaleContext;

    render() {
      return <WrappedComponent {...this.props} translator={this.context} />;
    }
  }

  LocalizerHOC.propTypes = {
    translator: PropTypes.func.isRequired,
  };

  return LocalizerHOC;
};
