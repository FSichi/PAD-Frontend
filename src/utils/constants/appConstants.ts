import { generalItemTranslation } from 'utils/helpers/general.helpers';
import i18n, { TranslationsKeys } from 'utils/i18n';

export const tCommon = { ns: 'common' };
export const tErrorsContext = { ns: 'errors' };
export const tRequiredFieldError = i18n.t('required_field', { ns: 'errors' });

export const CopyrigthText = `Tiendita © ${new Date().getFullYear()} | ${generalItemTranslation('copyrigth', TranslationsKeys.COMMON)}`;

export const Lorem100 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi quos veritatis, ea commodi alias? Consectetur, libero ipsum! Cupiditate id laboriosam fugiat iste totam vitae maiores nihil maxime in magnam! Labore atque nisi saepe dolorum placeat ad in praesentium numquam id voluptatibus iure mollitia, minima architecto nulla tempora modi sint quo inventore recusandae. Quibusdam esse maiores iusto nisi consectetur assumenda id vitae. Nisi harum quibusdam placeat odit minus omnis similique, fuga eligendi enim nemo consequatur quasi id corporis, aspernatur molestias adipisci eos soluta laboriosam ipsam in? Porro ipsam quis autem accusantium, repellendus nisi doloremque hic? Iure perferendis saepe cupiditate consequuntur.`;

// export const DISABLED_REFETCH = ['queryName1', 'queryName2'];
export const DISABLED_POPOVER = ['calendar-dropdown', 'months-dropdown', 'select-account-dropdown'];

export const PinRegex = /^[0-9]{0,4}$/;
