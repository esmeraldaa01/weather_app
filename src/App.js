import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import FormComponent from "./components/FormComponent";
import WeatherApp from "./components/WeatherApp";

const API_KEY = "dcdec0fb58effd7deeef419ae8228050";

const App = () => {
  const [data, setData] = useState({
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false,
  });

  const WEATHER_ICONS = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  };

  const calCelsius = (temp) => {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  };

  const getWeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        return {
          icon: WEATHER_ICONS.Thunderstorm,
          bg: "https://images.unsplash.com/photo-1600377927594-ceae8f8981a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        };
      case rangeId >= 300 && rangeId <= 321:
        return {
          icon: WEATHER_ICONS.Drizzle,
          bg: "https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80",
        };
      case rangeId >= 500 && rangeId <= 531:
        return {
          icon: WEATHER_ICONS.Rain,
          bg: "https://images.unsplash.com/photo-1508081317905-6dd972f752dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        };
      case rangeId >= 600 && rangeId <= 622:
        return {
          icon: WEATHER_ICONS.Snow,
          bg: "https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
        };
      case rangeId >= 700 && rangeId <= 781:
        return {
          icon: WEATHER_ICONS.Atmosphere,
          bg: "https://images.unsplash.com/photo-1606431318422-f48da4f56ab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        };
      case rangeId === 800:
        return {
          icon: WEATHER_ICONS.Clear,
          bg: "https://images.unsplash.com/photo-1581347311939-a9faffc77861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        };
      case rangeId >= 801 && rangeId <= 804:
        return {
          icon: WEATHER_ICONS.Clouds,
          bg: "https://images.unsplash.com/photo-1523793740499-83d43b75a2b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        };
      default:
        return {
          icon: WEATHER_ICONS.Clouds,
          bg: "https://images.unsplash.com/photo-1523793740499-83d43b75a2b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        };
    }
  };

  const getWeather = async (city, country) => {
    if (country && city) {
      const apiData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );

      const response = await apiData.json();
      console.log(response);

      if (response.cod === "404") {
        setData({ error: "404 ERROR The Page could not found" });
        return;
      }

      const { icon, bg } = getWeatherIcon(
        WEATHER_ICONS,
        response.weather[0].id
      );

      setData({
        ...data,
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: calCelsius(response.main.temp),
        temp_max: calCelsius(response.main.temp_max),
        temp_min: calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
        icon,
        bg,
      });
    } 
    else {
      setData({ ...data, error: true });
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(117, 19, 93, 0.73)),
      url(${data.bg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <FormComponent error={data.error} loadweather={getWeather} />
      <WeatherApp {...data} />
    </div>
  );
};

export default App;
