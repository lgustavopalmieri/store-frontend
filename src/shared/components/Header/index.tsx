import { Avatar, Box, IconButton, InputBase,  useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import avatar from './avatar.png'
import React from "react";
import MenuButton from "../MenuButton";


interface IHeaderProps {
}

const Header: React.FC= () => {
  const theme = useTheme()
  
  return (
    <Box bgcolor={theme.palette.primary.dark} width='100%' height='100%' display='flex'  alignItems='center' >
      <Box height='50%' width='90%' margin='auto' display='flex' justifyContent='space-between' alignItems='center' >
        <Avatar sx={{ height: theme.spacing(4), width: theme.spacing(4)}} src={avatar} />
      
        <Box display='flex' width='50%'>
          <MenuButton buttonTitle='DashBoard'/>
          <MenuButton buttonTitle='Products'/>
        </Box>

        <Box display='flex'  width='19%'>
          <InputBase
            sx={{ flex: 1 , color:theme.palette.secondary.contrastText }}
            placeholder="Search Products"
          />
          <IconButton type="submit" sx={{ color:theme.palette.secondary.contrastText}}>
            <SearchIcon />
          </IconButton>
        </Box>
        
      </Box> 
    </Box>
  );
};

export default Header;




