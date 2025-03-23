import axios from 'axios';
import { City, WeatherData } from '../types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city: City): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    throw error;
  }
};
