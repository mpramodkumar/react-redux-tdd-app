// a collection of validations to handle TextField validations

export function validateCustom(value, regex) {
  return regex.test(value);
}

// to validate password confirmation
export function validateMatch(value, match) {
  return value === match;
}

// EMAIL VALIDATION RULES
// * exclude anything except letters, numbers, and ( . - ) before the @
// * allow pretty much anything except spaces between the @ and the . (for .com, etc.)
// * length after the . (as in .com) needs to be 2 chars. no numbers, or symbols

// It's important to note that this probably WON'T catch everything,
// but it should catch most bad addresses.
export function validateEmail(value) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}

// Allow one or more whole numbers (0-9).
// OR 1 or more whole numbers (0-9), a single decimal,
// one or more whole numbers (0-9) after the decimal.
export function validateFloat(value) {
  const floatRegex = /^\d*(\.\d+)?$/;
  return floatRegex.test(value);
}

export function validateLength(value, length) {
  return value.length >= length;
}

export function validateNumber(value) {
  const numRegex = /^\d+$/;
  return numRegex.test(value);
}

export function validatePresence(value) {
  return !!value.length;
}
