import BtnHandler from "../components/button.js";
import { printName, sum } from "../components/functions.js";

window.addEventListener("DOMContentLoaded", () => {
  const buttonHandler = new BtnHandler("my-button");

  printName("John Doe");
  const r = sum(1, 2);
  console.log(`r`, r);
});
