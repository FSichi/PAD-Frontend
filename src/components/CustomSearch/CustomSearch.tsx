import { Props as ContainerProps } from './CustomSearch.container';
import { SearchIcon } from 'assets/icons';
import Styles from './CustomSearch.styled';
import { RefObject } from 'react';
import { ITranslate } from 'utils/interfaces/general.types';
import { CustomIcon } from 'components/Icon/CustomIcon';
// import { generalItemTranslation } from 'utils/helpers/general.helpers';
// import { TranslationKey } from 'utils/i18n';

interface Props extends ContainerProps {
    t: ITranslate;
    inputRef: RefObject<HTMLInputElement>;
    handleInputRef: () => void;
    setValue: (value: string) => void;
    placeholder?: string;
}

export const CustomSearch = (props: Props) => {
    const { handleInputRef, inputRef, setValue, placeholder } = props;

    return (
        <div
            className={`${Styles.searchContainer} ${Styles.commonContainer}`}
            onClick={handleInputRef}>
            <div className={Styles.searchInputContainer}>
                {/* <img src={SearchSVG} alt="Search Icon" className={Styles.searchImg} /> */}
                <CustomIcon
                    Icon={SearchIcon}
                    size={16}
                    color="#96969D"
                    className={Styles.searchImg}
                />
                <input
                    id="searchTicker"
                    ref={inputRef}
                    type="text"
                    onChange={e => setValue(e.target.value)}
                    placeholder={placeholder || 'Buscar...'}
                    className={`${Styles.searchInput} text-ac-platinumGray`}
                />
            </div>
        </div>
    );
};
