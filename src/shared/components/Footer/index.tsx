import { Box, useTheme } from '@mui/material';


interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const theme = useTheme()
    return (
        <Box bgcolor={theme.palette.primary.contrastText} width='100%' height='100%' display='flex'  alignItems='center'>

        </Box>
  );
};

export default Footer;
