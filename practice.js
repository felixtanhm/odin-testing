function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
  return "Inputs need to be integers.";
}

function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  const stringArr = string.split("");
  const reversedStr = stringArr.reverse();
  return reversedStr.join("");
}

module.exports = { sum, capitalise, reverseString };
