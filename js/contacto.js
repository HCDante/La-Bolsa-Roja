const Nombre = document.getElementById("textNombre");
const Email = document.getElementById("textEmail");
const Telef = document.getElementById("textTelef");
const Mensaje = document.getElementById("textMensaje");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML =""
    if(Nombre.value.length <6){
        warnings +=`El nombre no es valido <br>`
        enviar = "true"
    }
    if(!regexEmail.test(email.value)){
        warnings +=`El correo no es valido <br>`
        enviar = true

    }
    if(Telef.value.length <10){
        warnings +=`El número teléfonico no es valido <br>`
        enviar = true
    }
    if (enviar){
        parrafo.innerHTML = warnings
    }else {
        parrafo.innerHTML = "Mensaje enviado"
    }

})