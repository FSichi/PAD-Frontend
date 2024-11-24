import { CalendarTab } from 'components/CalendarTab';
import { FilterComponentProps } from 'utils/interfaces/filters.types';
import { getRangeCalendarDate } from 'utils/helpers/date.helpers';
import { useFilterValue } from 'hooks/useFilterValue';

export const RangeCalendarFilter = ({ filter, handleSetFilter }: FilterComponentProps) => {
    const { setFilterValue } = useFilterValue({
        initialValue: undefined,
        filterType: 'rangeDate',
        updateFilter: value => handleSetFilter(filter, getRangeCalendarDate(value) || ''),
    });

    return (
        <CalendarTab
            rangeDate
            setDateValue={setFilterValue}
            customContainerStyles={filter.containerStyles}
            key={filter.key}
            label={filter.label}
        />
    );
};
