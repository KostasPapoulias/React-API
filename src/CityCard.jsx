import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './CityCard.css';
import Details from './Details.jsx';
import { useState } from 'react';

/**
 * this function returns a card with the city name and a button to see the details
 */

export default function CityCard({ city }) {
  const [cityDet, setCityDet] = useState();

  const handleClick = (cityDet) => {
    setCityDet(cityDet);
    console.log(cityDet, showDetails);
  };

  return (
    <>
      {city ? (
        <div className='Card'>
          <Card style={{ width: '18rem' }}>
            <Accordion>
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Accordion.Item eventKey="0">
                  <Accordion.Header onClick={() => handleClick(city.name)}>
                    See details
                  </Accordion.Header>
                  <Accordion.Body>
                    <Details cityDetails={cityDet} />
                  </Accordion.Body>
                </Accordion.Item>
              </Card.Body>
            </Accordion>
          </Card>
        </div>
      ) : null}
    </>
  );
}
