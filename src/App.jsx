import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
    headers: {
      'X-RapidAPI-Key': '4a01d6ebcbmsh120b8986a6484cfp1d797djsn3ebae73bccac',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios(options)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
