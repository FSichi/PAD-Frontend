export interface ColorResponse {
    idColor: number;
    nombre: string;
}

export interface CategoriaResponse {
    idCategoria: number;
    descripcion: string;
}

export interface MarcaResponse {
    idMarca: number;
    nombre: string;
}

export interface TipoTalleResponse {
    idTipoTalle: number;
    descripcion: string;
}

export interface TalleResponse {
    idTalle: number;
    talleArticulo: string;
    idTipoTalle: number;
    descripcion: string;
}

/* ----- CREATE ------ */

export interface ColorRequest {
    idColor: number;
    nombre: string;
}

export interface CategoriaRequest {
    idCategoria: number;
    descripcion: string;
}

export interface MarcaRequest {
    idMarca: number;
    nombre: string;
}

export interface TipoTalleRequest {
    idTipoTalle: number;
    descripcion: string;
}

export interface TalleRequest {
    idTalle: number;
    talleArticulo: string;
    idTipoTalle: number;
    descripcion: string;
}
