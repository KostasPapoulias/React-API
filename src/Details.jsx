import './Details.css'
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react';
import axios from 'axios';

/**
 * this function returns a card with the details of the city 
 * calls the weather API to get the weather of the city 
 */
export default function Details({cityDetails}) {

    const [weather, setWeather] = useState();

    useEffect(() => {
        if (!cityDetails) return; 

        const options = {
            method: 'GET',
            url: `https://open-weather13.p.rapidapi.com/city/${cityDetails.name}/EN`,
            headers: {
                'X-RapidAPI-Key': '6833bb7fd9mshdde23fbdf8d89f4p18389bjsnb7f4b0bdaaaf',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
          };

        axios(options).then(function (response) {
            setWeather(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[cityDetails])  

    
    return (
        <div className='Details'>
            {cityDetails ? (
                <Card style={{ width: '13.5rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Population: {cityDetails.population}
                        </Card.Text>
                            {weather && weather.weather && weather.weather.length > 0 ? (
                                <>
                                <Card.Img variant="top" src={`../images/${weather.weather[0].main}.png`} />                   
                                <Card.Text>
                                    Temperature: {weather.main.temp},
                                    Humidity: {weather.main.humidity},
                                    Pressure: {weather.main.pressure}
                                </Card.Text>
                                </>
                            ) : (
                                <>loading weather...</>
                            )}
                        
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    );
}