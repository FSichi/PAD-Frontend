import { Box, styled, Stack } from '@mui/material';
import { styled as styledMui } from '@mui/material/styles';

export default {
    Box: styled(Box)(({ theme }) => ({})),
    ActionSectionForm: styledMui(Stack)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'end',
        marginTop: '1.3em',
    })) as typeof Stack,
};
