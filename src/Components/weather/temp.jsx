import React from 'react'
import './style.css'
import WeatherCard from './WeatherCard'

const Temp = () => {
    const [searchValue, setSearchValue] = React.useState("Delhi")
    const [tempInfo, setTempInfo] = React.useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

            const res = await fetch(url)
            const data = await res.json()

            const { temp, humidity, pressure } = data.main
            const { main: mood } = data.weather[0]
            const { name } = data
            const { country, sunset } = data.sys
            const { speed } = data.wind

            const MyNewWeatherInfo = {
                name,
                country,
                temp,
                mood,
                speed,
                humidity,
                pressure,
                sunset
            }
            setTempInfo(MyNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(getWeatherInfo, [])


    return <>
        <div className="wrap">
            <div className="search">
                <input
                    type="search"
                    className="searchTerm"
                    id="search"
                    autoFocus
                    placeholder="Search..."
                    value={searchValue}
                    onChange={ (e)=>{setSearchValue(e.target.value)} }
                />
                <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
            </div>
        </div>

        <WeatherCard tempInfo={ tempInfo }/>
    </>
}

export default Temp
