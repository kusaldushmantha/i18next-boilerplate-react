import React from "react";
import { localize } from "../i18n/Localize";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

@localize
class Details extends React.Component {
  render() {
    return (
      <div className={`${styles["details"]}`}>
        <p>{this.props.translator("sample.variable", { var: "i18n ❤" })}</p>
        <p>{this.props.translator("currency.sample", { var: 125.5 })}</p>
        <p>{this.props.translator("number.sample", { var: 152963 })}</p>
        <p>{this.props.translator("datetime.sample", { var: new Date() })}</p>
      </div>
    );
  }
}

Details.propTypes = {
  translator: PropTypes.func,
};

export default Details;
