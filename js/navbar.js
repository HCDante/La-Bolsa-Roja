document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

let prueba1=document.getElementsByClassName("prueba1");

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
    prueba1.style.display="none";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
    prueba1.style.display="flex";
}

