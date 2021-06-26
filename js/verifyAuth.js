const token = localStorage.getItem("token");

const checkAuthorization = (token) => {
  firebase
    .database()
    .ref("token")
    .on("value", (snap) => {
      if (snap.val() === token) {
        //
      } else {
        window.location.href = 'login.html';
      }
    });
};

checkAuthorization(token);
