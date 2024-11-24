import React, { memo } from 'react';
import { ElementCardInfo } from './ElementCardInfo';

export interface CardInfoData {
    title: string;
    value: string | number;
    description: string;
    descriptionColor?: string;
    ExtraComponent?: React.ComponentType;
}

type CardInfoType = 'training' | 'survey' | 'monitor';

export interface Props {
    type: CardInfoType;
    data: CardInfoData[];
}

export const ElementCardInfoContainer = (props: Props) => {
    const childProps = {
        ...props,
    };

    return <ElementCardInfo {...childProps} />;
};

export const MemoizedElementCardInfoContainer = memo(ElementCardInfoContainer);
