import permissionToBinaryParse from "../util/permissionToBinaryParse.js";
import permissionToSymbolicParse from "../util/permissionToSymbolicParse.js";
import matrix from "./matrix-context.js";
const inputs = document.querySelectorAll(".inputs-section__input");
const symbolicInput = document.querySelector("#symbolic");
const numericInput = document.querySelector("#numeric");
const symbolicSpan = document.querySelector("#symbolic-span");
const numericSpan = document.querySelector("#numeric-span");

export function updateGUI(userType, permissionType, symbol) {
    updateTextInputs();
    updateMatrixGUI(userType, permissionType, symbol);
}

function updateMatrixGUI(userType, permissionType, symbol) {
  // Converting to id format <td id="g-r" class="inputs-section__input">-</td>
  const id = `${userType}-${permissionType}`;

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
    symbolicSpan.innerHTML = "u=rwx,g=rx,o=rx";
  } else {
    symbolicInput.value = str;
    symbolicSpan.innerHTML = permissionToSymbolicParse(str);
  }

  // Updates the numeric input
  let numbers = permissionToBinaryParse(str);
  if (numbers === "000") {
    numericInput.value = "";
    numericSpan.innerHTML = "755";
  } else {
    numericInput.value = numbers;
    numericSpan.innerHTML = numbers;
  }
}
