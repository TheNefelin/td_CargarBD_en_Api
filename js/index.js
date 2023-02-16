import { API } from "../class/API.js"
import { productos } from "../data/productos.js"

const api = new API

const sucursales = api.getSucursales()
sucursales
.then(data => {
    const obj = document.querySelector(".listaSucursal");
    obj.innerHTML = ""
    data.map(e => {
        const div = document.createElement("div");
        div.innerText = `id = ${e.id} Nombre = ${e.nombre}`
        obj.appendChild(div);
    });
});
 
const categorias = api.getCategorias()
categorias
.then(data => {
    const obj = document.querySelector(".ListaCategoria");
    obj.innerHTML = ""
    data.map(e => {
        const div = document.createElement("div");
        div.innerText = `id = ${e.id} Nombre = ${e.nombre}`
        obj.appendChild(div);
    });
});

const btnVerProductos = document.querySelector("#btnVerProductos");
btnVerProductos.addEventListener("click", () => {
    const txtIdSucursal = document.querySelector("#txtIdSucursal")
    const productos = api.getProductosByIdCateg(txtIdSucursal.value)
    productos
    .then(data => {
        const obj = document.querySelector(".infoApi");
        obj.innerHTML = ""
        data.map(e => {
            const div = document.createElement("div");
            div.innerText = `id = ${e.id} Nombre = ${e.nombre}`
            obj.appendChild(div);
        });
    });
});

const btnCargarJSON = document.querySelector("#btnCargarJSON");
btnCargarJSON.addEventListener("click", () => {
    const obj = document.querySelector(".infoApi");
    obj.innerHTML = ""

    productos.forEach(e => {
        const nuevoProducto = {
            id: 0,
            nombre: e.nombre,
            precio: e.precio,
            link: e.link,
            stock: e.stock,
            etiqueta: e.etiqueta,
            descripcion: e.descripcion,
            idCategoria: e.idCategoria,
            idSucursal: e.idSucursal
        }

        api.setProducto(nuevoProducto);

        const div = document.createElement("div");
        div.innerText = `add - ${e.nombre}`
        obj.appendChild(div);
    });
});