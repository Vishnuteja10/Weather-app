import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Style from './FormComponent.module.css'
import Button from 'react-bootstrap/Button';


export default function FormComponent({ setCityName, getweatherData }) {
    const [city, setCity] = useState('')
    function onsubmit(e) {
        e.preventDefault();
        if (city !== '') {
            setCityName(city)
            getweatherData(city)
            setCity('')
        } else {
            alert('Invalid city name')
        }
    }
    return (
        <div>
            <div className={Style.main}>
                <Form>
                    <Form.Label className={Style.label} htmlFor="cityname">Please enter city name</Form.Label>
                    <Form.Control
                        type="text"
                        id="cityname"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Button className={Style.submit} variant="primary" onClick={(e) => onsubmit(e)}>Submit</Button>
                </Form>

            </div>
        </div>
    )
}
