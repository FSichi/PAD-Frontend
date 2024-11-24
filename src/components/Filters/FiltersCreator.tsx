import { CustomSearch } from 'components/CustomSearch';
import {
    IFilterComponents,
    FilterConfig,
    HandleSetFilterType,
} from 'utils/interfaces/filters.types';
import { TextFilter, CalendarFilter, RangeCalendarFilter, SelectFilter } from './index';

interface Props {
    filters: FilterConfig[];
    handleSetFilter: HandleSetFilterType;
    hasItemSearch?: boolean;
    searchPlaceholder?: string;
}

const FilterComponents: IFilterComponents = {
    text: TextFilter,
    date: CalendarFilter,
    rangeDate: RangeCalendarFilter,
    select: SelectFilter,
};

export const FiltersCreator = ({
    filters,
    handleSetFilter,
    hasItemSearch = false,
    searchPlaceholder,
}: Props) => {
    return (
        <section className={'flex justify-between items-end'}>
            <div className="flex">
                {filters.map(filter => {
                    const FilterComponent = FilterComponents[filter.type];
                    return (
                        <FilterComponent
                            key={filter.key}
                            filter={filter}
                            handleSetFilter={handleSetFilter}
                        />
                    );
                })}
            </div>
            <div className="flex justify-end gap-4">
                {hasItemSearch && (
                    <CustomSearch
                        handleSetFilter={handleSetFilter}
                        placeholder={searchPlaceholder}
                    />
                )}
            </div>
        </section>
    );
};
