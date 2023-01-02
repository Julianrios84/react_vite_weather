import WeatherApp from "./components/WeatherApp"
import { WeatherProvider } from "./context/WeatherProvider"

function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>Climate search engine</h1>
      </header>
      <WeatherApp />
    </WeatherProvider>
  )
}

export default App
