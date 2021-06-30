'use strict'

const loading = '<div id="spinner" class="container-spinner"><div class="spin"></div></div>';

document.write(loading);

document.getElementById("grid").classList.add('d-none');

setTimeout(function () {
    document.getElementById("grid").classList.remove('d-none');
    document.getElementById("spinner").classList.add('d-none');
}, 600);