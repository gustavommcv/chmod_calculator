import { inputsSync } from "./util/inputsSync.js";
import { matrixHTMLSyncPos } from "./util/matrixHTMLSync.js";

// This matrix stores the current state of the table
export const matrix = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

// Updates the matrix by getting the userType and permission type,
// and updates the HTML element
export function updateMatrix(userType, permissionType) {
  let rowPosition, colPosition, symbol;

  if (userType === "u") rowPosition = 0;
  if (userType === "g") rowPosition = 1;
  if (userType === "o") rowPosition = 2;

  if (permissionType === "r") {
    colPosition = 0;
    symbol = "r";
  }

  if (permissionType === "w") {
    colPosition = 1;
    symbol = "w";
  }
  if (permissionType === "x") {
    colPosition = 2;
    symbol = "x";
  }

  if (matrix[rowPosition][colPosition] != "-") {
    matrix[rowPosition][colPosition] = "-";
    symbol = "-";
  } else {
    matrix[rowPosition][colPosition] = symbol;
  }
  
  matrixHTMLSyncPos(userType, permissionType, symbol);
  inputsSync();
  // console.log(matrix);
}
