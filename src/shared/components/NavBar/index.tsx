import * as React from 'react';
import { Box, IconButton,  useTheme } from "@mui/material";
import menu from './menu'
import Menu from './Menu';
interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return(
    <Box display='flex' width='50%'>
         {menu.map((menuButtons) => (
             <Menu key={menuButtons.title} title={menuButtons.title} submenu={menuButtons.submenu} />
         ))}
    </Box>
  ) ;
};

export default NavBar;
