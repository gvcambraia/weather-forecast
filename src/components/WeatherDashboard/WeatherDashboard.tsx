'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { cities } from '../../constants/cities';
import { fetchWeatherData } from '../../services/weatherApi';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherDashboard: React.FC = () => {
  const {
    data: weatherData,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['weatherData', cities],
    queryFn: async () => {
      const weatherPromises = cities.map((city) => fetchWeatherData(city));
      return Promise.all(weatherPromises);
    },
    staleTime: 600000,
    refetchInterval: 600000,
  });

  if (isFetching) {
    return <div className='text-center p-4'>Loading weather data...</div>;
  }

  if (error) {
    return (
      <div className='text-center p-4 text-red-500'>
        Failed to fetch weather data
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {weatherData?.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherDashboard;
