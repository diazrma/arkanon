"use strict";

const formParams = document.getElementById("formParams");
const submitForm = document.getElementById("submitForm");
const chaveLuzCozinha = document.getElementById("chaveLuzCozinha");
const chaveLuzQuarto = document.getElementById("chaveLuzQuarto");
const chaveLuzBanheiro = document.getElementById("chaveLuzBanheiro");
const chaveLuzExterna = document.getElementById("chaveLuzExterna");
const modoNoturno = document.getElementById("modoNoturno");
const imgModenight = document.getElementById("imgModenight");
const lightLabel = document.getElementById("lightLabel");
modoNoturno.addEventListener("click", function () {
  if (modoNoturno.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    imgModenight.src = "../assets/day-mode.png";
    lightLabel.src = "../assets/light-on.png";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    imgModenight.src = "../assets/night-mode.png";
    lightLabel.src = "../assets/light-off.png";
  }
});
submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (chaveLuzCozinha.value) {
    localStorage.setItem("chaveLuzCozinha", chaveLuzCozinha.value);
  }
  if (chaveLuzQuarto.value) {
    localStorage.setItem("chaveLuzQuarto", chaveLuzQuarto.value);
  }
  if (chaveLuzBanheiro.value) {
    localStorage.setItem("chaveLuzBanheiro", chaveLuzBanheiro.value);
  }
  if (chaveLuzExterna.value) {
    localStorage.setItem("chaveLuzExterna", chaveLuzExterna.value);
  }
  if (modoNoturno.checked) {
    localStorage.setItem("modoNoturno", modoNoturno.checked);
  } else {
    localStorage.setItem("modoNoturno", false);
  }
  alertify.set("notifier", "position", "bottom-center");
  alertify.success("Parâmetros salvos com sucesso");
});

window.onload = function () {
  if (localStorage.getItem("modoNoturno") === "true") {
    modoNoturno.checked = true;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    imgModenight.src = "../assets/day-mode.png";
    lightLabel.src = "../assets/light-on.png";
  }
  if (localStorage.getItem("chaveLuzCozinha")) {
    chaveLuzCozinha.value = localStorage.getItem("chaveLuzCozinha");
  }
  if (localStorage.getItem("chaveLuzQuarto")) {
    chaveLuzQuarto.value = localStorage.getItem("chaveLuzQuarto");
  }
  if (localStorage.getItem("chaveLuzBanheiro")) {
    chaveLuzBanheiro.value = localStorage.getItem("chaveLuzBanheiro");
  }
  if (localStorage.getItem("chaveLuzExterna")) {
    chaveLuzExterna.value = localStorage.getItem("chaveLuzExterna");
  }
};
