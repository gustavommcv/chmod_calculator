import matrix from "./matrix-context.js";
import { updateGUI } from "./updateGUI.js";

// Updates the matrix by getting the user and permission,
// and updates the GUI
export function updateMatrixField(user, permission) {
  let symbol;
  let rowPosition;
  let colPosition;

  if (user === "u") rowPosition = 0;
  if (user === "g") rowPosition = 1;
  if (user === "o") rowPosition = 2;

  if (permission === "r") {
    colPosition = 0;
    symbol = "r";
  }

  if (permission === "w") {
    colPosition = 1;
    symbol = "w";
  }
  if (permission === "x") {
    colPosition = 2;
    symbol = "x";
  }

  if (matrix[rowPosition][colPosition] != "-") {
    matrix[rowPosition][colPosition] = "-";
    symbol = "-";
  } else {
    matrix[rowPosition][colPosition] = symbol;
  }

  updateGUI(user, permission, symbol);
}
