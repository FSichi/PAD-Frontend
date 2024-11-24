import { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomSearch } from './CustomSearch';
import { FilterConfig, SetFilterValueType } from 'utils/interfaces/filters.types';
import { debounce } from 'utils/helpers/filter.helper';

export interface Props {
    handleSetFilter?: (filter: FilterConfig, value: SetFilterValueType) => void;
    placeholder?: string;
}

const filterSearchItem: FilterConfig = {
    key: 'searchText',
    type: 'text',
    label: 'search',
};

export const CustomSearchContainer = (props: Props) => {
    const { handleSetFilter } = props;
    const { t } = useTranslation();

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputRef = () => inputRef.current?.focus();

    const debouncedValueUpdate = useRef(
        debounce((value: string) => {
            handleSetFilter && handleSetFilter(filterSearchItem, value);
        }, 600),
    ).current;

    useEffect(() => {
        // handleSetFilter && handleSetFilter(filterSearchItem, value || '');
        handleSetFilter && debouncedValueUpdate(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const childProps = {
        ...props,
        t,
        inputRef,
        handleInputRef,
        setValue,
    };

    return <CustomSearch {...childProps} />;
};

export const MemoizedCustomSearchContainer = memo(CustomSearchContainer);
