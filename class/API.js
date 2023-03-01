export class API {
    #url;

    constructor() {
        this.#url = "https://slifer.bsite.net"
    }

    async getSucursales() {
        const res = await fetch(`${this.#url}/td-sucursal`);
        const data = await res.json();
        return data;
    };

    async getCategorias() {
        const res = await fetch(`${this.#url}/td-categoria`);
        const data = await res.json();
        return data;
    };

    async getProductosByIdCateg(id) {
        id = id ? id : 0;
        const res = await fetch(`${this.#url}/td-producto/idSucursal/${id}`);
        const data = await res.json();
        return data;
    };

    async setProducto(producto) {
        const res = await fetch(`${this.#url}/td-producto`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
    };
};