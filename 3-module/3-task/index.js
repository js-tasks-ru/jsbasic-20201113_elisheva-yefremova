/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  str = str.split('-');
  let camelized = [str[0]];
  for ( let i = 1; i < str.length; i++ ){
    camelized[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return camelized.join('');
}

