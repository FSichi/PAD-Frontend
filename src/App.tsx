import { ReactNode } from 'react';
import { BrowserRouter as RRDProvider } from 'react-router-dom';
import { MainRoutes } from 'routes';
import { AuthProvider, DrawerProvider, PaginationProvider } from 'context';
import { QueryProvider } from 'QueryProvider';
import { Toaster } from 'react-hot-toast';

export const ChargeProviders = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <PaginationProvider>
                <QueryProvider>
                    <DrawerProvider>
                        <RRDProvider>{children}</RRDProvider>
                    </DrawerProvider>
                </QueryProvider>
            </PaginationProvider>
        </AuthProvider>
    );
};

export const App = () => {
    return (
        <ChargeProviders>
            <Toaster position="top-right" reverseOrder={false} />

            <MainRoutes />
        </ChargeProviders>
    );
};
