import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export const LocaleToggle = () => {
  const [radioValue, setRadioValue] = useState("en-US");

  const radios = [
    { name: "en-US", value: "en-US" },
    { name: "fr-CA", value: "fr-CA" },
    { name: "de-DE", value: "de-DE" },
  ];

  useEffect(() => {
    (async () => {
      // await i18n.changeLanguage(radioValue);
      localStorage.setItem("lang", radioValue);
    })();
  }, [radioValue]);

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
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
