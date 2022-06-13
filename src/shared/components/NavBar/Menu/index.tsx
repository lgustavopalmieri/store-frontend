import {useTheme, Box, Button, ClickAwayListener, Grow,MenuItem, MenuList, Paper, Popper,} from "@mui/material";
import * as React from 'react';
import { ISubmenu } from '../menu';
import SubMenu from "../SubMenu";

interface IMenuProps {
    title: string
    submenu: ISubmenu[]
}


const Menu: React.FunctionComponent<IMenuProps> = ({ title, submenu }) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  return(
    <Box>
    <Button
      sx={{ color:theme.palette.secondary.contrastText }}
      ref={anchorRef}
      id="composition-button"
      onClick={handleToggle}
    >
      {title}
    </Button>
    <Popper
    open={open}
    anchorEl={anchorRef.current}
    role={undefined}
    placement="bottom-start"
    transition
    disablePortal
  >
    {({ TransitionProps, placement }) => (
      <Grow
        {...TransitionProps}
        
        style={{
          transformOrigin:
            placement === 'bottom-start' ? 'left top' : 'left bottom',
          backgroundColor:'transparent'
        }}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose} >
            <MenuList
              sx={{ color:theme.palette.secondary.main, bgcolor:'transparent' }}              
              autoFocusItem={open}
              id="composition-menu"
              aria-labelledby="composition-button"
              onKeyDown={handleListKeyDown}
            >
              {submenu.map((submenuButtons) => (
                <SubMenu key={submenuButtons.title} link={submenuButtons.link || '#'} title={submenuButtons.title} />
              ))}
             
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
    </Popper>
  </Box>
  ) ;
};

export default Menu;
