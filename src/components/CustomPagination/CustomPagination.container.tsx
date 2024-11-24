import { useTranslation } from 'react-i18next';
import { CustomPagination } from './CustomPagination';

export interface Props {
    page: number;
    setPage: (page: number) => void;
    dataLength: number;
}

export const CustomPaginationContainer = (props: Props) => {
    const { page, setPage, dataLength } = props;
    const { t } = useTranslation();

    const handleDotsClick = (direction: 'left' | 'right') => {
        const delta = direction === 'left' ? -2 : 2;
        const newPage = Math.max(1, Math.min(page + delta, dataLength));
        setPage(newPage);
    };

    const childProps = {
        ...props,
        t,
        setPage,
        page,
        handleDotsClick,
    };

    return <CustomPagination {...childProps} />;
};
