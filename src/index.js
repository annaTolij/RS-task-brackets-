module.exports = function check(str, bracketsConfig) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        if (array[array.length - 1] == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
          array.pop();
        } else {
          array.push(str[i]);
        }
      } else if (str[i] == bracketsConfig[j][1]) {
        if (array.length == 0) {
          return false;
        }

        if (array[array.length - 1] == bracketsConfig[j][0]) {
          array.pop();
        }
      }
    }
  }

  return array.length ? false : true;
}
