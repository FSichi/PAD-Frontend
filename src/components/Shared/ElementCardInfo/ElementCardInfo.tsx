import { Props as ContainerProps } from './ElementCardInfo.container';
import { Card } from 'components/Card';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { MenuMonitorIcon, MenuSurveyIcon, MenuTrainingIcon } from 'assets/icons';
import Styles from './ElementCardInfo.styled';

interface Props extends ContainerProps {}

const icon = {
    training: MenuTrainingIcon,
    survey: MenuSurveyIcon,
    monitor: MenuMonitorIcon,
};

export const ElementCardInfo = (props: Props) => {
    const { type, data } = props;
    return (
        <div className="flex justify-between items-center w-full gap-3">
            {data.map(({ ExtraComponent, ...card }, index) => {
                const StylesFormatted = Styles({ descriptionColor: card.descriptionColor });
                return (
                    <Card
                        key={index}
                        border={false}
                        height={144}
                        fullWidth
                        customStyles="flex items-center gap-6 p-6">
                        <div className="size-[60px] rounded-full bg-[#F1F0FF] flex justify-center items-center">
                            <CustomIcon Icon={icon[type]} size={32} color="#7169FF" />
                        </div>
                        <div className="w-full">
                            <div className="flex flex-row items-center w-full">
                                <p className="text-cia-grey-dark text-sm">{card.title}</p>
                                {ExtraComponent && (
                                    <div className="relative ml-auto">
                                        <div className="absolute -top-2 right-4 w-36">
                                            <ExtraComponent />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="font-medium text-[40px] text-cia-grey-dark">
                                {card.value}
                            </p>
                            <p className={StylesFormatted.description}>{card.description}</p>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
