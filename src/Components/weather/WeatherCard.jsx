import React, { useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = React.useState('')

    const {
        name,
        country,
        temp,
        mood,
        speed,
        humidity,
        pressure,
        sunset
    } = tempInfo

    React.useEffect(() => {
        if (mood) {
            switch (mood) {
                case 'Clouds':
                    setWeatherState("wi-day-cloudy")
                    break;
                case 'Haze':
                    setWeatherState("wi-fog")
                    break;
                case 'clear':
                    setWeatherState("wi-day-sunny")
                    break;
                case 'Mist':
                    setWeatherState("wi-day-sunny")
                    break;
                case 'Thunderstorm':
                    setWeatherState("wi-day-thunderstorm")
                    break;
                case 'Drizzle':
                    setWeatherState("wi-sprinkle")
                    break;
                case 'Rain':
                    setWeatherState("wi-rain")
                    break;
                case 'Snow':
                    setWeatherState("wi-snow")
                    break;
                case 'Smoke':
                    setWeatherState("wi-smoke")
                    break;
                case 'Dust':
                    setWeatherState("wi-dust")
                    break;
                case 'Fog':
                    setWeatherState("wi-fog")
                    break;
                case 'Sand':
                    setWeatherState("wi-sandstorm")
                    break;
                case 'Ash':
                    setWeatherState("wi-smog")
                    break;
                case 'Squall':
                    setWeatherState("wi-cloudy-gusts")
                    break;
                case 'Tornado':
                    setWeatherState("wi-tornado")
                    break;
            
                default:
                    setWeatherState("wi-day-sunny")
                    break;
            }
        }
    })
    
    let date = new Date(sunset * 1000)
    let sunsetTime = `${date.getHours()}:${date.getMinutes()}`
    
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi wi-h ${weatherState}`} ></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{mood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>

                <div className="date"> {new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">

                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{sunsetTime} <br /> Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity} <br /> Humidity</p>
                        </div>

                    </div>

                    <div className="weather-extra-info">

                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{pressure} <br /> Pressure</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed} <br /> Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
