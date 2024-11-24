import { CalendarTab } from 'components/CalendarTab';
import { FilterComponentProps } from 'utils/interfaces/filters.types';
import { useFilterValue } from 'hooks/useFilterValue';

export const CalendarFilter = ({ filter, handleSetFilter }: FilterComponentProps) => {
    const { setFilterValue } = useFilterValue({
        initialValue: undefined,
        filterType: 'date',
        updateFilter: value => handleSetFilter(filter, (value as string) || ''),
    });

    return (
        <CalendarTab
            key={filter.key}
            label={filter.label}
            rangeDate={false}
            setDateValue={setFilterValue}
            customContainerStyles={filter.containerStyles}
        />
    );
};
