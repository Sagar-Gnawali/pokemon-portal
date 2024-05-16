import { REGEX_ESCAPE, REGEX_SPECIAL_CHARS, REGEX_WILDCARD } from "./constants";

const createFuzzySearchPattern = (query: string) => {
  let regexString = REGEX_WILDCARD;
  const length = query.length;
  for (let i = 0; i < length; i++) {
    const charAt = query.charAt(i);
    if (REGEX_SPECIAL_CHARS.indexOf(charAt) !== -1) {
      regexString += REGEX_ESCAPE;
    }
    regexString += charAt;
    regexString += REGEX_WILDCARD;
  }
  return new RegExp(regexString);
};

export { createFuzzySearchPattern };
