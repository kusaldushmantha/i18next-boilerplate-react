import { getCurrencyCode } from "./language-resources";

export const getLocaleNumber = (lng, value) => {
  return new Intl.NumberFormat(lng).format(value);
};

export const getLocaleDateTimeShort = (lng, value) => {
  return new Intl.DateTimeFormat(lng).format(value);
};

export const getLocaleDateTimeLong = (lng, value) => {
  return new Intl.DateTimeFormat(lng, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(value);
};

export const getLocaleCurrency = (lng, value) => {
  return new Intl.NumberFormat(lng, {
    style: "currency",
    currency: getCurrencyCode(lng),
    currencyDisplay: "narrowSymbol",
  }).format(value);
};
