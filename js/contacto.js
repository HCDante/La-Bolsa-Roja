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
    let regexTel = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
    parrafo.innerHTML ="";
    //Se crean variables para aplicarles trim()
    let trimName = nombre.value.trim();
    let trimEmail = email.value.trim();
    let trimTelef = teléfono.value.trim();
    let trimMensaje = mensaje.value.trim();

    if(trimName.length <=2){
        warnings +=`El nombre no es valido <br>`;
        enviar = "true";
        nombre.style.border = "solid 0.2rem red";

    }else{
        nombre.style.border = "solid 0.2rem green";
    }
    if(!regexEmail.test(trimEmail)){
        warnings +=`El correo no es valido <br>`;
        enviar = true;
        email.style.border = "solid 0.2rem red";
    }else{
        email.style.border = "solid 0.2rem green";
    }
    //if(teléfono.value.length <10)
    if(!regexTel.test(trimTelef)){
        warnings +=`El número teléfonico no es valido <br>`;
        enviar = true;
        teléfono.style.border = "solid 0.2rem red";
    }else{
        teléfono.style.border = "solid 0.2rem green";
    }
    if(trimMensaje.length < 15){
        warnings += `Mensaje muy corto<br>`;
        enviar = true;
        mensaje.style.border = "solid 0.2rem red";
    }else{
        mensaje.style.border = "solid 0.2rem green";
    }
    if (enviar){
        parrafo.innerHTML = warnings;
    }else {
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
        SecureToken : "2beb6908-098a-4ce9-8217-645950d7272e",
        To : 'javadabbado@gmail.com',
        From : "javadabbado@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
        parrafo.innerHTML = 
        `<div  class="alert alert-success d-flex align-items-center" role="alert">
            <svg  class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Mensaje enviado correctamente.
            </div>
         </div>`;
    }

});