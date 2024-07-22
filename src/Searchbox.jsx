import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './searchbox.css';
import { useState } from 'react';

function Searchbox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6b49d4547de0dfd426de21b6de37890a";
    let [error,setError] = useState(false);
    let getWhether= async(city)=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
            city : jsonResponse.name,
            Temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            whether:jsonResponse.weather[0].description
            }
        console.log(result);
        return result;
        }catch(err){
            throw (err);
        }
    }

    let [city,setCity] = useState("");
    let handleCityChange=(event)=>{
        setCity(event.target.value);
    }
    let handleChange = async (event)=>{
        try {
            event.preventDefault();
            {console.log(city);}
            setCity("");
            let newWeather= await getWhether(city);
            setError(false);
            updateInfo(newWeather);
        } catch (err) {
            setError(true)
        }
    }
    
    return(
        <>
            <h1>Weather App</h1>
            <div className='centerDiv'>
            <form className='formSection'onSubmit={handleChange}>
            <TextField id="city" label="City" variant="filled" value={city} onChange={handleCityChange} required/>
            {/* <br></br> */}
            <Button variant="contained" type='submit' >SEARCH</Button>
            <br></br>
            {error && <h5>No such City exits ..!</h5>}
            </form>
            </div>
        </>
    );
}

export default Searchbox;