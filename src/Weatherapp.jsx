import Weatherinfo from "./Weatherinfo";
import Searchbox from "./Searchbox";
import { useState } from "react";

function Weatherapp() {
    let [newWeather, setNewWeather] = useState({
        // temp: 25.25,
        // city: "Pune",
        // tempMax: 25.25,
        // tempMin: 25.25,
        // weather: "broken clouds",
    });
    const [searched, setSearched] = useState(false);
    async function updateInfo(newinfo) {
        setNewWeather(newinfo);
        setSearched(true);
    }
    return (
        <>
            <Searchbox updateInfo={updateInfo}/>
            <br />
            {searched && <Weatherinfo newinfo={newWeather} />}
        </>
    );
}

export default Weatherapp;