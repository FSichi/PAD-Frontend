import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { Calendar } from '@nextui-org/calendar';
import { today, getLocalTimeZone } from '@internationalized/date';
import { CustomDropdown } from 'components/CustomDropdown';
import { CalendarSVG } from 'assets/icons';

export const DateCalendarTab = ({
    setDateValue,
    label,
    fullTriggerWidth,
    customContainerStyles,
}) => {
    const currentDate = useMemo(() => today(getLocalTimeZone()), []);
    const [internalValue, setInternalValue] = useState(currentDate);
    const [showCalendar, setShowCalendar] = useState(false);

    const CalendarTrigger = () => {
        return (
            <div
                className={`
                    ${fullTriggerWidth ? 'w-full' : 'w-40'} 
                    ${showCalendar && 'bg-ac-grey-1 border-ac-primary-main'} 
                    h-10 rounded-md border hover:border-ac-electrician focus-within:border-ac-electrician flex items-center hover:cursor-pointer 
                `}
                onClick={() => setShowCalendar(!showCalendar)}>
                <img src={CalendarSVG} alt="CalendarIcon" className="ml-3" />
                <div className="flex ml-5">
                    <p className="typography-body1-medium text-ac-marengo">{`${internalValue?.day}/${internalValue?.month}/${internalValue?.year}`}</p>
                </div>
            </div>
        );
    };

    return (
        <div className={`${customContainerStyles}`}>
            {label && (
                <p className="typography-indicator text-ac-pearlLightGray mb-[6px]">{label}</p>
            )}
            <CustomDropdown
                id="calendar-dropdown"
                placement="bottom-start"
                isOpen={showCalendar}
                onClose={() => setShowCalendar(false)}
                trigger={<CalendarTrigger />}>
                {showCalendar && (
                    <Calendar
                        value={internalValue}
                        onChange={newValue => {
                            setInternalValue(newValue);
                            setDateValue(newValue);
                        }}
                    />
                )}
            </CustomDropdown>
        </div>
    );
};

DateCalendarTab.propTypes = {
    setDateValue: PropTypes.func,
    label: PropTypes.string,
    fullTriggerWidth: PropTypes.bool,
    customContainerStyles: PropTypes.string,
};
