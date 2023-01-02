import { useState } from 'react';
import useWeather from '../hooks/useWeather';

const Form = () => {
  const [alert, setAlert] = useState('');
  const { search, dataSearch, consultWeather } = useWeather();

  const { city, country } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert('All fields are required');
      return;
    }
    setAlert('');
    consultWeather(search);
  };

  return (
    <div className="container">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        {/* <div className="field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={dataSearch}
            value={city}
          />
        </div> */}
        <div className="field">
          <label htmlFor="country">Country</label>
          <select id="country" name="country" onChange={dataSearch} value={country}>
            <option value=""> Select a country</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="España">España</option>
            <option value="Perú">Perú</option>
          </select>
        </div>
        <input type="submit" value="Consult climate" />
      </form>
    </div>
  );
};

export default Form;
