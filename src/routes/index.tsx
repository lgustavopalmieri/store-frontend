import { Box } from '@mui/material';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/login';
import Footer from '../shared/components/Footer';

import Header from '../shared/components/Header';
import HeaderPages from '../shared/components/HeaderPages';

function AppRoutes () {
 


  return (
    
    <Router>
      <Box width='100%' height='5%' display='flex' justifyContent='space-between'>
          <Header />
      </Box>       
        
      <Box width='90%'  margin='auto' marginTop='1rem' flexDirection='column' flex='1' >
        <HeaderPages />
        <Box  display='flex'  margin='auto' marginTop='1rem' fontSize='1.5rem'>
          <Routes>
            <Route path='/home' element={<Home />}>
              <Route path='login' element={<Login />}/>    
            </Route>
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
        </Box>
      </Box>
        <Box width='100%' height='300px' marginTop='1rem' display='flex' justifyContent='space-between'>
          <Footer />
        </Box> 
    </Router>      
  
  );
};

export default AppRoutes;

