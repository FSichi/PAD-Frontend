import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Props<T, P = unknown> {
    name: string;
    endpoint: (data: P) => Promise<AxiosResponse<T>>;
    onSuccess?: (data: T) => void;
    onError?: (error: AxiosError) => void;
}

export const useAction = <T, P = unknown>({ name, endpoint, onSuccess, onError }: Props<T, P>) => {
    const { mutate, isPending, isError, error, data, isSuccess } = useMutation({
        mutationKey: [name],
        mutationFn: (data: P) => endpoint(data),
        onSuccess: (data: AxiosResponse<T>) => {
            onSuccess && onSuccess(data.data);
        },
        onError: (error: AxiosError) => {
            onError && onError(error);
        },
    });

    return {
        mutate,
        isLoading: isPending,
        isError,
        error: error as AxiosError,
        data: data?.data,
        isSuccess,
    };
};
