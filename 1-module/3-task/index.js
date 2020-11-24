/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let newStr;
  if (str.length > 0){
    newStr = str[0].toUpperCase() + str.slice(1);
  } else newStr = '';
  return newStr;
}
