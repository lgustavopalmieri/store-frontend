import * as React from 'react';
import {useTheme, Box, Button, ClickAwayListener, Grow,MenuItem, MenuList, Paper, Popper,} from "@mui/material";

interface IMenuButtonProps {
    buttonTitle: string
}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = ({buttonTitle}) => {
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
  
  return (
    <Box>
    <Button
        sx={{ color:theme.palette.secondary.contrastText }}
      ref={anchorRef}
      id="composition-button"
      onClick={handleToggle}
    >
      {buttonTitle}
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
    </Popper>
  </Box>
  );
};

export default MenuButton;
