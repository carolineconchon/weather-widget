import PropTypes from 'prop-types';
import './Weather.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';


function Weather() {
    const [temperature, setTemperature] = useState('17')
    const [icon, setIcon] = useState('02n')
    const [search, setSearch] = useState('')
    const [city, setCity] = useState('Bourg Palette')
    

    const apiKey = process.env.REACT_APP_APIKEY;
    const apiUrl = process.env.REACT_APP_APIURL;
    const url = `${apiUrl}?zip=${search},fr&appid=${apiKey}&units=metric`
    console.log(url)
    

    const fetchWeather = async() => {
      const result = await axios.get(`${apiUrl}?zip=${search},fr&appid=${apiKey}&units=metric`);
      console.log(result.data.main.temp)
        setTemperature(result.data.main.temp)
        setIcon(result.data.weather[0].icon);
        setCity(result.data.name)
        console.log(result.data.name)
             };
    
      useEffect(() => {
        fetchWeather();
      }, []);
    
      return (
        <>
        <Search search={search} setSearch={setSearch} fetchWeather={fetchWeather} />
        <div className="meteo" > 
          <div>
            <div className="meteo-city">{city}</div>
            <div className="meteo-code">{search}</div>
            <div className="meteo-temperature">
              {temperature}°
            </div>
          </div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        </div>
        </>  
      )
}

Weather.propTypes = {
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
};


export default Weather;