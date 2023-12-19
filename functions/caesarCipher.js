const caesarCipher = (() => {
  function validateKey(num) {
    if (Number.isInteger(num)) return true;
    return "Shift factor provided must be an integer.";
  }

  function validateString(string) {
    if (typeof string == "string") return true;
    return "Input must be a string.";
  }

  function encrypt(string, shiftFactor) {
    const keyResults = validateKey(shiftFactor);
    if (keyResults !== true) return keyResults;
    const stringResults = validateString(string);
    if (stringResults !== true) return stringResults;
    return string;
  }

  return { encrypt };
})();

export default caesarCipher;
