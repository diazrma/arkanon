"use strict";

let chaveLuzCozinha = "";
let chaveLuzQuarto = "";
let chaveLuzBanheiro = "";
let chaveLuzExterna = "";

//Luz Cozinha
const btnLuzCozinha = document.getElementById("btnLuzCozinha");
const imgLuzCozinha = document.getElementById("imgLuzCozinha");

//Luz Quarto
const btnLuzQuarto = document.getElementById("btnLuzQuarto");
const imgLuzQuarto = document.getElementById("imgLuzQuarto");

//Luz Banheiro
const btnLuzBanheiro = document.getElementById("btnLuzBanheiro");
const imgLuzBanheiro = document.getElementById("imgLuzBanheiro");

//Luz Externa
const btnLuzExterna = document.getElementById("btnLuzExterna");
const imgLuzExterna = document.getElementById("imgLuzExterna");

const turnOn = (device) => {
  switch (device) {
    case "luz_cozinha":
      btnLuzCozinha.classList.remove("btn-success");
      btnLuzCozinha.classList.add("btn-warning");
      btnLuzCozinha.innerHTML = "Apagar";
      imgLuzCozinha.src = "../assets/light-on.png";
      break;
    case "luz_quarto":
      btnLuzQuarto.classList.add("btn-warning");
      btnLuzQuarto.innerHTML = "Apagar";
      imgLuzQuarto.src = "../assets/light-on.png";
      break;
    case "luz_banheiro":
      btnLuzBanheiro.classList.add("btn-warning");
      btnLuzBanheiro.innerHTML = "Apagar";
      imgLuzBanheiro.src = "../assets/light-on.png";
      break;
    case "luz_externa":
      btnLuzExterna.classList.add("btn-warning");
      btnLuzExterna.innerHTML = "Apagar";
      imgLuzExterna.src = "../assets/light-on.png";
      break;
      a;
    default:
  }
};

const turnOff = (device) => {
  switch (device) {
    case "luz_cozinha":
      btnLuzCozinha.classList.add("btn-success");
      btnLuzCozinha.classList.remove("btn-warning");
      btnLuzCozinha.innerHTML = "Acender";
      imgLuzCozinha.src = "assets/light-off.png";
      break;
    case "luz_quarto":
      btnLuzQuarto.classList.remove("btn-warning");
      btnLuzQuarto.innerHTML = "Acender";
      imgLuzQuarto.src = "assets/light-off.png";
      break;
    case "luz_banheiro":
      btnLuzBanheiro.classList.remove("btn-warning");
      btnLuzBanheiro.innerHTML = "Acender";
      imgLuzBanheiro.src = "assets/light-off.png";
      break;
    case "luz_externa":
      btnLuzExterna.classList.remove("btn-warning");
      btnLuzExterna.innerHTML = "Acender";
      imgLuzExterna.src = "assets/light-off.png";
      break;

    default:
  }
};
//Carrega todos os elementos da pagina
window.onload = function () {
  const devices = ["luz_cozinha", "luz_quarto", "luz_banheiro", "luz_externa"];

  devices.forEach((device) => {
    firebase
      .database()
      .ref(device)
      .on("value", (snap) => {
        if (snap.val()) {
          localStorage.setItem(device, snap.val());
          turnOn(device);
        } else {
          localStorage.setItem(device, snap.val());
          turnOff(device);
        }
      });
  });

  if (localStorage.getItem("modoNoturno") === "true") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  if (localStorage.getItem("chaveLuzCozinha")) {
    btnLuzCozinha.removeAttribute("disabled");
    chaveLuzCozinha = localStorage.getItem("chaveLuzCozinha");
  }
  if (localStorage.getItem("chaveLuzQuarto")) {
    btnLuzQuarto.removeAttribute("disabled");
    chaveLuzQuarto = localStorage.getItem("chaveLuzQuarto");
  }
  if (localStorage.getItem("chaveLuzBanheiro")) {
    btnLuzBanheiro.removeAttribute("disabled");
    chaveLuzBanheiro = localStorage.getItem("chaveLuzBanheiro");
  }
  if (localStorage.getItem("chaveLuzExterna")) {
    btnLuzExterna.removeAttribute("disabled");
    chaveLuzExterna = localStorage.getItem("chaveLuzExterna");
  }
};
const getStatusDevice = (device) => {
  firebase
    .database()
    .ref(device)
    .on("value", (snap) => {
      localStorage.setItem(device, snap.val());
    });
};

//Luz Cozinha
btnLuzCozinha.addEventListener("click", function () {
  getStatusDevice("luz_cozinha");
  fetch(chaveLuzCozinha, { mode: "no-cors" });
  if (localStorage.getItem("luz_cozinha") === "true") {
    firebase.database().ref("luz_cozinha").set(false);
    turnOff("luz_cozinha");
  } else {
    firebase.database().ref("luz_cozinha").set(true);

    turnOn("luz_cozinha");
  }
});

//Luz Quarto
btnLuzQuarto.addEventListener("click", function () {
  getStatusDevice("luz_quarto");
  fetch(chaveLuzQuarto, { mode: "no-cors" });
  if (localStorage.getItem("luz_quarto") === "true") {
    firebase.database().ref("luz_quarto").set(false);
    turnOff("luz_quarto");
  } else {
    firebase.database().ref("luz_quarto").set(true);
    turnOn("luz_quarto");
  }
});

//Luz Banheiro
btnLuzBanheiro.addEventListener("click", function () {
  getStatusDevice("luz_banheiro");
  fetch(chaveLuzBanheiro, { mode: "no-cors" });
  if (localStorage.getItem("luz_banheiro") === "true") {
    firebase.database().ref("luz_banheiro").set(false);
    turnOff("luz_banheiro");
  } else {
    firebase.database().ref("luz_banheiro").set(true);
    turnOn("luz_banheiro");
  }
});

//Luz Externa
btnLuzExterna.addEventListener("click", function () {
  getStatusDevice("luz_externa");
  fetch(chaveLuzExterna, { mode: "no-cors" });
  if (localStorage.getItem("luz_externa") === "true") {
    firebase.database().ref("luz_externa").set(false);
    turnOff("luz_externa");
  } else {
    firebase.database().ref("luz_externa").set(true);
    turnOn("luz_externa");
  }
});
