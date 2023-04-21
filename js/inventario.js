const  ID_Producto = document.getElementById("ID");
const nombre = document.getElementById("name");
const descripcion = document.getElementById("description");
const precio = document.getElementById("price");
const imagen = document.getElementById("selection");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const btnEnviar = document.getElementById("btn-enviar");

//form.addEventListener("submit", e => { e.preventDefault()});

 console.log("Hola com estas");
btnEnviar.addEventListener("click", e => {
    console.log("Si entra a la funcion");
    e.preventDefault();
    let warnings = "";
    let agregar = false;
    //let regexPrice = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let regexPrice = /^\d/;
    parrafo.innerHTML = "";

    let trimID = ID_Producto.value.trim();
    let trimName = nombre.value.trim();
    let trimDescription = descripcion.value.trim();
    let trimPrice = precio.value.trim();
    //let trimSelection = imagen.value.trim();

    if (trimID.length <= 1) {
        warnings += `El código no es válido <br>`;
        agregar = "true";
        ID_Producto.style.border = "solid 0.15rem red";

    } else {
        ID_Producto.style.border = "solid 0.15rem green";
    }
    if (trimName.length <= 2) {
        warnings += `El nombre no es válido <br>`;
        agregar = "true";
        nombre.style.border = "solid 0.15rem red";

    } else {
        nombre.style.border = "solid 0.15rem green";
    }
    if (trimDescription.length < 15) {
        warnings += `Descripción muy corta<br>`;
        agregar = true;
        descripcion.style.border = "solid 0.15rem red";
    } else {
        descripcion.style.border = "solid 0.15rem green";
    }
    if (!regexPrice.test(trimPrice)||trimPrice==0) {
        warnings += `El precio no es válido <br>`;
        agregar = true;
        precio.style.border = "solid 0.15rem red";
    } else {
        precio.style.border = "solid 0.15rem green";
    }
    // Seccion para validar si un imagen fue subida !!!!PENDIENTE!!!!
    // if (trimSelection) {
    //     warnings += `No se ha seleccionado alguna imagen <br>`;
    //     agregar = "true";
    //     nombre.style.border = "solid 0.2rem red";

    // } else {
    //     nombre.style.border = "solid 0.2rem green";
    // }
    if (agregar) {
        parrafo.innerHTML = warnings;
    } else {

      parrafo.innerHTML =
      `<div  class="alert alert-success d-flex align-items-center" role="alert">
      <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
      <div>
          Mensaje enviado correctamente.
      </div>
   </div>`;
    }
});


let inventario;
let id=0;


  if (localStorage.getItem("productos") == null){
    fetch('./js/productos.json')
    .then(response => response.json())
    .then(data => {
      inventario=data;
      })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error);
    });

  }else{

    inventario=JSON.parse(localStorage.getItem("productos"));

  } 

  

function agregarProducto() {
    let title = document.getElementById("title").value;
    let price = Number(document.getElementById("price").value);
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    

      if (title !== "" && price !== "") {
      id = inventario.length+1;
           
        inventario.push({id:id,title: title, price: price, description: description, image: image});
        localStorage.setItem("productos",JSON.stringify(inventario));

        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image").value = "";
    }

    
}

/* 



let inventario=[{"id":1,
"title":"Caja 1",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/27.jpeg"},
{"id":2,
"title":"Caja 2",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/26.jpeg"},
{"id":3,
"title":"Caja 3",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/25.jpeg"},
{"id":4,
"title":"Caja 4",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/24.jpeg"},
{"id":5,
"title":"Caja 5",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/23.jpeg"},
{"id":6,
"title":"Caja 6",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/22.jpeg"},
{"id":7,
"title":"Caja 7",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/21.jpeg"},
{"id":8,
"title":"Caja 8",
"price":50,
"description":"Caja perfecta para accesorios diversos",
"image":"../src/productos/20.jpeg"},
{"id":9,
"title":"Bolsa 9",
"price":50,
"description":"Bolsa perfecta para accesorios diversos",
"image":"../src/productos/9.jpeg"},
{"id":10,
"title":"Bolsa 10",
"price":50,
"description":"Bolsa perfecta para accesorios diversos",
"image":"../src/productos/10.jpeg"}]


let id = inventario.length+1;

function agregarProducto() {
    let title = document.getElementById("title").value;
    let price = Number(document.getElementById("price").value);
    let description = document.getElementById("description").value;
    let image = '../src/productos/'+document.getElementById("image").value;
    
    

    if (title !== "" && price !== "") {
      
       
        inventario.push({id:id,title: title, price: price, description: description, image: image});

        
        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image").value = "";
    }
}





 */