const btnPagar = document.getElementById("btn-pagar");
let Tabla = document.getElementById("Carrito");
let contain = document.getElementById("contain");
const parrafo = document.getElementById("warnings");
let id = 0;
let carrito;
carrito = JSON.parse(localStorage.getItem("carrito"));

if (carrito == undefined) {

    contain.style.display = "none";
    parrafo.style = "color: red"
    parrafo.innerHTML = "Carrito vacío";
} else if (carrito.length > 0) {
    let html0 = `
<thead id="hd">
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Artículo</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
`;
    Tabla.insertAdjacentHTML("beforebegin", html0);
}

actualizarTabla();

btnPagar.addEventListener("click", e => {
    e.preventDefault();
    let nombr;
    let telefon;
    let aidi;
    let mail;
    if (carrito.length == 0) {
        contain.style.display = "none";
        parrafo.style = "color: red"
        parrafo.innerHTML = "Carrito vacío";


    } else if (carrito.length > 0) {
        let usr = JSON.parse(localStorage.getItem("UsuarioActivo"));
        if (usr == null) {
            nombr = "Invitado";
            telefon = "5512345678"
            aidi = -1;
            mail = "doe1199887766@66778899doe.doe"

        } else {
            nombr = usr.name;
            telefon = usr.telefon;
            aidi = usr.id;
            mail = usr.mail;
        }
        let tot=0;
        let pedidoDetails = "";
        carrito.forEach((producto, index) => {
            tot+=producto.price;
            pedidoDetails += `<li>${index + 1}. ${producto.title} - ${producto.inventary} x $${producto.price} = $${producto.inventary * producto.price}</li>`;
        });

        let ebodyCliente = `
        <h3>Estimado ${nombr}, gracias por comprar en La Bolsa Roja, aquí está el resumen de su pedido:</h3>
        <h3>No. de cliente: ${aidi}</h3>
        <h3>${mail}</h3>
        <h3>${telefon}</h3><br>
        <h3>Detalles del pedido: </h3>
        <ul>${pedidoDetails}</ul><br>
        <h3>Total: ${tot} MXN </h3>
        <p>Su pedido se está procesando.</p>`;

        let ebodyInterno = ebodyCliente+`<p style="color : red">Se ha enviado una copia al cliente.</p>
        `;

        Email.send({
            SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
            To: 'javadabbado@gmail.com',
            From: "javadabbado@gmail.com",
            Subject: "Pedido Confirmado",
            Body: ebodyInterno
        })

        Email.send({
            SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
            To: `${mail}`,
            From: "javadabbado@gmail.com",
            Subject: "Pedido Confirmado",
            Body: ebodyCliente
        })

        localStorage.removeItem("carrito");
        pedido = carrito;
        carrito = [];
        actualizarTabla();
        contain.style.display = "none";
        parrafo.innerHTML = `Pedido realizado con éxito<br>
        Se ha enviado la confirmación a:<br>
         ${mail}`;
        setTimeout(() => {
            parrafo.innerHTML = "Gracias por su compra";
        }, 8000);
        
    } else {
        contain.style.display = "none";
        parrafo.style = "color: red"
        parrafo.innerHTML = "Carrito vacío";

    }
})




function actualizarTabla() {
    while (Tabla.firstChild) {
        Tabla.removeChild(Tabla.firstChild);
    }
    let total = 0;
    carrito.forEach((element, index) => {
        let subtotal = element.inventary * element.price;
        total += subtotal;
        let html = `
        <tr>
                  <td>${index + 1}</td>
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

    let htmlTotal = `
        <tr>
    <td></td>
    <td></td>
    <td>Total</td>
    <td><strong>${total}</strong> MXN</td>
    </tr>
    `;
    Tabla.insertAdjacentHTML("beforeend", htmlTotal);
    btnPagar.style.display = "block";
}


function quitarProducto(index) {
    // Eliminar el producto del inventario
    carrito.forEach((element, indx) => {
        if (element.id == index) {
            if (carrito.length == 1) {
                localStorage.removeItem("carrito")
                carrito = [];
                btnPagar.click();

            } else {
                carrito.splice(indx, 1);
                actualizarTabla();
            }
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
    (function (i) {
        setTimeout(function () {
            textoElemento.innerHTML += texto.charAt(i);
        }, 75 * i); // El retraso en milisegundos entre cada letra
    })(i);
}

