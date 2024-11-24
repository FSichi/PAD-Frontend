import {
    CategoriaRequest,
    CategoriaResponse,
    ColorRequest,
    ColorResponse,
    MarcaRequest,
    MarcaResponse,
    TalleRequest,
    TalleResponse,
    TipoTalleRequest,
    TipoTalleResponse,
} from 'db/interfaces/Complements';
import {
    fetchGetFromService,
    fetchPostFromService,
    fetchPutFromService,
} from 'db/services/main.service';

const getService = <T>(endpoint: string, param?: string) =>
    fetchGetFromService<T>({ baseURL: '', endpoint, param });

const postService = <T>(endpoint: string, body: any) =>
    fetchPostFromService<T>({ baseURL: '', endpoint, data: body });

const putService = <T>(endpoint: string, body: any) =>
    fetchPutFromService<T>({ baseURL: '', endpoint, data: body });

export default {
    getColors: (params?: string) => getService<ColorResponse[]>('/Color', params),
    getCategorias: (params?: string) => getService<CategoriaResponse[]>('/Categoria', params),
    getMarcas: (params?: string) => getService<MarcaResponse[]>('/Marca', params),
    getTipoTalles: (params?: string) => getService<TipoTalleResponse[]>('/TipoTalle', params),
    getTalles: (params?: string) => getService<TalleResponse[]>('/Talle', params),

    createColor: (body: ColorRequest) => postService<string>('/Color', body),
    createCategoria: (body: CategoriaRequest) => postService<string>('/Categoria', body),
    createMarca: (body: MarcaRequest) => postService<string>('/Marca', body),
    createTipoTalle: (body: TipoTalleRequest) => postService<string>('/TipoTalle', body),
    createTalle: (body: TalleRequest) => postService<string>('/Talle', body),

    updateColor: (body: ColorRequest) => putService<string>('/Color', body),
    updateCategoria: (body: CategoriaRequest) => putService<string>('/Categoria', body),
    updateMarca: (body: MarcaRequest) => putService<string>('/Marca', body),
    updateTipoTalle: (body: TipoTalleRequest) => putService<string>('/TipoTalle', body),
    updateTalle: (body: TalleRequest) => putService<string>('/Talle', body),
};
