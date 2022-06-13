import { Box, InputBase, IconButton, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface ISearchProps {
    // handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void | undefined
    // enterKey: (e: any) => void
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
    const theme = useTheme()
    return(
        <Box display='flex'  width='200px' border='1px solid' paddingLeft='0.8rem' borderRadius='0.5rem'>
            <InputBase
            sx={{ flex: 1 , color:theme.palette.primary.main }}
            placeholder="Search Products"
            />
            <IconButton type="submit" sx={{ color:theme.palette.primary.main}}>
                <SearchIcon />
            </IconButton>
        </Box>
  ) ;
};

export default Search;
