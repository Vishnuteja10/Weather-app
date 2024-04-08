import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FormComponent from "./components/Form/FormComponent";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import { useState } from "react";
import axios from "axios";

function App() {
  const [cityName, setCityName] = useState("London");
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);

  async function getweatherData(cityName) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b1541e5619f8ac25fa684285493a4352`
      )
      .then((res) => {
        const city = res?.data;
        const cityWeatherData = {};
        cityWeatherData.humidity = city?.main?.humidity;
        cityWeatherData.temperature = city?.main?.temp;
        cityWeatherData.pressure = city?.main?.pressure;
        cityWeatherData.min_temp = city?.main?.temp_min;
        cityWeatherData.max_temp = city?.main?.temp_max;
        cityWeatherData.cityName = cityName;
        setCitiesWeatherData((prevCitiesWeatherData) => [
          ...prevCitiesWeatherData,
          cityWeatherData,
        ]);
      })
      .catch((err) => {
        console.log("errorr ", err);
      });
  }
  return (
    <div className="App">
      <NavBar />
      <FormComponent
        setCityName={setCityName}
        getweatherData={getweatherData}
      />
      <WeatherInfo
        cityName={cityName}
        citiesWeatherData={citiesWeatherData}
        setCitiesWeatherData={setCitiesWeatherData}
      />
    </div>
  );
}

export default App;
