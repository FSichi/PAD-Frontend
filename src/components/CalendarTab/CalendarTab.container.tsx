import { RangeCalendarTab as RangeCalendar } from './Elements/RangeCalendar';
import { DateCalendarTab as DateCalendar } from './Elements/DateCalendar';

export interface Props {
    setDateValue: any;
    label?: string;
    rangeDate?: boolean;
    fullTriggerWidth?: boolean;
    customContainerStyles?: string;
}

export const CalendarTabContainer = (props: Props) => {
    const { fullTriggerWidth = false, customContainerStyles = '', rangeDate = true } = props;

    const childProps = {
        ...props,
        fullTriggerWidth,
        customContainerStyles,
    };

    return rangeDate ? <RangeCalendar {...childProps} /> : <DateCalendar {...childProps} />;
};
