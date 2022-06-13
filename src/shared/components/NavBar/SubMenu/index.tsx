import { MenuItem } from '@mui/material';
import * as React from 'react';

export interface ISubmenu {
    title: string
    link: string 
}


const SubMenu: React.FunctionComponent<ISubmenu> = ({ title, link }) => {
    return (
        <MenuItem onClick={() => { window.location.href = link }}>{title}</MenuItem>
      );
};

export default SubMenu;
