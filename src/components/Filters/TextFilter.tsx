import { useFilterValue } from 'hooks/useFilterValue';
import { useRef } from 'react';
import { FilterComponentProps } from 'utils/interfaces/filters.types';

const Styles = {
    container: `w-40 h-[40px] hover:border-ac-electrician focus-within:border-ac-electrician bg-ac-white border border-ac-grey-2 rounded-md hover:cursor-pointer`,
    inputContainer: 'flex mx-2 items-center',
    label: 'text-ac-pearlLightGray typography-indicator mb-[6px]',
    input: 'w-full h-full mt-[10px] bg-transparent focus:outline-none typography-body1-medium text-ac-platinumGray placeholder:text-ac-pearlLightGray hover:cursor-pointer',
};

export const TextFilter = ({ filter, handleSetFilter }: FilterComponentProps) => {
    const { filterValue, setFilterValue } = useFilterValue({
        initialValue: '',
        filterType: 'text',
        updateFilter: value => handleSetFilter(filter, value as string),
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputRef = () => inputRef.current?.focus();

    return (
        <div className={filter.containerStyles} onClick={handleInputRef}>
            {filter.label && <p className={Styles.label}>{filter.label}</p>}
            <div className={`${Styles.container}`}>
                <div className={Styles.inputContainer}>
                    <input
                        type="text"
                        ref={inputRef}
                        value={filterValue as string}
                        onChange={e => setFilterValue(e.target.value)}
                        placeholder="Buscar..."
                        className={Styles.input}
                    />
                </div>
            </div>
        </div>
    );
};
