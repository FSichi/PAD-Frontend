import { useCallback, useContext, useEffect } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { GetResponse } from 'db/interfaces/Main';
import { PaginationContext } from 'context/pagination.context';
// import { AuthContext } from 'context/auth.context';
import { GC_TIME, STALE_TIME } from 'utils/helpers/api.helpers';
// import { DISABLED_REFETCH } from 'db/api/apiConstants';

interface Props<T, TAdapted = T> {
    name: string;
    queryFilter?: string;
    endpoint: (param?: string) => Promise<AxiosResponse<GetResponse<T>, any>>;
    adapter?: (data: GetResponse<T>) => GetResponse<TAdapted>;
    enabled?: boolean;
    staleTime?: number;
    gcTime?: number;
    updatePagination?: boolean;
}

export const useGet = <T, TAdapted = T>({
    name,
    endpoint,
    adapter,
    queryFilter,
    enabled = true,
    staleTime = STALE_TIME,
    gcTime = GC_TIME,
    updatePagination = false,
}: Props<T, TAdapted>) => {
    const { updateDataLength } = useContext(PaginationContext);
    // const { queryClient } = useContext(AuthContext);
    // const [hasFetched, setHasFetched] = useState(false);

    const {
        data,
        isLoading,
        isFetching,
        isRefetching,
        refetch,
        isError,
        error,
        failureReason,
        isSuccess,
    }: UseQueryResult<GetResponse<TAdapted>, AxiosError> = useQuery({
        queryKey: [name, queryFilter],
        queryFn: () => endpoint(),
        enabled,
        staleTime,
        gcTime,
        select: data =>
            adapter ? adapter(data.data) : (data.data as unknown as GetResponse<TAdapted>), // Adaptador aplicado aquí
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    useEffect(() => {
        if (updatePagination) {
            updateDataLength(data?.total ?? 1);
        }
    }, [data, updatePagination, updateDataLength]);

    // useEffect(() => {
    //     if (hasFetched && !DISABLED_REFETCH.includes(name)) {
    //         queryClient?.removeQueries();
    //         refetch();
    //     } else {
    //         setHasFetched(true);
    //     }
    // }, [hasFetched, name, queryClient, refetch, setHasFetched]);

    return {
        data: data!, // Tipo de data ahora es TAdapted
        isLoading: (isLoading && isFetching) || isRefetching,
        failureReason,
        refetch: useCallback(refetch, [refetch]),
        isError,
        error,
        isSuccess,
    };
};
