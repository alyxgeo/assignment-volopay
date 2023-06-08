import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';


export default function SingleCard(props) {

  const [query , setQuey] = useState('')

const options = props.allOptions;

//console.log(options.filter(option=>option.name.toLowerCase().includes("max")))


  return (

<>

<input type='text' placeholder='search..' onChange={e=>setQuey(e.target.value)}/>

{options.filter(item=>item.name.toLowerCase().includes(query)).map((item,index)=>(

    <Card sx={{ maxWidth: 345 , marginTop:5 }} key={index}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" 
          component="div">name : {item.name} </Typography>

          <Typography variant="body2" color="text.secondary"
          >owner id :{item.owner_id} </Typography>
          <Typography variant="body2" color="text.secondary">
          card type : {item.card_type}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
)) }
</>

   
  );
}
