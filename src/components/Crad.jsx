import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionCard(props) {

 //console.log(props.ownerId)
 //console.log(props.dropOptions)     


const selectedCrad = props.dropOptions.filter((item)=>(item.owner_id == props.ownerId))
//console.log(selectedCrad)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" 
          component="div">name : {selectedCrad[0].name} </Typography>

          <Typography variant="body2" color="text.secondary"
          >owner id : {selectedCrad[0].owner_id} </Typography>
          <Typography variant="body2" color="text.secondary">
          card type : {selectedCrad[0].card_type} </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
