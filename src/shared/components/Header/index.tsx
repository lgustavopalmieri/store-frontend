import { Avatar, Box, IconButton,  useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from "../NavBar";


interface IHeaderProps {
}

const Header: React.FC= () => {
  const theme = useTheme()
  
  return (
    <Box bgcolor={theme.palette.primary.dark} width='100%' height='100%' display='flex'  alignItems='center' >
      <Box height='50%' width='90%' margin='auto' display='flex' justifyContent='space-between' alignItems='center' >
        
        <IconButton sx={{ color:theme.palette.secondary.main, height: theme.spacing(4), width: theme.spacing(4)}}>
          <HomeIcon />
        </IconButton>
        
          <NavBar />
         
          

        

        <Box>
          <IconButton sx={{ color:theme.palette.secondary.main, height: theme.spacing(4), width: theme.spacing(4)}}>
            <AccountCircleIcon />
            {/* <Avatar sx={{ height: theme.spacing(4), width: theme.spacing(4)}} src={avatar} /> */}
          </IconButton>   

          <IconButton sx={{ color:theme.palette.secondary.main, height: theme.spacing(4), width: theme.spacing(4)}}>
            <ShoppingCartIcon />
          </IconButton>      

        </Box>
      </Box> 
    </Box>
  );
};

export default Header;




