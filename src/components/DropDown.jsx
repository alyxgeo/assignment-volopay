import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ActionCard from './Crad';
import { Button } from '@mui/material';
import { useState } from 'react';




export default function DropDown(props) {


const dropOptions = props.SampleData[0].data
//console.log(dropOptions)

  const [ownerId, setOwnerId] = useState('');

  const [options, setOptions] = useState(false);

  const [count, setCount] = useState(0);


  const handleChange = (event) => {
    setOwnerId(event.target.value);
    //console.log(age)
    setOptions(true);
  };



  const nextPageChanger = () => {
    setCount(count + 1);
    setOptions(false);
  };




  const backPageHandler=()=>{
    setCount(count-1); 
  }
  



  return (

<>



{count == 0 &&
<>
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width:300}}>
        <InputLabel id="demo-simple-select-label">select id</InputLabel>
        <Select
        defaultValue=""
          value={ownerId}
          label="owner id"
          onChange={handleChange}
        >

{dropOptions.map((item , index)=>(

    <MenuItem key={index} value={item.owner_id}>{item.owner_id}</MenuItem>

))}
        </Select>
      </FormControl>
    </Box>

    <Box>
      <Button
        variant="contained"
        sx={{
          marginTop: "40px",
          width: "129px",
          height: "54px",
          padding: "20px",
        }}
        disabled={!options}
     onClick={nextPageChanger}
      >details</Button>
</Box>
</>
}


{count == 1 &&

<>
<Box sx={{
    marginTop:'50px'
}}>

<ActionCard ownerId={ownerId} dropOptions={dropOptions} />
</Box>

<Box>
<Button
        variant="contained"
        sx={{
          marginTop: "40px",
          width: "129px",
          height: "54px",
          padding: "20px",
        }}
       onClick={backPageHandler}
      >
        Back
      </Button>
</Box>
</>}


</>


  );
}