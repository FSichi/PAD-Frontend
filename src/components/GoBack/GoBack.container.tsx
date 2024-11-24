import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GoBack } from './GoBack';

export interface Props {
    link: string;
}

export const GoBackContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <GoBack {...childProps} />;
};

export const MemoizedGoBackContainer = memo(GoBackContainer);
