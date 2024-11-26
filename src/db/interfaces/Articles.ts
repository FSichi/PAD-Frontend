export interface ArticuloResponse {
    id: number;
    descripcion: string;
    codigoBarras: string;
    costo: number;
    margenGanancia: number;
    precioFinal: number;
    netoGravado: number;
    porcentajeIVA: number;
    categoriaId: number;
    marcaId: number;
    marcaNombre: string;
    categoriaDescripcion: string;
}

export interface NewStock {
    idInventario: number;
    cantidad: number;
    idStock: number;
    stockColor: string;
    stockTalle: string;
    stockTalleTipoTalle: string;
    idArticulo: number;
    codigoBarra: string;
    articuloCategoria: string;
    articuloDescripcion: string;
    articuloMarca: string;
    idSucursal: number;
    nombreSucursal: string;
}

// export interface StockResponse {
//     id: number;
//     talle: {
//         id: number;
//         talleArticulo: string;
//         tipoTalle: {
//             id: number;
//             descripcion: string;
//         };
//     };
//     color: {
//         id: number;
//         nombre: string;
//     };
//     articulo: {
//         id: number;
//         descripcion: string;
//         codigoBarras: string;
//         costo: number;
//         margenGanancia: number;
//         precioFinal: number;
//         netoGravado: number;
//         porcentajeIVA: number;
//         state: boolean;
//         marca: {
//             id: number;
//             nombre: string;
//         };
//         categoria: {
//             id: number;
//             descripcion: string;
//         };
//     };
// }

export interface StockResponseFormatted {
    id: number;
    codigoBarras: string;
    descripcion: string;
    marca: string;
    categoria: string;
    tipoTalle: string;
    talle: string;
    color: string;
}
