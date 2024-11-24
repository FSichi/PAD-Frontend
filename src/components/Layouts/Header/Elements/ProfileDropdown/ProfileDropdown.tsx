import { memo } from 'react';
import { Button } from 'components/Button';
import { CustomDropdown } from 'components/CustomDropdown';
import { DropdownArrowSVG } from 'assets/icons';
import { Props as ContainerProps, UserInfo } from './ProfileDropdown.container';
import { Styles, TriggerStyles } from './ProfileDropdown.styled';
import { ITranslate } from 'utils/interfaces/general.types';
import ImgProfile from 'assets/img/profile.png';

interface Props extends ContainerProps {
    t: ITranslate;
    userInfo: UserInfo;
    logout: () => void;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const ProfileDropdown = (props: Props) => {
    const { userInfo, logout, isOpen, setIsOpen } = props;

    const ProfileTrigger = memo(function ProfileTrigger() {
        return (
            <section className={TriggerStyles.profileContainer} onClick={() => setIsOpen(!isOpen)}>
                <img src={ImgProfile} alt="ProfileIMG" className={TriggerStyles.profileImg} />
                <img src={DropdownArrowSVG} alt="Arrow Dropdown" />
            </section>
        );
    });

    const ProfileBody = memo(function ProfileBody() {
        return (
            <section className={Styles.container}>
                <div>
                    <h1 className={Styles.userName}>{userInfo.name}</h1>
                    <h2 className={Styles.userEmail}>{userInfo.role}</h2>
                </div>
                <div className={Styles.logoutContainer}>
                    <Button
                        size="small"
                        variant="primary"
                        text={'Cerrar Sesión'}
                        // icon={LogoutSVG}
                        customStyles={`${Styles.button}`}
                        width="custom"
                        customWidth="w-40 mx-4"
                        onClick={logout}
                    />
                </div>
            </section>
        );
    });

    return (
        <CustomDropdown
            id="profileDropdown"
            placement="bottom"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            trigger={<ProfileTrigger />}>
            <ProfileBody />
        </CustomDropdown>
    );
};
