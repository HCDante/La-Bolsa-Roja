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