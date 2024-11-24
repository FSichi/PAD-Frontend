import { QueryClient } from '@tanstack/react-query';
import { ICredentials } from 'db/interfaces/Authorization';
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { getQueryClient } from 'utils/helpers/api.helpers';
import { getCredentialsLocalStorage } from 'utils/helpers/credentials.helper';

interface IAuthContext {
    queryClient: QueryClient;
    credentials?: ICredentials;
    setCredentials: Dispatch<SetStateAction<ICredentials | undefined>>;
    areCredentialsVerified: boolean;
    checkIfCredentialsExists: () => boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const initialContext: IAuthContext = {
    queryClient: getQueryClient(),
    setCredentials: () => {},
    areCredentialsVerified: false, // Estado inicial: las credenciales no están verificadas
    checkIfCredentialsExists: () => false,
};

export const AuthContext = createContext<IAuthContext>(initialContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const queryClient = useMemo(() => getQueryClient(), []);
    const [credentials, setCredentials] = useState<ICredentials | undefined>(undefined);
    const [areCredentialsVerified, setAreCredentialsVerified] = useState<boolean>(false); // Nuevo estado para controlar si las credenciales están verificadas

    useEffect(() => {
        const credentials = getCredentialsLocalStorage();

        if (credentials) {
            // Simulación de la verificación de las credenciales
            // Agregar lógica adicional aquí para validar las credenciales si es necesario
            setCredentials(credentials);
            // Establecer que las credenciales están cargadas y verificadas
            setAreCredentialsVerified(true);
        } else {
            // El estado debe actualizarse para indicar que las credenciales están verificadas pero no están cargadas
            setAreCredentialsVerified(true);
        }
    }, []);

    const checkIfCredentialsExists = () => {
        const credentials = getCredentialsLocalStorage();
        return !!credentials;
    };

    return (
        <AuthContext.Provider
            value={{
                queryClient,
                credentials,
                setCredentials,
                areCredentialsVerified,
                checkIfCredentialsExists,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
