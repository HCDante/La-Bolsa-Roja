let productos = [
    {"id":1,
    "title":"Caja 1",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/27"},
    {"id":2,
    "title":"Caja 2",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/26"},
    {"id":3,
    "title":"Caja 3",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/25"},
    {"id":4,
    "title":"Caja 4",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/24"},
    {"id":5,
    "title":"Caja 5",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/23"},
    {"id":6,
    "title":"Caja 6",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/22"},
    {"id":7,
    "title":"Caja 7",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/21"},
    {"id":8,
    "title":"Caja 8",
    "price":50,
    "description":"Caja perfecta para accesorios diversos",
    "image":"../src/productos/20"},
    {"id":9,
    "title":"Bolsa 9",
    "price":50,
    "description":"Bolsa perfecta para accesorios diversos",
    "image":"../src/productos/9"},
    {"id":10,
    "title":"Bolsa 10",
    "price":50,
    "description":"Bolsa perfecta para accesorios diversos",
    "image":"../src/productos/10"},
];

let cardGroup = document.getElementsByClassName("row");

function getProducto(){
    let promesa = fetch("https://fakestoreapi.com/products",{
        method: "GET"
    });
    promesa.then( (response) => {
        response.json().then( (prods) => {
            prods.forEach(element => {
                let html= 
                    `<div class="col">
                        <div class="card h-350">
                            <img src=${element.image} class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class ="card-text">${element.description}</p>
                                    <button type="button" class="btn btn-primary">Primary</button>
                                </div>
                        </div> 
                    </div>`;
                cardGroup[0].insertAdjacentHTML("beforeend", html);
            });
        })//then json
        .catch( (err) => {
            console.error("Error en el formato de productos");
        });//catch json
    })//then response
    .catch( (err) => {
        console.error("Error en la respuesta de API");
    });
}
getProducto();