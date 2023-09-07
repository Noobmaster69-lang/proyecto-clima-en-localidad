import { useState } from "react"

    const WeatherCard = ({  weather, temp }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemp = () => {  setIsCelsius(!isCelsius)

    }

  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>
        <div>
        <img 
        src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} 
        alt=""
        />
      </div>  
      <section>
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span><b>Wind Speed: </b></span><span>{weather?.wind.speed}m/s</span></li>
          <li><span><b>Clous: </b></span><span>{weather?.clouds.all}%</span></li>
          <li><span><b>Pressure: </b></span><span>{weather?.main.pressure}"hPa"</span></li>
        </ul>
      </section>
      </div>
      <h2>{isCelsius? `${temp?.celsius} °C`: `${temp?.farenheit}  °F`}</h2>  
      <button onClick={handleChangeTemp}><span>change to °F </span></button>
    </article>
  )
}

export default WeatherCard