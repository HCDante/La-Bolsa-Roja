const btnPagar = document.getElementById("btn-pagar");
let Tabla = document.getElementById("Carrito");
let id = 0;
let carrito;
carrito = JSON.parse(localStorage.getItem("carrito"));



btnPagar.addEventListener("click", e => {
    console.log("Tst")
    e.preventDefault();
    let ebody = `
    <h1>Nombre: </h1>
    <br>
    <h1>Correo: </h1>
    <br>
    <h1>Telefono: </h1>
    <br>
    <h1>Mensaje: </h1>Pedido Confirmado`;
    Email.send({
        SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
        To: 'javadabbado@gmail.com',
        From: "javadabbado@gmail.com",
        Subject: "Pedido Confirmado",
        Body: ebody
    })

})


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
if(carrito.length==1){
    localStorage.removeItem("carrito")
}

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

