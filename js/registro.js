const nombre = document.getElementById("name");
const email = document.getElementById("mail");
const tel = document.getElementById("telephone");
const password= document.getElementById("txtPassword");
const password2= document.getElementById("txtPassword2");
const btn = document.getElementById("button");
const parrafo = document.getElementById("warnings");
let user=[];


if (localStorage.getItem("Users") == null ) {
    localStorage.setItem("Users",JSON.stringify(user));
  } 
user=JSON.parse(localStorage.getItem("Users"));
let idGlobal;

btn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Se ingresa a la funcion");
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTel = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
    let regexPassword = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?@"]).*$/;

    parrafo.innerHTML = "";
    //Se crean variables para aplicarles trim()
    let trimName = nombre.value.trim();
    let trimEmail = email.value.trim();
    let trimTelef = tel.value.trim();
    let trimPassword = password.value.trim();
    let trimPassword2 = password2.value.trim();

    if (trimName.length <= 2) {
        warnings += `- El nombre no es válido <br>`;
        enviar = "true";
        nombre.style.border = "solid 0.2rem red";

    } else {
        nombre.style.border = "solid 0.2rem green";
    }
    if (!regexEmail.test(trimEmail)) {
        warnings += `- El correo no es válido <br>`;
        enviar = true;
        email.style.border = "solid 0.2rem red";
    } else {
        user.forEach(element => {
            if(element.mail==trimEmail ){
                warnings += `Correo ya registrado<br>`;
                enviar = "true";
                email.style.border = "solid 0.2rem red";
            }else{
email.style.border = "solid 0.2rem green";
}
           
        });
    }
    //if(tel.value.length <10)
    if (!regexTel.test(trimTelef)||trimTelef==0) {
        warnings += `- El número teléfonico no es válido <br>`;
        enviar = true;
        tel.style.border = "solid 0.2rem red";
    } else {
        user.forEach(element => {
            if( element.telefon==trimTelef){
                warnings += `Número ya registrado<br>`;
                enviar = "true";
                tel.style.border = "solid 0.2rem red";
            }else{
                tel.style.border = "solid 0.2rem green";
            }
           
        });
    }
    if (!regexPassword.test (trimPassword) ) { //Comparación de contraseñas con expresión regular.
        warnings += `- Contraseña no válida.<br>`;
        enviar = true;
        password.style.border = "solid 0.2rem red";
    } else {
        password.style.border = "solid 0.2rem green";
    }
    
    if (!(trimPassword==trimPassword2)|| trimPassword=="") {//Comparación de contraseñas entre sí.
        warnings += `- Las contraseñas no coinciden.<br>`;
        enviar = true;
        password.style.border = "solid 0.2rem red";
        password2.style.border = "solid 0.2rem red";
    } else {

        if((!regexPassword.test(trimPassword)) || (!regexPassword.test(trimPassword))){
        warnings += `Las contrasenas no cumplen con los requerimientos basicos`;
        password.style.border = "solid 0.2rem red";
        password2.style.border = "solid 0.2rem red";
        }else{
            password.style.border = "solid 0.2rem green";
        password2.style.border = "solid 0.2rem green";
        }
    }
    if (enviar) {
        parrafo.innerHTML = warnings;
    } else {
        idGlobal =user.length;
        user.push({id:idGlobal,name:trimName, mail: trimEmail, telefon:trimTelef, pass: trimPassword2});
        localStorage.setItem("Users",JSON.stringify(user));
    }
    borderTimeout();
});

function borderTimeout(){
    setTimeout( () => {
        nombre.style.border = "";
        email.style.border ="";
        tel.style.border ="";
        password.style.border ="";
        password2.style.border = "";
        parrafo.innerHTML = "";
    },6000);
}