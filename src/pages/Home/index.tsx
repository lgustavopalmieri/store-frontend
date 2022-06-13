import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from "react";
import { getProducts, Product } from "../../store/Products/api";
import { useAppSelector } from "../../store/hooks";
import { receivedProducts } from "../../store/Products/productsSlice";
import { useDispatch } from "react-redux";
import Search from '../../shared/components/Search';
import CardComponent from '../../shared/components/Card';


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const theme = useTheme()

  const [search, setSearch] = useState('')
  
  const dispatch = useDispatch()
  useEffect(() => {
    getProducts().then((products) => {
     dispatch(receivedProducts(products))
    });
  }, []);

  const products = useAppSelector(state => state.products.products)

  const newProducts = Object.values(products).map((product: Product) => product)

  const filteredProducts = newProducts.filter((product: Product) => {
    return product.name.includes(search)
  })
  
  const [list, setList] = useState(false)

  return ( 
      <Box   marginTop='1.5rem' >
        <Box marginLeft='3.8rem'  display='flex' flexWrap='wrap'>
          <Search
              value={search}
              enterKey={(e) => {
                if (e.keyCode === 13) {
                  setList(true)
                }
              }}
              handleChange={(e) => {
                if(e.target.value.length < 1) {
                  setList(false)
                }
                return setSearch(e.target.value.toUpperCase())
              }}
          />
        </Box>
        <Box display='flex' flexWrap='wrap' justifyContent='center'  marginTop='1.5rem'> 
          {list === true ? 
            filteredProducts.map((product) => (
              <CardComponent 
              key={product.id}
              id={product.id}
              imageCard={product.imageURL}
              imageURL={product.imageCredit}
              imageAlt={product.imageAlt}
              name={product.name}
              description={product.description}
              price={product.price}
            />
            )) 
            : newProducts.map((product) => (
              <CardComponent 
              key={product.id}
              id={product.id}
              imageCard={product.imageURL}
              imageURL={product.imageCredit}
              imageAlt={product.imageAlt}
              name={product.name}
              description={product.description}
              price={product.price}
            />
            )) 
          }
        </Box>
      </Box> 
  );
};

export default Home;
