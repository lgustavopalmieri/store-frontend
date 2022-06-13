import { Box, Breadcrumbs, Link, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../Search';

interface IHeaderPagesProps {
}

const HeaderPages: React.FunctionComponent<IHeaderPagesProps> = (props) => {
    const theme = useTheme()
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    const location = useLocation()
    let path = location.pathname
    let locArr: any[] = []
    locArr.push(path.split(/[./]/))
    const formatForBreadcrumb = path.substring(0, path.length - 1)
    const formatForSlash = locArr[0].slice(-1)[0].toUpperCase()
    const formatForEmpty = locArr[0].slice(-2)[0].toUpperCase()
    
  return(
        <>
        
            <Box height='100%' margin='auto' marginTop='1rem'>
                <Breadcrumbs aria-label="breadcrumb" onClick={handleClick} sx={{ color:theme.palette.secondary.main }}>
                <Link underline="hover" color="inherit" >
                    {path.slice(-1) === '/' ? formatForBreadcrumb : path }      
                </Link>
                </Breadcrumbs>
            </Box>

            <Box sx={{ color:theme.palette.primary.main }} height='100%' margin='auto' marginTop='1rem' fontSize='1.5rem' display='flex' justifyContent='space-between'>
                <Typography variant="h4" component="div" gutterBottom>
                    { path.slice(-1) === '/' ? formatForEmpty : formatForSlash  } 
                </Typography>
                
            </Box>
        </>
  );
};

export default HeaderPages;
