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

const teste  =() => {
    fetch('https://onesignal.com/api/v1/notifications', {
        'method': 'post',
        'mode': 'no-cors',
        'headers': { 
        'Authorization':"Basic N2U5NDdlMGQtNTU3Yi00MzJlLWIyM2ItNWZkODBmMWEyOWIx",
        'Content-Type':' application/json ',
        },
        'body':{
            "app_id": "b2ffba06-7be4-436d-b59f-a7f7c861aa77",
            "included_segments": ["Subscribed Users"],
            "data": {"foo": "bar"},
            "contents": {"en": "English Message"}
          }
      });
    
    
  });

}