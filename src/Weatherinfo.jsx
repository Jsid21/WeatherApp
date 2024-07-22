import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './weatherinfo.css';

function Weatherinfo({newinfo}){
    let info = {
        temp : newinfo.Temp,
        city:newinfo.city,
        tempMax : newinfo.tempMax,
        tempMin :newinfo.tempMin,
        weather : newinfo.whether
    };
    
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <i className="fa-solid fa-location-dot" id='cityIcon'></i> <h2>{info.city}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary" id='details'>
          <div><i className="fa-solid fa-temperature-three-quarters"></i> Temperature : <span>{info.temp}&deg;C</span></div>
          <div><i className="fa-solid fa-temperature-high"></i> Max-Temperature : <span>{info.tempMax}&deg;C</span></div>
          <div><i className="fa-solid fa-temperature-low"></i> Min-Temperature : <span>{info.tempMin}&deg;C</span></div>
          <div><i className="fa-solid fa-cloud-sun-rain"></i> Weather description : <span>{info.weather}</span></div>
        </Typography>
      </CardContent>
    </Card>
        </>
    );
}
export default Weatherinfo ;