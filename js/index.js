"use strict";

window.onload = function () {
  if (localStorage.getItem("modoNoturno") === "true") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
};
