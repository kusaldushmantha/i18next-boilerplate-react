import React, { Component } from "react";
import i18n from "./i18n";
import { LocaleContext } from "./LocaleContext";

export const translator = (key, vars) => {
  console.log(i18n.language);
  return i18n.t(`lang:${key}`, vars);
};

export const localize = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    static contextType = LocaleContext;

    render() {
      return (
        <WrappedComponent
          {...this.props}
          translator={this.context.translator}
          lang={this.context.lang}
        />
      );
    }
  };
};
