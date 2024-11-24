export interface LSCredentials {
    token: string;
}

export interface ICredentials {
    token: string;
    expiracion: string;
    username: string | null;
    role: string | null;
    idVendedor: number;
    idSucursal: number;
    idPuntoDeVenta: number;
}

/* API: [ /login ] */

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    expiracion: string;
    username: string | null;
    role: string | null;
    idVendedor: number;
    idSucursal: number;
    idPuntoDeVenta: number;
}

/* API: [ /logout ] */

export interface LogoutRequest {
    username: string;
}

export interface LogoutResponse {}
