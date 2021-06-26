const login = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const generateToken = (length) => {
  let a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
};

login.addEventListener("click", function () {
  if (email.value === "" || password.value === "") {
    alertify.set("notifier", "position", "bottom-center");
    alertify.warning("Preencha todos os campos");
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(function (result) {
        alertify.set("notifier", "position", "bottom-center");
        alertify.success("Login efetuado com sucesso!");
        
        firebase.database().ref("token").set(generateToken(32));

        firebase
          .database()
          .ref("token")
          .on("value", (snap) => {
            if (snap.val()) {
              localStorage.setItem("token", snap.val());
              setTimeout(function(){
               
                
              if(localStorage.getItem("token") === snap.val() ){
              window.location.href= 'index.html';
                }
            },500)
            }
          });
      })
      .catch(function (error) {
        //Handle Errors here
        let errorCode = error.code;
        let errorMessage = error.code;
        alertify.set("notifier", "position", "bottom-center");
        alertify.error(`Usuário ou senha inválida ${errorCode}`);
      });
  }
});
