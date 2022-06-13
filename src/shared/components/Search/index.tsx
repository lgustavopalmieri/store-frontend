import { Box, InputBase, IconButton, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface ISearchProps {
    value:string
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void | undefined
    enterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Search: React.FunctionComponent<ISearchProps> = ({ handleChange, enterKey, value}: ISearchProps) => {
    const theme = useTheme()
    return(
        <Box display='flex'  width='200px' border='1px solid #5e35b1' paddingLeft='0.8rem' borderRadius='0.5rem' marginTop='1.5rem'>
            <InputBase
                sx={{ flex: 1 , color:theme.palette.primary.main }}
                value={value}
                placeholder="Search Products"
                onChange={handleChange}
                onKeyUp={enterKey}
            />
            <IconButton type="submit" sx={{ color:theme.palette.primary.main}}>
                <SearchIcon />
            </IconButton>
        </Box>
  ) ;
};

export default Search;
