import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { RangeCalendar } from '@nextui-org/calendar';
import { today, getLocalTimeZone } from '@internationalized/date';
import { CustomDropdown } from 'components/CustomDropdown';
import { CalendarSVG } from 'assets/icons';

export const RangeCalendarTab = ({
    setDateValue,
    label,
    fullTriggerWidth,
    customContainerStyles,
}) => {
    const currentDate = useMemo(() => today(getLocalTimeZone()), []);
    const threeMonthsAgo = useMemo(() => currentDate.subtract({ months: 3 }), [currentDate]);

    const [flag, setFlag] = useState(false);

    const [internalValue, setInternalValue] = useState({
        start: threeMonthsAgo,
        end: currentDate,
    });

    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        if (!flag) {
            setDateValue(internalValue);
            setFlag(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [internalValue]);

    const CalendarTrigger = () => {
        return (
            <div
                className={`
                    ${fullTriggerWidth ? 'w-full' : 'w-56'} 
                    ${showCalendar && 'bg-ac-grey-1 border-ac-primary-main'} 
                    h-10 rounded-md border hover:border-ac-electrician focus-within:border-ac-electrician flex items-center hover:cursor-pointer 
                `}
                onClick={() => setShowCalendar(!showCalendar)}>
                <img src={CalendarSVG} alt="CalendarIcon" className="ml-3" />
                <div className="flex ml-3">
                    <p className="typography-body1-medium text-ac-marengo">{`${internalValue.start?.day}/${internalValue.start?.month}/${internalValue.start?.year}`}</p>
                    <p className="mx-2 typography-body1-medium text-ac-marengo">-</p>
                    <p className="typography-body1-medium text-ac-marengo">{`${internalValue.end?.day}/${internalValue.end?.month}/${internalValue.end?.year}`}</p>
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
                    <RangeCalendar
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

RangeCalendarTab.propTypes = {
    setDateValue: PropTypes.func,
    label: PropTypes.string,
    fullTriggerWidth: PropTypes.bool,
    customContainerStyles: PropTypes.string,
};
