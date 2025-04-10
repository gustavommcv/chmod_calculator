import permissionToBinaryParse from "../util/permissionToBinaryParse.js";
import permissionToSymbolicParse from "../util/permissionToSymbolicParse.js";
import matrix from "./matrix-context.js";

// HTML components
const inputs = document.querySelectorAll(".inputs-section__input");
const symbolicInput = document.querySelector("#symbolic");
const numericInput = document.querySelector("#numeric");
const symbolicSpan = document.querySelector("#symbolic-span");
const numericSpan = document.querySelector("#numeric-span");

// CONSTS
const DEFAULT_NUMERIC_VALUE = "755";
const DEFAULT_SYMBOLIC_VALUE = "u=rwx,g=rx,o=rx";

export function updateGUI(user, permission, symbol) {
  updateTextInputs();
  updateMatrixGUI(user, permission, symbol);
}

function updateMatrixGUI(user, permission, symbol) {
  // Converting to id format <td id="g-r" class="inputs-section__input">-</td>
  const id = `${user}-${permission}`;

  const inputToUpdate = Array.from(inputs).find((input) => input.id === id);
  inputToUpdate.innerHTML = symbol;
}

function updateTextInputs() {
  // First character for the string -rwx-----w-
  let str = "-";

  // Populating the string with the matrix data
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      str += matrix[i][j];
    }
  }

  // Only changes the default value if the str contains something different
  if (str === "----------") {
    symbolicInput.value = "";
    symbolicSpan.innerHTML = DEFAULT_SYMBOLIC_VALUE;
  } else {
    symbolicInput.value = str;
    symbolicSpan.innerHTML = permissionToSymbolicParse(str);
  }

  // Updates the numeric input
  let numbers = permissionToBinaryParse(str);
  if (numbers === "000") {
    numericInput.value = "";
    numericSpan.innerHTML = DEFAULT_NUMERIC_VALUE;
  } else {
    numericInput.value = numbers;
    numericSpan.innerHTML = numbers;
  }
}
