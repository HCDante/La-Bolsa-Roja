const nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const password= document.getElementById("password");
const password2= document.getElementById("password2");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTel = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
    let regexPassword = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;

    parrafo.innerHTML = "";
    //Se crean variables para aplicarles trim()
    let trimName = nombre.value.trim();
    let trimEmail = email.value.trim();
    let trimTelef = tel.value.trim();
    let trimPassword = password.value.trim();
    let trimPassword2 = password2.value.trim();

    if (trimName.length <= 2) {
        warnings += `El nombre no es válido <br>`;
        enviar = "true";
        nombre.style.border = "solid 0.2rem red";

    } else {
        nombre.style.border = "solid 0.2rem green";
    }
    if (!regexEmail.test(trimEmail)) {
        warnings += `El correo no es válido <br>`;
        enviar = true;
        email.style.border = "solid 0.2rem red";
    } else {
        email.style.border = "solid 0.2rem green";
    }
    //if(tel.value.length <10)
    if (!regexTel.test(trimTelef)||trimTelef==0) {
        warnings += `El número teléfonico no es válido <br>`;
        enviar = true;
        tel.style.border = "solid 0.2rem red";
    } else {
        tel.style.border = "solid 0.2rem green";
    }
    if (!regexPassword.test (trimPassword) && !regexPassword.test (trimPassword2)) { //Comparación de contraseñas con expresión regular.
        warnings += `Contraseña no válida, debe contener mínimo 6 carácteres con al menos 1 mayúscula, 1 número y 1 carácter especial.<br>`;
        enviar = true;
        password.style.border = "solid 0.2rem red";
    } else {
        password.style.border = "solid 0.2rem green";
    }
    if (trimPassword===trimPassword2) {//Comparación de contraseñas entre sí.
        warnings += `Las contraseñas no coinciden.<br>`;
        enviar = true;
        password.style.border = "solid 0.2rem red";
    } else {
        password.style.border = "solid 0.2rem green";
    }
    if (enviar) {
        parrafo.innerHTML = warnings;
    } else {

    }

});
