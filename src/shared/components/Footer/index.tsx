import { Box, useTheme } from '@mui/material';


interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const theme = useTheme()
    return (
        <Box bgcolor={theme.palette.primary.main} width='100%' height='100%' display='flex'  alignItems='center'>
            <Box margin='auto' width='90%' height='60%' bgcolor={theme.palette.primary.contrastText} >

            </Box>
        </Box>
  );
};

export default Footer;
