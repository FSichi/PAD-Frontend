import { AxiosResponse } from 'axios';
import { AppDataInstance } from 'db/api/axiosInstance';
import {
    FetchDeleteParams,
    FetchGetParams,
    FetchParams,
    FetchPatchParams,
    FetchPostParams,
    FetchPutParams,
    FetchResponse,
    GetResponse,
} from 'db/interfaces/Main';
import { createFormattedURL } from 'utils/helpers/api.helpers';

export const MainService = async <T>(
    request: () => Promise<AxiosResponse<T>>,
): Promise<AxiosResponse<T>> => {
    return await request();
};

export const fetchFromService = async <T>({
    baseURL,
    method = 'get',
    endpoint,
    param,
    data,
}: FetchParams): FetchResponse<T> => {
    const url = createFormattedURL(baseURL, endpoint, param);
    return await MainService<GetResponse<T>>(() => AppDataInstance[method](url, data));
};

export const fetchGetFromService = async <T>({
    baseURL,
    endpoint,
    param,
}: FetchGetParams): FetchResponse<T> =>
    fetchFromService<T>({ baseURL, method: 'get', endpoint, param });

export const fetchPostFromService = async <T>({
    baseURL,
    endpoint,
    data,
}: FetchPostParams<T>): FetchResponse<T> =>
    fetchFromService<T>({ baseURL, method: 'post', endpoint, data });

export const fetchPutFromService = async <T>({
    baseURL,
    endpoint,
    param,
    data,
}: FetchPutParams<T>): FetchResponse<T> =>
    fetchFromService<T>({ baseURL, method: 'put', endpoint, param, data });

export const fetchPatchFromService = async <T>({
    baseURL,
    endpoint,
    param,
    data,
}: FetchPatchParams<T>): FetchResponse<T> =>
    fetchFromService<T>({ baseURL, method: 'patch', endpoint, param, data });

export const fetchDeleteFromService = async <T>({
    baseURL,
    endpoint,
    param,
}: FetchDeleteParams): FetchResponse<T> =>
    fetchFromService<T>({ baseURL, method: 'delete', endpoint, param });
