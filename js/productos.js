let productos;
let cardGroup = document.getElementsByClassName("row");
let carrito=[];
let cantidad;

function agregarAlCarrito(idk) {
  if (localStorage.getItem("carrito") == null) {
    
      let id = productos[idk].id;
      let title = productos[idk].title;
      let price= productos[idk].price;
      let image = productos[id].image;
      let cantidad = document.getElementById(`cantidad${idk}`)
      localStorage.setItem("carrito",JSON.stringify([{id: id, title: title, price: price,inventary:cantidad.value, image: image }]));
      carrito = JSON.parse(localStorage.getItem("carrito"));


  }else{ 
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let id = productos[idk].id;
  let title = productos[idk].title;
  let price= productos[idk].price;
  let image = productos[id].image;
  let cantidad = document.getElementById(`cantidad${idk}`)
  cantidad.value
  carrito.push({ id: id, title: title, price: price,inventary:cantidad.value, image: image });
  localStorage.setItem("carrito",JSON.stringify(carrito));
}
}

if (localStorage.getItem("productos") == null && cardGroup[0].childElementCount === 0) {
  /* let promesa= */fetch('./js/productos.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("productos", JSON.stringify(data));
      productos = data;
      data.forEach(element => {
        let html =
          `<div class="col ">
                    <div class="card h-350 ">
                        <img  src=${element.image} class="card-img-top card-image">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <button type="button" class="btn btn-danger" href="#openModal${index}">
                                
                <a href="#openModal${index}" data-bs-toggle="modal" style="color: white">Ver ítem</a>
                </button>
                                </div>
                        </div> </div>
    
    
    


                        <div class="modal" tabindex="-1" id="openModal${index}">
                        <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">${element.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <br><p>
                            <img  src=${element.image} class="card-img-top card-image">
                            </p>
                            <div class="input-group mb-3">
                              
                              <input type="number" placeholder="" class="form-control" aria-label="cantidad"
                                id="cantidad${index}" min="1" max="5" value="1">
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" id="button3" class="btn btn-danger" data-target="#pwdModal" data-toggle="modal" >Añadir al Carrito</button>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    `;
        cardGroup[0].insertAdjacentHTML("beforeend", html);
      });
    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error);
    });
} else {
  productos = JSON.parse(localStorage.getItem("productos"));
  productos.forEach((element,index) => {
    let html =
      `<div class="col ">
                    <div class="card h-350 ">
                        <img  src=${element.image} class="card-img-top card-image">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class ="card-text">${element.description}</p>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#openModal${index}">
                                Ver ítem</button>
                </div>
        </div> </div>


        <div class="modal" tabindex="-1" id="openModal${index}">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${element.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <br><p>
            <img  src=${element.image} class="card-img-top card-image">
            </p>
            
<div class="row g-2">
  <div class="col-sm-6">
    <a>Precio: ${element.price}</a>
  </div>
  <div class="col-sm">
  <a>Cantidad: <input type="number" id="cantidad${index}" class="form-control" placeholder="" aria-label="State" value="1" max="5" min ="1"></a>
    
  </div>
</div>

          </div>
          <div class="modal-footer">
            <button type="button" id="button3" class="btn btn-danger" data-bs-dismiss="modal" onclick="agregarAlCarrito(${index})" >Añadir al Carrito</button>
          
          </div>
        </div>
      </div>
    </div>
                    `;
    cardGroup[0].insertAdjacentHTML("beforeend", html);
  });
}