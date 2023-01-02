import Form from './Form';
import Result from './Result';
import Loading from './Loading';
import useWeather from '../hooks/useWeather';

const WeatherApp = () => {
  const { result, loading, notResult } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />

        {loading ? (
          <Loading />
        ) : result?.name ? (
          <Result />
        ) : notResult ? (
          <p>{notResult}</p>
        ) : (
          <p>The weather is going to be shown here</p>
        )}
      </main>
    </>
  );
};

export default WeatherApp;
