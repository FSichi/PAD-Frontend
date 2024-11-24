import * as React from 'react';
import PropTypes from 'prop-types';
import { InferPropsExtended } from 'utils/helpers/proptypesHelper';
import St from './TemplateName.styled';
import { Form, FormikProvider } from 'formik';
import ActionButton from 'components/common/ActionButton';
import { tCommon } from 'constants/appConstants';

const TemplateName = (props: Props) => {
    const { formik, t, isEdit, disabledForm, close } = props;

    return (
        <FormikProvider value={formik} data-testid="TemplateName-form">
            <Form>
                <St.ActionSectionForm direction="row" spacing={1}>
                    <ActionButton onClick={close} variant="outlined">
                        {t('cancel', tCommon)}
                    </ActionButton>
                    <ActionButton
                        size="medium"
                        type="submit"
                        disabled={isEdit ? disabledForm : false}
                        color="primary"
                        variant="contained">
                        {isEdit ? t('edit', tCommon) : t('add', tCommon)}
                    </ActionButton>
                </St.ActionSectionForm>
            </Form>
        </FormikProvider>
    );
};

const propTypes = {
    isEdit: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
    disabledForm: PropTypes.bool.isRequired,
};

const defaultProps = {};

interface extraProps {
    formik: any;
    close: () => void;
}

interface Props extends InferPropsExtended<typeof propTypes, extraProps> {}
TemplateName.propTypes = propTypes;
TemplateName.defaultProps = defaultProps;

export default TemplateName;
