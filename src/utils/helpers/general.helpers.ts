import i18n, { TranslationsKeys } from 'utils/i18n';
import { ISidebarRoutes } from 'utils/interfaces/routes.types';

export const areAllRoutesDisabled = (routes: ISidebarRoutes[]) => {
    return routes.every(route => route.active === false);
};

export const generalItemTranslation = (key: string, domain: TranslationsKeys) =>
    i18n.t(key, { ns: domain });
