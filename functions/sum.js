function isValidNumber(number) {
  return (!Number.isNaN(number) && typeof number === "number");
}

function sum(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return "Inputs need to be integers.";
  }

  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
  return "Inputs need to be integers.";
}

export default sum;
