import { FC, memo, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkRedirect } from './LinkRedirect';
import { RoutesListPaths } from 'routes';
import { TranslationsKeys } from 'utils/i18n';
import { CommonArrowIcon } from 'assets/icons';

export interface Props {
    icon?: FC<SVGProps<SVGSVGElement>>;
    text?: string;
    route: RoutesListPaths;
}

export const LinkRedirectContainer = (props: Props) => {
    const { t } = useTranslation(TranslationsKeys.COMMON);
    const { icon = CommonArrowIcon, text = t('action_table_view') } = props;

    const childProps = {
        ...props,
        icon,
        text,
        t,
    };

    return <LinkRedirect {...childProps} />;
};

export const MemoizedLinkRedirectContainer = memo(LinkRedirectContainer);
