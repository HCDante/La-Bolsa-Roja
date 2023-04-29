let nombre = document.getElementById("name");
let email = document.getElementById("email");
let teléfono = document.getElementById("teléfono");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");
let parrafo = document.getElementById("warnings");
let btnSend = document.getElementById("btn");


btnSend.addEventListener("click", e => {
    e.preventDefault();
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTel = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
    parrafo.innerHTML = "";
    //Se crean variables para aplicarles trim()
    let trimName = nombre.value.trim();
    let trimEmail = email.value.trim();
    let trimTelef = teléfono.value.trim();
    let trimMensaje = mensaje.value.trim();

    if (trimName.length <= 2) {
        warnings += `El nombre no es válido <br>`;
        enviar = "true";
        redBorder(nombre);
    } else {
        greenBorder(nombre);
    }
    if (!regexEmail.test(trimEmail)) {
        warnings += `El correo no es válido <br>`;
        enviar = true;
        redBorder(email);
    } else {
        greenBorder(email);
    }
    //if(teléfono.value.length <10)
    if (!regexTel.test(trimTelef)||trimTelef==0) {
        warnings += `El número telefónico no es válido <br>`;
        enviar = true;
        redBorder(teléfono);
    } else {
        greenBorder(teléfono);
    }
    if (trimMensaje.length < 12) {
        warnings += `Mensaje muy corto<br>`;
        enviar = true;
        redBorder(mensaje);
    } else {
        greenBorder(mensaje);
    }
    if (enviar) {
        parrafo.innerHTML = warnings;
    } else {
        let ebody = `
    <h1>Nombre: </h1>${trimName}
    <br>
    <h1>Correo: </h1>${trimEmail}
    <br>
    <h1>Telefono: </h1>${trimTelef}
    <br>
    <h1>Mensaje: </h1>${trimMensaje}
    `;
        Email.send({
            SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
            To: 'javadabbado@gmail.com',
            From: "javadabbado@gmail.com",
            Subject: "This is the subject",
            Body: ebody
        })
        parrafo.innerHTML =
            `<div  class="alert alert-success d-flex align-items-center" role="alert">
            <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Mensaje enviado correctamente.
            </div>
         </div>`;
    }

});

function greenBorder(input){
    input.style.border = "solid 0.2rem green";
}

function redBorder(input){
    input.style.border = "solid 0.2rem red";
}
