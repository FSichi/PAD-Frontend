/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';

interface Props<T> {
    defaultValues?: T;
    validate?: (values: T) => boolean;
    submitAction?: (values: T) => void;
}

export const useForm = <T>({ defaultValues, validate, submitAction }: Props<T>) => {
    const [formData, setFormData] = useState<T>(defaultValues || ({} as T));
    const [isEdited, setIsEdited] = useState<boolean>(false);

    const handleChange = <K extends keyof T>(key: K, value: T[K]) =>
        setFormData(prevState => ({ ...prevState, [key]: value }));

    const validateFields = (): boolean =>
        validate
            ? validate(formData)
            : Object.values(formData as object).every(value => value !== '' && value !== undefined);

    const hasChanges = (): boolean =>
        validateFields() &&
        Object.keys(formData as object).some(
            key => formData[key as keyof T] !== (defaultValues || ({} as T))[key as keyof T],
        );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(validateFields() ? 'Validation approved' : 'Validation rejected');
        if (validateFields()) {
            submitAction && submitAction(formData);
        }
    };

    useEffect(() => {
        setIsEdited(hasChanges());
    }, [formData]);

    return { formData, handleChange, handleSubmit, isEdited };
};
