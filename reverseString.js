function reverseString(string) {
  const stringArr = string.split("");
  const reversedStr = stringArr.reverse();
  return reversedStr.join("");
}

export default reverseString;
