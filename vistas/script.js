let box = document.getElementById("box");
let shadowB = "";
for (var i = 0; i < 200; i++) {
  shadowB +=
    (shadowB ? "," : "") +
    i * 1 +
    "px " +
    i * 1 +
    "px 0 rgba(37, 115, 149, 0.111)";
}
box.style.boxShadow = shadowB;

let circleC = document.getElementById("circle-c");
let shadowC = "";
for (var i = 0; i < 20; i++) {
  shadowC +=
    (shadowC ? "," : "") +
    i * 1 +
    "px " +
    i * 1 +
    "px 0 rgba(0, 0, 0, 0.011)";
}
circleC.style.boxShadow = shadowC;

let iconClient = document.getElementById("icon-client");
let shdowI = "";
for (var i = 0; i < 20; i++) {
  shdowI +=
    (shdowI ? "," : "") +
    i * 1 +
    "px " +
    i * 1 +
    "px 0 rgba(0, 0, 0, 0.011)";
}
iconClient.style.textShadow = shdowI;



let title = document.getElementById("title");
let shdowT = "";
for (var i = 0; i < 10; i++) {
  shdowT +=
    (shdowT ? "," : "") +
    i * 1 +
    "px " +
    i * 1 +
    "px 0 rgba(0, 0, 0, 0.011)";
}
title.style.textShadow = shdowT;


let iconX = document.getElementById("icon-x");
let shdowIX = "";
for (var i = 0; i < 15; i++) {
  shdowIX +=
    (shdowIX ? "," : "") +
    i * 1 +
    "px " +
    i * 1 +
    "px 0 rgba(0, 0, 0, 0.011)";
}
iconX.style.textShadow = shdowIX;

let circleX = document.getElementById("circle-x");
circleX.style.boxShadow = shadowC;

const dName = document.getElementById("forms__name");
const dLastName = document.getElementById("forms__last-name");
const dPhone = document.getElementById("forms__phone");
const dDescription = document.getElementById("forms__description");
const dPrice = document.getElementById("forms__price");
const dButtonAdd = document.getElementById("forms__add");
const dButtonUpdate = document.getElementById("forms__update");
const form = document.getElementById("box");
const dModal = document.getElementById("modal");
const dcerrar = document.getElementById("button__cerrar");
const dModalT = document.getElementById("modal__text");

const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const numbers = /[1234567890]/;
const letters = /[ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz]/;
const spaces = /[ ]/;



dButtonAdd.onclick = clickAdd;
dcerrar.addEventListener("click", function () { modal.style.display = "none" });





function showModal(message) {
  modal.style.display = "flex";
  dModalT.textContent = message;
}

function validateName() {
  let bandera = false
  let name = dName.value;

  if (name.length == 0) {
    showModal("No deje el nombre vacio");
  }
  else if (symbols.test(name)) {
    showModal("No se permiten simbolos en el nombre");
  }
  else if (numbers.test(name)) {
    showModal("No se permiten numeros en el nombre");
  }
  else if (spaces.test(name)) {
    showModal("No se permiten espacios en el nombre");
  }
  else {
    bandera = true;
  }
  return bandera;
}

function validateLastName() {
  let bandera = false
  let lastName = dLastName.value;

  if (lastName.length == 0) {
    showModal("No deje el apellido vacio");
  }
  else if (symbols.test(lastName)) {
    showModal("No se permiten simbolos en los apellidos");
  }
  else if (numbers.test(lastName)) {
    showModal("No se permiten simbolos en los apellidos");
  }
  else if (!spaces.test(lastName)) {
    showModal("Falta el Apellido");
  }
  else {
    bandera = true;
  }
  return bandera;
}

function validatePhone() {
  let bandera = false
  let phone = dPhone.value;

  if (phone.length == 0) {
    showModal("No deje el numero de telefono vacio");
  }
  else if (symbols.test(phone)) {
    showModal("No se permiten simbolos en el telefono");
  }
  else if (spaces.test(phone)) {
    showModal("No ponga espacios en telefono");
  }
  else if (letters.test(phone)) {
    showModal("No ponga letras en el telefono");
  }
  else {
    bandera = true;
  }
  return bandera;
}

function validateDescription() {
  let bandera = false
  let description = dDescription.value;

  if (description.length == 0) {
    showModal("No deje la descripcion vacia");
  }
  else {
    bandera = true;
  }
  return bandera;
}

function validatePrice() {
  let bandera = false
  let price = dPrice.value;

  if (price.length == 0) {
    showModal("No deje el precio vacio");
  }
  else if (symbols.test(price)) {
    showModal("No se permiten simbolos en el precio");
  }
  else if (spaces.test(price)) {
    showModal("No ponga espacios en precio");
  }
  else if (letters.test(price)) {
    showModal("No ponga letras en el precio");
  }
  else {
    bandera = true;
  }
  return bandera;
}

function clickAdd() {

  if (dLastName == null && dPhone == null && dDescription == null && dPrice == null) {
    if (validateName()) {

      form.submit();

    }
  }
  else if (dDescription == null && dPrice == null) {
    if (validateName() && validateLastName() && validatePhone()) {
      form.submit();

    }
  } 
  else if (dLastName == null && dPhone == null) {
    if (validateName() && validateDescription() && validatePrice()) {

      form.submit();

    }
  }
  else {
    if (validateName() && validateLastName() && validatePhone() && validateDescription && validatePrice) {

      form.submit();

    }
  }
}

function clickUpdate() {
  if (validateName() && validateLastName() && validatePhone() && validateDescription() && validatePrice()) {
    showModal("Todos los datos estan correctos")
    form.submit();
  }
}


const updateButton = document.getElementsByClassName("update__buton");
