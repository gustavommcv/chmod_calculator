import { matrix, updateMatrix } from "../matrix-context.js";

const inputs = document.querySelectorAll(".inputs-section__input");

// Syncs all fields of the matrix, and the event listeners for the inputs
export function matrixHTMLSyncAll() {
  inputs.forEach((input) => {
    input.addEventListener("click", (event) => {
      const id = event.target.id;
      const chars = id.split("-");

      const userType = chars[0];
      const permissionType = chars[1];

      updateMatrix(userType, permissionType);
    });
  });

  for (let index = 0; index < 3; index++) {
    inputs[index].innerHTML = matrix[0][index];
    // console.log(index);
  }

  for (let index = 3; index < 6; index++) {
    inputs[index].innerHTML = matrix[1][index - 3];
    // console.log(index);
  }

  for (let index = 6; index < 9; index++) {
    inputs[index].innerHTML = matrix[2][index - 6];
    // console.log(index);
  }
}

// Updates only one field to improve performance
export function matrixHTMLSyncPos(userType, permissionType, symbol) {
  const id = `${userType}-${permissionType}`;

  const inputsArray = Array.from(inputs);

  const inputToUpdate = inputsArray.find((input) => input.id === id);

  inputToUpdate.innerHTML = symbol;
}
