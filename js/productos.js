let productos;
let cardGroup = document.getElementsByClassName("row");

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
                                <p class ="card-text">${element.description}</p>
                                <button type="button" class="btn btn-danger">Ver ítem</button>
                            </div>
                    </div> </div>
                    `;
        cardGroup[0].insertAdjacentHTML("beforeend", html);
      });
    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error);
    });
} else {
  productos = JSON.parse(localStorage.getItem("productos"));
  productos.forEach(element => {
    let html =
      `<div class="col ">
                    <div class="card h-350 ">
                        <img  src=${element.image} class="card-img-top card-image">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class ="card-text">${element.description}</p>
                                <button type="button" class="btn btn-danger">Ver ítem</button>
                            </div>
                    </div> </div>
                    `;
    cardGroup[0].insertAdjacentHTML("beforeend", html);
  });
}