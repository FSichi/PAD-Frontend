import * as React from 'react';
import PropTypes from 'prop-types';
import { InferPropsExtended } from 'utils/helpers/proptypesHelper';
import TemplateName from './TemplateName';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { tRequiredFieldError } from 'constants/appConstants';

// ---------------------------------------------//
// ------------------- FORMIK ------------------//
// ---------------------------------------------//

const getInitialValues = () => ({
    field1: '',
});

const getValidationSchema = () =>
    Yup.object().shape({
        field1: Yup.string().required(tRequiredFieldError),
    });

// ---------------------------------------------//
// ---------------------------------------------//
// ---------------------------------------------//

const TemplateNameContainer = (props: Props) => {
    // const {  } = props;
    const { t } = useTranslation('');

    const handleSubmit = React.useCallback(async (data: any) => {
        const fieldValue = data.field1;
    }, []);

    const formikInitProps = React.useMemo(
        () => ({
            initialValues: getInitialValues(),
            validateOnChange: false,
            validateOnBlur: false,
            validateOnMount: false,
            validationSchema: getValidationSchema(),
            enableReinitialize: true,
            onSubmit: handleSubmit,
        }),
        [handleSubmit],
    );

    const formik = useFormik(formikInitProps);

    const childProps = {
        ...props,
        formik,
        t,
        disabledForm: JSON.stringify(formik.values) === JSON.stringify(getInitialValues()),
    };

    return <TemplateName {...childProps} />;
};

const propTypes = {
    isEdit: PropTypes.bool.isRequired,
};

const defaultProps = {
    isEdit: false,
};

interface extraProps {
    close: () => void;
}

interface Props extends InferPropsExtended<typeof propTypes, extraProps> {}
TemplateNameContainer.propTypes = propTypes;
TemplateNameContainer.defaultProps = defaultProps;

export default TemplateNameContainer;
