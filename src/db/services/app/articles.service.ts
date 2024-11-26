import { ArticuloResponse, NewStock } from 'db/interfaces/Articles';
import { ColorRequest } from 'db/interfaces/Complements';
import {
    fetchGetFromService,
    fetchPostFromService,
    fetchPutFromService,
} from 'db/services/main.service';
import { V_BASE_URL } from 'utils/constants/envVarConstants';

const getService = <T>(endpoint: string, param?: string) =>
    fetchGetFromService<T>({ baseURL: V_BASE_URL, endpoint, param });

const postService = <T>(endpoint: string, body: any) =>
    fetchPostFromService<T>({ baseURL: '', endpoint, data: body });

const putService = <T>(endpoint: string, body: any) =>
    fetchPutFromService<T>({ baseURL: '', endpoint, data: body });

export default {
    getArticulosBase: (params?: string) =>
        getService<ArticuloResponse[]>('Articulo/getArticulosByFiltros', params),
    createArticuloBase: (body: ColorRequest) => postService<string>('/Articulo', body),
    updateArticuloBase: (body: ColorRequest) => putService<string>('/Articulo', body),

    getArticulosStock: (params?: string) =>
        getService<NewStock[]>('Inventario/getInventarioByCodigoBarra', params),
    createArticuloStock: (body: ColorRequest) => postService<string>('/Stock', body),
    updateArticuloStock: (body: ColorRequest) => putService<string>('/Stock', body),
};
