import { useTranslation } from 'react-i18next';
import { ProfileDropdown } from './ProfileDropdown';
import { useMemo, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

export interface Props {}

export interface UserInfo {
    name: string | undefined;
    email: string | undefined;
    role: string | undefined;
}

export const ProfileDropdownContainer = (props: Props) => {
    const { t } = useTranslation('header');
    const [isOpen, setIsOpen] = useState(false);
    const { logout, credentials } = useAuth();

    const userInfo = useMemo(() => {
        return {
            name: credentials?.username || '-',
            email: credentials?.username || '-',
            role: credentials?.role || '',
        };
    }, [credentials]);

    const childProps = {
        ...props,
        t,
        logout,
        userInfo,
        isOpen,
        setIsOpen,
    };

    return <ProfileDropdown {...childProps} />;
};
