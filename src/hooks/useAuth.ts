import { useContext } from 'react';
import { AuthContext } from 'context/auth.context';
import {
    clearCredentialsLocalStorage,
    setCredentialsLocalStorage,
} from 'utils/helpers/credentials.helper';
import { ICredentials } from 'db/interfaces/Authorization';
import { useAction } from './db/useAction';
import AuthorizationService from 'db/services/auth/authorization.service';
import toast from 'react-hot-toast';
import { RoutesListPaths } from 'routes';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const { credentials, setCredentials } = useContext(AuthContext);
    const navigate = useNavigate();

    const { mutate } = useAction({
        name: 'Auth - Logout',
        endpoint: () => AuthorizationService.getLogout({ username: credentials?.user.email || '' }),
    });

    const logout = () => {
        mutate(null, {
            onSuccess: () => {
                navigate(RoutesListPaths.LOGIN, { replace: true });
                setCredentials(undefined);
                clearCredentialsLocalStorage();
                toast.success('Sesión cerrada correctamente');
            },
        });
    };

    const saveCredentials = (obj: ICredentials) => {
        setCredentials(obj);
        setCredentialsLocalStorage(obj);
    };

    return { credentials, logout, saveCredentials };
};
