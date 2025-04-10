import { updateMatrixField } from "./updateMatrixField.js";

const inputs = document.querySelectorAll(".inputs-section__input");

export default function setupMatrixClickHandlers() {
  inputs.forEach((input) => {
    input.addEventListener("click", (event) => {
      // input - <td id="g-r" class="inputs-section__input">-</td>
      const [entity, permission] = event.target.id.split("-");

      updateMatrixField(entity, permission);
    });
  });
}
