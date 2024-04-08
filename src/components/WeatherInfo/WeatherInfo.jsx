import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Style from './WeatherInfo.module.css'

export default function WeatherInfo({ citiesWeatherData, setCitiesWeatherData }) {


    return (
        <div className={Style.main}>
            <h2>Weather Info</h2>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>City Name</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                        <th>Max Temp</th>
                        <th>Delete Info</th>
                    </tr>
                </thead>
                <tbody>
                    {citiesWeatherData.map((city, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{city.cityName}</td>
                            <td>{city.temperature}</td>
                            <td>{city.humidity}</td>
                            <td>{city.pressure}</td>
                            <td>{city.max_temp}</td>
                            <td>  <Button variant="danger" onClick={(index) => setCitiesWeatherData(prevCitiesWeatherData => {
                                const updatedCitiesWeatherData = [...prevCitiesWeatherData];
                                updatedCitiesWeatherData.splice(index, 1);
                                return updatedCitiesWeatherData;
                            })}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    )
}
