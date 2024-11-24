import { Props as ContainerProps } from './CustomPagination.container';
import Styles from './CustomPagination.styled';
import { Pagination, PaginationItemType, PaginationItemRenderProps } from '@nextui-org/pagination';
import { PaginationArrowSVG } from 'assets/icons';
import { useCallback } from 'react';
import { ITranslate } from 'utils/interfaces/general.types';

interface Props extends ContainerProps {
    t: ITranslate;
    handleDotsClick: (direction: 'left' | 'right') => void;
    page: number;
    setPage: (value: number) => void;
}

const ITEMS_PER_PAGE = 100;

export const CustomPagination = ({ page, setPage, handleDotsClick, dataLength }: Props) => {
    const renderItem = useCallback(
        ({ ref, key, value, isActive, onNext, onPrevious }: PaginationItemRenderProps) => {
            switch (value) {
                case PaginationItemType.PREV:
                    return (
                        <button
                            key={key}
                            onClick={onPrevious}
                            className={`${Styles.actionButtonContainer} mr-3`}>
                            <div className={Styles.actionButton}>
                                <img
                                    className="mr-1 size-3"
                                    src={PaginationArrowSVG}
                                    alt="PaginationPrev"
                                />
                                <p>Anterior</p>
                            </div>
                        </button>
                    );

                case PaginationItemType.NEXT:
                    return (
                        <button
                            key={key}
                            onClick={onNext}
                            className={`${Styles.actionButtonContainer} ml-3`}>
                            <div className={`${Styles.actionButton} ml-1`}>
                                <p>Siguiente</p>
                                <img
                                    className="rotate-180 mt-[1px] size-3 ml-1"
                                    src={PaginationArrowSVG}
                                    alt="PaginationPrev"
                                />
                            </div>
                        </button>
                    );

                case PaginationItemType.DOTS:
                    return (
                        <button
                            key={key}
                            onClick={() => handleDotsClick(key === 'dots-2' ? 'left' : 'right')}
                            className={Styles.dotsButton}>
                            ...
                        </button>
                    );

                default:
                    return (
                        <button
                            ref={ref}
                            key={key}
                            onClick={() => setPage(value)}
                            className={`${Styles.numberButton} ${isActive ? Styles.activeButton : Styles.disabledButton}`}>
                            {value}
                        </button>
                    );
            }
        },
        [handleDotsClick, setPage],
    );

    return (
        <Pagination
            page={page}
            onChange={setPage}
            dotsJump={2}
            disableCursorAnimation
            showControls
            total={Math.ceil(dataLength / ITEMS_PER_PAGE)}
            initialPage={1}
            renderItem={renderItem}
        />
    );
};
