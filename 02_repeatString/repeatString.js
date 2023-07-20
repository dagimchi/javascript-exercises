const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let fString = "";
  for (let i = 0; i < num; i++) {
    fString += string;
  }
  return fString;
};

// Do not edit below this line
module.exports = repeatString;
