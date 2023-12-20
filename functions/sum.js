function isValidNumber(number) {
  return (!Number.isNaN(number) && typeof number === "number");
}

function sum(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return "Inputs need to be integers.";
  }

  return a + b;
}

export default sum;
