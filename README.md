# Importa tus Productos en
* https://bsite.net/metalflap/index.html

> End Point
* TD_Categoria
* TD_Producto
* TD_Sucursal


> para importar se debe llenar el archivo productos.js sin dejar ningun campo vacio.

> el id no es importante ya que es autoincrementable por lo cual puede permanecer en 0.

> es importante definir el **idSucursal** correspondiente a tu proyecto y que exista en la API, al igual que el **idCategoria**

Ejemplo del Producto
```
    {
      id: 0,
      nombre: "The Witcher 3",
      precio: 59990,
      link: "../img/PS_01.jpg",
      stock: 10,
      etiqueta: "Witcher 3 Ubisoft rpg Play PlayStationstring",
      descripcion: "Un Manjar de Juego",
      idCategoria: 5,
      idSucursal: 1
    }
```

