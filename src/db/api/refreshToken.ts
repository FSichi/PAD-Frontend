/* eslint-disable camelcase */
import axios from 'axios';
import {
    getCredentialsLocalStorage,
    setCredentialsLocalStorage,
} from 'utils/helpers/credentials.helper';
import { V_BASE_URL } from 'utils/constants/envVarConstants';

export const refreshAccessToken = async () => {
    const credentials = getCredentialsLocalStorage();

    const response = await axios.post(
        `${V_BASE_URL}/v1/auth/users/refresh-token`,
        {
            refresh_token: credentials!.auth.refresh_token,
        },
        {
            headers: {
                'Cache-Control': 'private, max-age=31536000, no-cache',
            },
        },
    );

    const { access_token } = response.data;

    const newCredentials = {
        auth: {
            ...credentials?.auth!,
            access_token,
        },
        user: credentials?.user!,
        company: credentials?.company!,
    };

    setCredentialsLocalStorage(newCredentials);

    return access_token;
};
