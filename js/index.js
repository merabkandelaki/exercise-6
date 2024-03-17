import { fetchUsers, clearResult } from "./script.js";

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchUsers);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", clearResult);
