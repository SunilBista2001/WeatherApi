import React from "react";

const WeatherCard = ({ tempInfo }) => {
  const { temp, humidity, pressure, name, speed, country, sunset } = tempInfo;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span style={{ padding: "0 10px" }}>{temp}&#176;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
          </div>
          <div className="place">
            {name},{country}
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* our 4 coloumn section */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunset} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity "}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain "}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind "}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
