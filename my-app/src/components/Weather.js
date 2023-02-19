import PropTypes from 'prop-types';
import './Weather.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Weather({city, zipcode}) {
    const [temperature, setTemperature] = useState('-')
    const [icon, setIcon] = useState('-')

    const apiKey = process.env.REACT_APP_APIKEY;
    const apiUrl = process.env.REACT_APP_APIURL;
    const url = `${apiUrl}?zip=${zipcode},fr&appid=${apiKey}&units=metric`
    console.log(url)


    const fetchWeather = async() => {
      const result = await axios.get(`${apiUrl}?zip=${zipcode},fr&appid=${apiKey}&units=metric`);
      console.log(result.data.main.temp)
        setTemperature(result.data.main.temp)
        setIcon(result.data.weather[0].icon);
      };
    
      useEffect(() => {
        fetchWeather();
      }, []);
    
      return (
        <div className="meteo">
          <div>
            <div className="meteo-city">{city}</div>
            <div className="meteo-code">{zipcode}</div>
            <div className="meteo-temperature">
              {temperature}°
            </div>
          </div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        </div>
      )
}

Weather.propTypes = {
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
};


export default Weather;