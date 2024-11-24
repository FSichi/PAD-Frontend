import { fetchPostFromService } from 'db/services/main.service';
import {
    LoginRequest,
    LoginResponse,
    LogoutRequest,
    LogoutResponse,
} from 'db/interfaces/Authorization';
import { AUTH_BASE_URL } from 'db/api/apiConstants';

const postService = <T>(endpoint: string, body: any) =>
    fetchPostFromService<T>({ baseURL: AUTH_BASE_URL, endpoint, data: body });

export default {
    getLogin: (body: LoginRequest) => postService<LoginResponse>('login', body),
    getLogout: (body: LogoutRequest) => postService<LogoutResponse>('logout', body),
};
