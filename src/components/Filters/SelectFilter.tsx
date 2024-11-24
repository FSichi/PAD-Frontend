import { SelectInput } from 'components/Inputs/SelectInput';
import { SelectOptionType } from 'utils/interfaces/general.types';
import { FilterComponentProps } from 'utils/interfaces/filters.types';
import { useFilterValue } from 'hooks/useFilterValue';

export const SelectFilter = ({ filter, handleSetFilter }: FilterComponentProps) => {
    const { filterValue, setFilterValue } = useFilterValue({
        // initialValue: filter.selectProperties?.defaultValue,
        initialValue: undefined,
        filterType: 'select',
        updateFilter: value =>
            handleSetFilter(filter, (value as SelectOptionType)?.value as string),
    });

    return (
        <SelectInput
            key={filter.key}
            label={filter.label}
            placeholder={filter.selectProperties?.placeholder}
            value={filterValue as SelectOptionType}
            onChange={setFilterValue}
            defaultValue={filter.selectProperties?.defaultValue}
            options={filter.selectProperties?.options || []}
            isSerchable={filter.selectProperties?.isSerchable}
            menuSize={filter.selectProperties?.menuSize}
            containerStyles={filter.containerStyles}
        />
    );
};
