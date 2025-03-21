import { inputsSync } from "./util/inputsSync.js";
import { matrixHTMLSyncAll } from "./util/matrixHTMLSync.js";

export default function loadEventListeners() {
  matrixHTMLSyncAll();

  inputsSync();
}
