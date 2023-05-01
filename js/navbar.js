document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

let prueba1=document.getElementById("prueba1");
let prueba2=document.getElementById("prueba2");

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
    prueba1.style="display: none";
    prueba2.style="display: none";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
    prueba1.style="display: flex";
    prueba2.style="display: flex";
}

