import { useTranslation } from 'react-i18next';
import { Tab } from 'utils/interfaces/general.types';
import { CustomTabs } from './CustomTabs';
import { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { getButtonPosition, getTabsPosition } from 'utils/helpers/table.helpers';

export interface Props {
    valueSelected: any;
    changeValue: (value: any) => void;
    tabs: Tab[];
    buttonStyle: boolean;
    variant?: 'dark' | 'light';
    format?: 'rounded' | 'squared';
    customStyles?: string;
    titlePosition?: string;
}

export const CustomTabsContainer = (props: Props) => {
    const { t } = useTranslation();
    const { tabs, valueSelected, customStyles, variant, format, buttonStyle } = props;

    const [borderStyles, setBorderStyles] = useState({ width: 0, left: 0 });
    const x = useMotionValue(0);

    useEffect(() => {
        let indexPosition = 0;

        const selectedTab = tabs.find((tab, index) => {
            indexPosition = index;
            return tab.value === valueSelected;
        });

        if (selectedTab) {
            const newPosition = buttonStyle
                ? getButtonPosition(tabs, indexPosition)
                : getTabsPosition(tabs, valueSelected);

            setBorderStyles({
                width: selectedTab.width || 0,
                left: newPosition,
            });
            animate(x, newPosition, { type: 'spring', stiffness: 300, damping: 30 });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSelected]);

    // console.log(borderStyles);

    const elementsForClass = {
        variant,
        tabsNumber: tabs.length,
        customStyles,
        format,
    };

    const childProps = {
        ...props,
        t,
        elementsForClass,
        borderStyles,
        x,
    };

    return <CustomTabs {...childProps} />;
};
