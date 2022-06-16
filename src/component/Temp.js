import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./style.css";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5d45b3fd0909030e72d1d26f07c50af1`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;

      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const { main: weathermood } = data.weather[0];
      //   console.log(temp);
      //   console.log(data);

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset,
        weathermood,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* //our Temp card */}

      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
