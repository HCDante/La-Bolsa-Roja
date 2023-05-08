const btnPagar = document.getElementById("btn-pagar");
let Tabla = document.getElementById("Carrito");
let id = 0;
let carrito;

if (localStorage.getItem("carrito") == null) {
    carrito=[{"id":0,
    "title":"Mini manta (20×20) asa al puño",
    "price":12.50,
    "inventary":7,
    "image":"../src/productos_prueba/manta_20X20_(2)_(1).png"},
    {"id":2,
    "title":"Mini termosellada (24×20×11) Verde",
    "categoria":"Bolsa",
    "price":7.50,
    "inventary":3,
    "image":"../src/productos_prueba/MINI_24X20X11_TERMOSELLADA_verde.png"
    },
    {"id":3,
    "title":"Mini termosellada (24×20×11) Amarillo",
    "categoria":"Bolsa",
    "price":7.50,
    "inventary":4,
    "image":"../src/productos_prueba/MINI_24X20X11_TERMOSELLADA_amarillo.png"
    },
    {"id":4,
    "title":"Mini termosellada (24×20×11) Rojo",
    "categoria":"Bolsa",
    "price":7.50,
    "inventary":5,
    "image":"../src/productos_prueba/MINI_24X20X11_TERMOSELLADA_rojo.png"
    }];
    

} else {

    carrito = JSON.parse(localStorage.getItem("carrito"));

}

actualizarTabla();

function actualizarTabla() {
    while (Tabla.firstChild) {
        Tabla.removeChild(Tabla.firstChild);
    }
    let total=0;
    carrito.forEach((element, index) => {
        let subtotal=element.inventary*element.price;
        total+=subtotal;
        let html = `
        <tr>
                  <td>${index+1}</td>
                  <td><img  src=${element.image} width="100 px" height="75 px"></td>
                  <td>${element.title}</td>
                  
                  <td>${element.price}</td>
                  <td>${element.inventary}</td>
                  <td>${subtotal}</td>
                  <td><button type="button" onclick="quitarProducto(${element.id})" class="btn btn-danger">Eliminar</button></td>
                </tr>        
        `;
        Tabla.insertAdjacentHTML("beforeend", html);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    let htmlTotal=`
    
    <tr>
    <td></td>
    <td></td>
    <td><strong>Total</strong></td>
    <td><strong>${total}</strong></td>
    </tr>
    `;
    Tabla.insertAdjacentHTML("beforeend", htmlTotal);
}


function quitarProducto(index) {
    // Eliminar el producto del inventario
    carrito.forEach((element, indx) => {
        if (element.id == index) {
            carrito.splice(indx, 1);
            actualizarTabla();
        }
    }
    );
}

// Obtener el elemento del texto
var textoElemento = document.getElementById('texto-maquina');
// Obtener el texto
var texto = textoElemento.innerHTML;
// Vaciar el contenido del elemento
textoElemento.innerHTML = '';

// Recorrer el texto y agregar cada letra con un retraso
for (var i = 0; i < texto.length; i++) {
  (function(i) {
    setTimeout(function() {
      textoElemento.innerHTML += texto.charAt(i);
    }, 75 * i); // El retraso en milisegundos entre cada letra
  })(i);
}

