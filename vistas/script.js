const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
  
        menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          showcase.classList.toggle('active');
        })

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

        const dId = document.getElementById("forms__id");
        const dName = document.getElementById("forms__name");
        const dLastName = document.getElementById("forms__last-name");
        const dMail = document.getElementById("forms__email");
        const dPhone = document.getElementById("forms__phone");
        const dRfc = document.getElementById("forms__rfc");
        const dCredit = document.getElementById("forms__credit");
        const dDays = document.getElementById("forms__days");
        const dButtonAdd = document.getElementById("forms__add");
        const dButtonAddProduct = document.getElementById("forms__addProduct");
        const dButtonUpdate = document.getElementById("forms__update");
        const form = document.getElementById("box");
        const dModal = document.getElementById("modal");
        const dcerrar = document.getElementById("button__cerrar");
        const dModalT = document.getElementById("modal__text");
        const dType = document.getElementById("forms__type");
        const dMiddleName = document.getElementById("forms__middle-name");
        const dfechaPedido = document.getElementById("forms__fechaPedido");
        const destadoPedido = document.getElementById("forms__Estado");
        const dfechaEnvio = document.getElementById("forms__fechaEnvio");
        const didCliente = document.getElementById("forms__idCliente");
        const didVendedor = document.getElementById("forms__idVendedor");
        
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
        function validateType() {
          let tipo = dType.value;
          bandera = false
        
          if (tipo.length == 0) {
            showModal("No deje los campos del Tipo vacios hermano");
          }
          else if (numbers.test(tipo)) {
            showModal("No se permiten numeros en el Tipo");
          }
          else if (symbols.test(tipo)) {
            showModal("No agregue caraceteres especiales en el Tipo");
          }
          else if (tipo == "jona puto") {
            showModal("Asi es")
          }
          else {
            bandera = true
          }
          return bandera;
        }
        function validateFechaPedido() {
          let bandera = false
          let fechaPetit = dfechaPedido.value;
        
          if (fechaPetit.length == 0) {
            showModal("No deje la Fecha vacía");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        function validateFechaEnvio() {
          let bandera = false
          let fechaE = dfechaEnvio.value;
        
          if (fechaE.length == 0) {
            showModal("No deje la Fecha vacía");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function validateIdVendedor() {
          let bandera = false
          let idV = didVendedor.value;
        
          if (idV.length == 0) {
            showModal("No deje el id del Vendedor vacio");
          }
          else if (symbols.test(idV)) {
            showModal("No se permiten simbolos en el id del Vendedor");
          }
          else if (spaces.test(idV)) {
            showModal("No se permiten espacios en el id del Vendedor");
          }
          else if (letters.test(idV)) {
            showModal("No se permiten letras en el id del Vendedor");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function validateIdCliente() {
          let bandera = false
          let idC = didCliente.value;
        
          if (idC.length == 0) {
            showModal("No deje el id del Cliente vacio");
          }
          else if (symbols.test(idC)) {
            showModal("No se permiten simbolos en el id del Cliente");
          }
          else if (spaces.test(idC)) {
            showModal("No se permiten espacios en el id del Cliente");
          }
          else if (letters.test(idC)) {
            showModal("No se permiten letras en el id del Cliente");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function validateState() {
          let bandera = false
          let state = destadoPedido.value;
        
          if (state.length == 0) {
            showModal("No deje el estado vacio");
          }
          else if (symbols.test(state)) {
            showModal("No se permiten simbolos en el estado");
          }
          else if (numbers.test(state)) {
            showModal("No se permiten numeros en el estado");
          }
          else if (spaces.test(state)) {
            showModal("No se permiten espacios en el estado");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        function validateId() {
          let bandera = false
          let id = dId.value;
        
          if (id.length == 0) {
            showModal("No deje el id vacio");
          }
          else if (symbols.test(id)) {
            showModal("No se permiten simbolos en el id");
          }
          else if (spaces.test(id)) {
            showModal("No se permiten espacios en el id");
          }
          else if (letters.test(id)) {
            showModal("No se permiten letras en el id");
          }
          else {
            bandera = true;
          }
          return bandera;
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
            showModal("No deje el nombre vacio");
          }
          else if (symbols.test(lastName)) {
            showModal("No se permiten simbolos en los apellidos");
          }
          else if (numbers.test(lastName)) {
            showModal("No se permiten simbolos en los apellidos");
          }
          else if (!spaces.test(lastName)) {
            showModal("Falta segundo apellido");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        
        
        function validateMail() {
          let email = dMail.value;
          let bandera = false
        
          if (email.length == 0) {
            showModal("No deje el e-mail vacio");
          }
          else if (email.includes(".") && email.includes("@")) {
            bandera = true;
          }
          else {
            showModal("El e-mail no es valido")
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
        
        function validateRfc() {
          let bandera = false
          let rfc = dRfc.value;
        
          if (rfc.length == 0) {
            showModal("No deje el RFC vacio");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        function validateMiddleName() {
          let bandera = false
          let middleName = dMiddleName.value;
        
          if (middleName.length == 0) {
            showModal("No deje el apelledo vacio");
          }
          else if (symbols.test(middleName)) {
            showModal("No se permiten simbolos en los apellidos");
          }
          else if (numbers.test(middleName)) {
            showModal("No se permiten simbolos en los apellidos");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function validateCredit() {
          let bandera = false
          let credit = dCredit.value;
        
          if (credit.length == 0) {
            showModal("No deje el credito vació");
          }
          else if (symbols.test(credit)) {
            showModal("No se permiten simbolos en el credito");
          }
          else if (spaces.test(credit)) {
            showModal("No ponga espacios en el credito");
          }
          else if (letters.test(credit)) {
            showModal("No ponga letras en el credito");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function validateDays() {
          let bandera = false
          let days = dDays.value;
        
          if (days.length == 0) {
            showModal("No deje los días para pagar vacios");
          }
          else if (symbols.test(days)) {
            showModal("No se permiten simbolos en los días para pagar");
          }
          else if (spaces.test(days)) {
            showModal("No ponga espacios en los días para pagar");
          }
          else if (letters.test(days)) {
            showModal("No ponga letras los días para pagar");
          }
          else {
            bandera = true;
          }
          return bandera;
        }
        
        function clickAdd() {
        
          if (dType == null && destadoPedido == null && dMiddleName == null) {
            if (validateName() && validateLastName() && validateMail() && validatePhone() && validateRfc() && validateCredit() && validateDays()) {
              form.submit();
        
            }
          } else if (destadoPedido == null && dMail == null && dMiddleName == null) {
            if (validateName() && validateType()) {
        
              form.submit();
        
            }
          }
          else if (dMail == null && destadoPedido == null && dType == null) {
            if (validateName() && validateMiddleName() && validateLastName()) {
        
              form.submit();
        
            }
          }
          else {
            if (validateFechaPedido() && validateState() && validateFechaEnvio() && validateIdCliente && validateIdVendedor) {
        
              form.submit();
        
            }
          }
        }
        
        
        function clickUpdate() {
          if (validateId() && validateName() && validateLastName() && validateMail() && validatePhone() && validateRfc() && validateCredit() && validateDays()) {
            showModal("Todos los datos estan correctos")
            form.submit();
          }
        }
        
        
        const updateButton = document.getElementsByClassName("update__buton");
        
        function getId() {
        
          console.log("come verga");
        }
        updateButton.addEventListener("click", getId);
        