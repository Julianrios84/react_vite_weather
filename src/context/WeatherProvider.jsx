import { useState, createContext } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [notResult, setNotResult] = useState(false);


  const dataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const consultWeather = async (input) => {
    setLoading(true);
    setNotResult(false);
    try {
      const { city, country } = input;
      const appId = import.meta.env.VITE_API_KEY;
      // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`;
      const {data } = await axios(url);
      const { coord } = data;
      const { lat, lon } = coord;
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: weather } = await axios(urlWeather);
      console.log(weather)
      setResult(weather);
    } catch (error) {
      setNotResult('No results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        dataSearch,
        consultWeather,
        result,
        loading,
        notResult
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
