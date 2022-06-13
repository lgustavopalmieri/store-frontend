import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, useTheme } from '@mui/material';
import React, { useEffect } from "react";
import { getProducts } from "../../store/Products/api";
import { useAppSelector } from "../../store/hooks";
import { receivedProducts } from "../../store/Products/productsSlice";
import { useDispatch } from "react-redux";
import Search from '../../shared/components/Search';


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
      <Box display='flex' flexWrap='wrap' justifyContent='center'  marginTop='1.5rem'> 
      {Object.values(products).map((product) => (
        <Card key={product.id} sx={{ color:theme.palette.secondary.dark, maxWidth:200, maxHeight: 370, margin:'1rem', backgroundColor:theme.palette.primary.contrastText }}>
          <CardMedia 
            component="img"
            height="194"
            image={product.imageURL} alt={product.imageAlt}
          />
          <CardContent sx={{  }}>
            <Box sx={{ }}>
              <Typography  sx={{ fontSize:'1.2rem' }}>
                {product.name.toUpperCase()}
              </Typography >
              <Typography sx={{ color:theme.palette.primary.dark,fontSize:'0.8rem' }}>
                {product.description.substring(0,75)}
              </Typography>
            </Box>
            <CardActions sx={{ fontSize:'1rem' }}>
              R$ {product.price}
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </Box>
  );
};

export default Home;
