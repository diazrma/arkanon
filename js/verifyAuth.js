const token = localStorage.getItem("token");

const checkAuthorization = (token) => {
  firebase
    .database()
    .ref("token")
    .on("value", (snap) => {
      if (snap.val() === token) {
        document.getElementById("grid").classList.remove('d-none');
      } else {
        document.getElementById("grid").classList.add('d-none');
        window.location.href = 'login.html';
      }
    });
};

checkAuthorization(token);
