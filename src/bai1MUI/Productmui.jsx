/* import React from 'react' */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

export default function Productmui({animals,add}) {
    console.log(animals);
  return (
    <div>
        <Card sx={{ maxWidth: 400,
        maxHeight :400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={animals.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {animals.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button variant="outlined" onClick={ () =>buysanimals(animals.id) }>Click để mua</Button>
        </CardContent>
        
      </CardActionArea>
    </Card>
    </div>
  )
}
