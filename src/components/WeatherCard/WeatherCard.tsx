'use client';

import React from 'react';
import { GiSpeedometer } from 'react-icons/gi';
import { IoThermometerOutline, IoWaterOutline } from 'react-icons/io5';
import { WeatherData } from '../../types/weather';
import { getTemperatureStyle } from '../../utils/colorCoder';
import {
  formatHumidity,
  formatPressure,
  formatTemperature,
} from '../../utils/formatters';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const city = weather.name;
  const temperature =
    typeof weather.main.temp === 'number'
      ? Math.round(weather.main.temp * 10) / 10
      : 0;
  const humidity = weather.main.humidity;
  const pressure = weather.main.pressure;

  return (
    <div className='bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-200 hover:scale-105'>
      <h2 className='text-xl font-semibold mb-2'>{city}</h2>
      <p
        className='text-4xl font-bold mb-4'
        style={getTemperatureStyle(temperature)}
      >
        <IoThermometerOutline />
        {formatTemperature(temperature)}
      </p>
      <p className='flex items-center justify-center text-base text-gray-600 mb-2'>
        <IoWaterOutline />
        {formatHumidity(humidity)}
      </p>
      <p className='flex items-center justify-center text-base text-gray-600'>
        <GiSpeedometer />
        {formatPressure(pressure)}
      </p>
    </div>
  );
};

export default WeatherCard;
