const token = localStorage.getItem("token");

const close = () => {
  document.getElementById("grid").classList.add('d-none');
  window.location.href = 'login.html';
}
const exit = () => {
  alertify.confirm('<b>Você não está logado!</b>', 'Precisa estar logado para continuar...', function () {
    close();
  }, function () {
    close();
  }).set('labels', { ok: 'Sair' });
}

const checkAuthorization = (token) => {
  firebase
    .database()
    .ref("token")
    .on("value", (snap) => {
      if (snap.val() === token) {
        document.getElementById("grid").classList.remove('d-none');
      } else {
        exit();
      }
    });
};

checkAuthorization(token);

const logout = document.getElementById('logout');

logout.addEventListener('click', function () {
  close();
});
