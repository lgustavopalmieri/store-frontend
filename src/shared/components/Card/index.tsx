import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';


interface ICardProps {
    id: string
    imageCard: string
    imageURL: string
    imageAlt: string
    name: string
    description: string
    price: number
}

const CardComponent: React.FC<ICardProps> = ({id, imageCard,imageURL, imageAlt, name, description, price}) => {
  const theme = useTheme()
  return (
    <Card id={id} sx={{ color:theme.palette.secondary.dark, maxWidth:200, maxHeight: 370, margin:'1rem', backgroundColor:theme.palette.primary.contrastText,  cursor:'pointer',
    transition:'0.4s', '&:hover': {
      transform: 'scale(0.98)'
   }, }}>
      <CardMedia 
        component="img"
        height="194"
        image={imageCard} alt={imageAlt}
      />
      <CardContent sx={{ height:'40%',display:'flex', flexDirection:'column', justifyContent: 'space-between' }}>
        <Box sx={{ }}>
          <Typography  sx={{ fontSize:'1.2rem' }}>
            {name.toUpperCase()}
          </Typography >
          <Typography sx={{ color:theme.palette.primary.dark,fontSize:'0.8rem' }}>
            {description.substring(0,75)}
          </Typography>
        </Box>
        <Box>
          <CardActions sx={{ fontSize:'1rem' }}>
            R$ {price}
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  ) ;
};

export default CardComponent;
