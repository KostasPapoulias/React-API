import { useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './SearchBar.jsx'
import CityCard from './CityCard.jsx'

function App() {

  const [cities, setCities] = useState([]);
  
  const fetchData = (country) => {
    const options = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}/places`,
      headers: {
        'X-RapidAPI-Key': '4a01d6ebcbmsh120b8986a6484cfp1d797djsn3ebae73bccac',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    axios(options)
      .then(response => {
        setCities(response.data.data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }

  
  return (
    <div className='container'>
      <h1>City Information</h1>
      <SearchBar countryInput={(value) => { fetchData(value); }} />  
      <div className='CardContainer'>   
      {cities && <CityCard city={cities[2]} />}
      {cities && <CityCard city={cities[3]} />}
      {cities && <CityCard city={cities[4]} />}
      </div> 
    </div>
  )
}

export default App
