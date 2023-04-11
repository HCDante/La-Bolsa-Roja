const nombre = document.getElementById("name");
const email = document.getElementById("email");
const teléfono = document.getElementById("teléfono");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML ="";
    if(nombre.value.length <6){
        warnings +=`El nombre no es valido <br>`;
        enviar = "true";
    }
    if(!regexEmail.test(email.value)){
        warnings +=`El correo no es valido <br>`;
        enviar = true;

    }
    if(teléfono.value.length <10){
        warnings +=`El número teléfonico no es valido <br>`;
        enviar = true;
    }
    if(mensaje.value.length < 15){
        warnings += `Mensaje muy corto<br>`;
        enviar = true;
    }
    if (enviar){
        parrafo.innerHTML = warnings;
    }else {
        parrafo.innerHTML = "Mensaje enviado";
    }

})