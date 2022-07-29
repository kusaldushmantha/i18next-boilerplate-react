import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import i18n from "../i18n/i18n";
import PropTypes from "prop-types";
import { locales } from "../i18n/language-resources";

export const LocaleToggle = (props) => {
  const [radioValue, setRadioValue] = useState(
    localStorage.getItem("lang") || i18n.options.fallbackLng
  );

  const localeOptions = locales;

  useEffect(() => {
    (async () => {
      await i18n.changeLanguage(radioValue);
      await localStorage.setItem("lang", radioValue);
      props.changeLanguage();
    })();
  }, [radioValue]);

  return (
    <ButtonGroup>
      {localeOptions.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? "outline-success" : "outline-danger"}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

LocaleToggle.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};
