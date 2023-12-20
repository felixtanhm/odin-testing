const analyseArray = (() => {
  function average(arr) {
    let sum = 0;
    arr.forEach((num) => {
      sum += num;
    });
    return sum / arr.length;
  }

  function min(arr) {
    return Math.min(...arr);
  }

  function max(arr) {
    return Math.max(...arr);
  }

  function length(arr) {
    return arr.length;
  }

  function isValidNumber(number) {
    return (!Number.isNaN(number) && typeof number === "number");
  }

  function validation(arr) {
    if (!Array.isArray(arr)) return "Input does not consist of an Array.";

    if (!arr.every((value) => isValidNumber(value)))
      return "Array consists of a non-number.";

    return true;
  }

  function analyse(arr) {
    const validationResults = validation(arr);
    if (validationResults !== true) return validationResults;
    let obj = {};
    obj.average = average(arr);
    obj.min = min(arr);
    obj.max = max(arr);
    obj["length"] = length(arr);
    return obj;
  }

  return { analyse };
})();

export default analyseArray;
