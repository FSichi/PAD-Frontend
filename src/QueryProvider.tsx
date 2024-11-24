import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthContext } from 'context/auth.context';
import { ReactNode, useContext } from 'react';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const { queryClient } = useContext(AuthContext);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
