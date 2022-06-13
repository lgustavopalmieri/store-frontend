import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, useTheme } from '@mui/material';
import React, { useEffect } from "react";
import { getProducts } from "../../store/Products/api";
import { useAppSelector } from "../../store/hooks";
import { receivedProducts } from "../../store/Products/productsSlice";
import { useDispatch } from "react-redux";


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const theme = useTheme()
  
  const dispatch = useDispatch()
  useEffect(() => {
    getProducts().then((products) => {
     dispatch(receivedProducts(products))
    });
  }, []);

  const products = useAppSelector(state => state.products.products)
  

  return (
     <Box display='flex' flexWrap='wrap' justifyContent='center'> 
      
      {Object.values(products).map((product) => (
        <Card key={product.id} sx={{ color:theme.palette.secondary.dark, maxWidth: 345, fontSize: '1rem', margin:'1rem' }}>
          <CardMedia 
            component="img"
            height="194"
            image={product.imageURL} alt={product.imageAlt}
          />
          <CardContent sx={{ backgroundColor:theme.palette.primary.contrastText, height: '100%'}}>
            <Typography  sx={{ fontSize:'1.5rem' }}>
              {product.name.toUpperCase()}
            </Typography >
            <Typography sx={{ color:theme.palette.primary.dark,fontSize:'0.8rem' }}>
              {product.description}
            </Typography>
            <CardActions >
              R$ {product.price}
            </CardActions>
          </CardContent>
       </Card>
      
      ))}
  
     </Box>
  );
};

export default Home;
