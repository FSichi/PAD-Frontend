import { RangeDateValue } from 'utils/interfaces/filters.types';

export const getFormattedDate = (date: number): string => {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const getRangeCalendarDate = (value: any): RangeDateValue | undefined => {
    if (!value) return undefined;
    return {
        start: value?.start,
        end: value?.end,
    };
};
