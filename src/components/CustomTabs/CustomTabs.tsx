/* eslint-disable react/prop-types */
import { motion, MotionValue } from 'framer-motion';
import { StylesForButton, StylesForTitle } from './CustomTabs.styled';
import { Props as ContainerProps } from './CustomTabs.container';

export interface Props extends ContainerProps {
    elementsForClass: {
        variant: 'dark' | 'light' | undefined;
        tabsNumber: number;
        customStyles: string | undefined;
        format: 'rounded' | 'squared' | undefined;
    };
    borderStyles: {
        width: number;
        left: number;
    };
    x: MotionValue<number>;
}

export const CustomTabs = (props: Props) => {
    const {
        changeValue,
        valueSelected,
        tabs,
        variant,
        buttonStyle,
        titlePosition,
        elementsForClass,
        borderStyles,
        x,
    } = props;

    const Styles = StylesForButton(elementsForClass);
    const TitleStyles = StylesForTitle(titlePosition);

    const ButtonTabStyles = () => {
        return (
            <section className={Styles.container}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${Styles.tab} ${
                            valueSelected === tab.value
                                ? Styles.tabSelected
                                : variant === 'dark'
                                  ? Styles.tabUnselectedDark
                                  : Styles.tabUnselectedLight
                        }`}
                        onClick={() => changeValue(tab.value)}
                        style={{ zIndex: 2, position: 'relative' }}>
                        {tab.label}
                    </button>
                ))}

                <motion.div
                    style={{
                        marginTop: '-28px',
                        borderRadius: '6px',
                        height: '28px',
                        width: `${borderStyles.width}px`,
                        background: 'white',
                        position: 'absolute',
                        zIndex: 1,
                        x,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            </section>
        );
    };

    const TitleTabStyles = () => (
        <>
            <section className={TitleStyles.container}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => changeValue(tab.value)}
                        className={TitleStyles.titleContainer}>
                        <p
                            className={`${valueSelected === tab.value ? TitleStyles.titleActive : TitleStyles.titleDisabled} ${TitleStyles.titleBase}`}>
                            {tab.label}
                        </p>
                    </div>
                ))}
            </section>

            <motion.div
                style={{
                    borderRadius: '10px',
                    height: '2px',
                    width: `${borderStyles.width}px`,
                    background: '#000000',
                    position: 'relative',
                    marginTop: '-30px',
                    x,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
        </>
    );

    return buttonStyle ? <ButtonTabStyles /> : <TitleTabStyles />;
};
