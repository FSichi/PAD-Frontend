import { AxiosResponse } from 'axios';

type methodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type FetchResponse<T> = Promise<AxiosResponse<GetResponse<T>>>;

interface BaseFetchParams {
    baseURL: string;
    endpoint: string;
}

export interface FetchParams extends BaseFetchParams {
    method?: methodType;
    param?: string;
    data?: any;
}

export interface FetchGetParams extends BaseFetchParams {
    param?: string;
}

export interface FetchPostParams<T> extends BaseFetchParams {
    data: T;
}

export interface FetchPutParams<T> extends FetchGetParams {
    data: T;
}

export interface FetchPatchParams<T> extends FetchGetParams {
    data: T;
}

export interface FetchDeleteParams extends FetchGetParams {}

export interface GetResponse<T> {
    page?: number;
    pageSize?: number;
    total?: number;
    data: T;
}

export type QueueMethods = Array<{
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
}>;
