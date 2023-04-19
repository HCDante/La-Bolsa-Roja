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