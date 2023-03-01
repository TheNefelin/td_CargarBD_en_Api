# TD_CargarBD_En_API
> https://tecnochile.netlify.app/

Este proyecto esta relacionado con los siguentes proyectos de GitHub

* Cargar tus datos a la API
  https://github.com/TheNefelin/TD_CargarBD_en_Api.git
* Sitio Web: (Html5, CSS3, JS)
	https://github.com/TheNefelin/trabajo_grupal_03.git
* WebApi: (.NET Core 6 C#)
	https://github.com/TheNefelin/api.NetCore6_TalentoDigital.git
* Base de Datos: (SQL Server)
	https://github.com/TheNefelin/bd_Talento_Digital.git

# Importa tus Productos en
* https://slifer.bsite.net/index.html

> End Point
* TD_Categoria
* TD_Producto
* TD_Sucursal

> para importar se debe llenar el archivo productos.js sin dejar ningun campo vacio.

> el id NO es importante ya que es autoincrementable por lo cual puede permanecer en 0.

> es IMPORTANTE definir el **idSucursal** correspondiente a tu proyecto y que exista en la API, al igual que el **idCategoria**

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

