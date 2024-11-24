import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Props as ContainerProps } from './CustomDropdown.container';
import { RefObject } from 'react';

interface Props extends ContainerProps {
    Trigger: JSX.Element;
    dropdownRef: RefObject<HTMLDivElement>;
}

export const CustomDropdown = (props: Props) => {
    const { children, placement, id, isOpen, onClose, Trigger, dropdownRef } = props;

    return (
        <Popover placement={placement} isOpen={isOpen} onClose={onClose} ref={dropdownRef}>
            <PopoverTrigger id={id}>{Trigger}</PopoverTrigger>
            <PopoverContent className={`${id !== 'calendar-dropdown' && 'rounded-md'} p-0`}>
                {children}
            </PopoverContent>
        </Popover>
    );
};
