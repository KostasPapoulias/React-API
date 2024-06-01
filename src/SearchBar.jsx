import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './SearchBar.css';
/**
 * SearchBar component
 * returns a countryInput by pressing enter or clicking the search button
 * returns a search bar that allows the user to input a country code and a button
 */
export default function SearchBar({countryInput}) {
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            countryInput(searchValue);
        }
    };
    const handleButtonClick = () => {
        countryInput(searchValue);
    };

    return (
        <div className='SearchBar'>
            <Form.Control
                type="text"
                id="nameInput"
                placeholder='Enter a country by the code (e.g. US for United States)'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyPress={handleKeyPress}
            />
            <Button id='SearchButton' variant="light" onClick={handleButtonClick}>Search</Button>{' '}

        </div>
    );
}
