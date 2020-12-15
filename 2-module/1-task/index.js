/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (salary in salaries) {
    if ( parseInt(salaries[salary]) ) {
      sum += parseInt(salaries[salary]);
    }
  }
  return sum;
}
