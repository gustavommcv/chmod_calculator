import { matrix } from "../matrix-context.js";
import binaryParse from "./binaryParse.js";
import printSymblicCommand from "./printSymbolicCommand.js";

const symbolicInput = document.querySelector("#symbolic");
const numericInput = document.querySelector("#numeric");

const symbolicSpan = document.querySelector("#symbolic-span");
const numericSpan = document.querySelector("#numeric-span");

export function inputsSync() {
  //Syncs the symbolic input
  let str = "-";

  // Making a string with format -rwx-----w- with the matrix data
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      str += matrix[i][j];
    }
  }

  // Only changes the default value if the str contains something different
  if (str === "----------") {
    symbolicInput.value = "";
    symbolicSpan.innerHTML = "-rw-rw-rw-";
  } else {
    symbolicInput.value = str;
    symbolicSpan.innerHTML = printSymblicCommand(str);
  }

  // Syncs the numeric input
  let numbers = binaryParse(str);
  if (numbers === "000") {
    numericInput.value = "";
    numericSpan.innerHTML = "755";
  } else {
    numericInput.value = numbers;
    numericSpan.innerHTML = numbers;
  }
}
