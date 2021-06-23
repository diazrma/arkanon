"use strict";

Notification.requestPermission().then((result) => {
  if (result === "granted") {
    if (!localStorage.getItem("receivedNotify")) {
      notification("Bem vindo ao Arkanon!", "Projeto de automação residencial");
      localStorage.setItem("receivedNotify", "true");
    }
  }
});

const notification = (notifTitle,notifBody) => {
  const notifImg = `assets/logo.png`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
};
