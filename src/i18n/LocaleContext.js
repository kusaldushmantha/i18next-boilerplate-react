import React from "react";
import { translator } from "./Localize";
import i18n from "./i18n";

export const LocaleContext = React.createContext({
  translator,
  lang: i18n.language,
});
