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
        let ebody = `
    <h1>Nombre: </h1>${nombre.value}
    <br>
    <h1>Correo: </h1>${email.value}
    <br>
    <h1>Telefono: </h1>${teléfono.value}
    <br>
    <h1>Mensaje: </h1>${mensaje.value}
    `;
    Email.send({
        SecureToken : "2beb6908-098a-4ce9-8217-645950d7272e",
        To : 'javadabbado@gmail.com',
        From : "javadabbado@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
        parrafo.innerHTML = "Mensaje enviado"
    }

})