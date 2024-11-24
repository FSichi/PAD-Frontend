import { useContext, useMemo } from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { AuthContext } from 'context/auth.context';
import { Spinner } from 'components/Spinner';

export const MainRoutes = () => {
    const { credentials, areCredentialsVerified } = useContext(AuthContext);

    const isAuth = useMemo(() => {
        return !!credentials && areCredentialsVerified;
    }, [credentials, areCredentialsVerified]);

    if (!areCredentialsVerified) return <Spinner />;

    return isAuth ? <PrivateRoutes /> : <PublicRoutes />;
};
