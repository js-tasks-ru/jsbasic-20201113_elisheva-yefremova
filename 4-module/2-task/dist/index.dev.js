"use strict";

/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j <= table.rows[i].cells.length; j++) {
      if (i == j) {
        table.rows[i].cells[j].style.backgroundColor = 'red';
      }
    }
  }
}
//# sourceMappingURL=index.dev.js.map
