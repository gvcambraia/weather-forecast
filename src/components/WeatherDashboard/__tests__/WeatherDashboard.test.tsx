import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { fetchWeatherData } from '../../../services/weatherApi';
import { WeatherData } from '../../../types/weather';
import WeatherDashboard from '../WeatherDashboard';

jest.mock('../../../services/weatherApi');
jest.mock('../../WeatherCard/WeatherCard', () => {
  return function MockedWeatherCard({ weather }: { weather: WeatherData }) {
    return (
      <div data-testid='weather-card'>
        <span data-testid='city-name'>{weather.name}</span>
      </div>
    );
  };
});

const mockWeatherData: WeatherData[] = [
  {
    name: 'Joinville',
    main: {
      temp: 22.5,
      humidity: 65,
      pressure: 1015,
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
    ],
  },
  {
    name: 'San Francisco',
    main: {
      temp: 15.2,
      humidity: 72,
      pressure: 1010,
    },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
    ],
  },
  {
    name: 'Urubici',
    main: {
      temp: 18.7,
      humidity: 80,
      pressure: 1012,
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
    ],
  },
];

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('WeatherDashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show loading state initially', () => {
    (fetchWeatherData as jest.Mock).mockImplementation(
      () => new Promise(() => {})
    );

    render(<WeatherDashboard />, { wrapper: createWrapper() });

    expect(screen.getByText('Loading weather data...')).toBeInTheDocument();
  });

  test('should display error message when API call fails', async () => {
    (fetchWeatherData as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<WeatherDashboard />, { wrapper: createWrapper() });

    const errorMessage = await screen.findByText(
      'Failed to fetch weather data'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('should render weather cards when API call succeeds', async () => {
    (fetchWeatherData as jest.Mock).mockImplementation((city) => {
      if (city.name === 'Joinville') return Promise.resolve(mockWeatherData[0]);
      if (city.name === 'San Francisco')
        return Promise.resolve(mockWeatherData[1]);
      return Promise.resolve(mockWeatherData[2]);
    });

    render(<WeatherDashboard />, { wrapper: createWrapper() });

    const cityElements = await screen.findAllByTestId('city-name');
    expect(cityElements.length).toBe(3);

    const weatherCards = screen.getAllByTestId('weather-card');
    expect(weatherCards.length).toBe(3);
  });

  test('should make API calls for all cities', () => {
    render(<WeatherDashboard />, { wrapper: createWrapper() });

    expect(fetchWeatherData).toHaveBeenCalledTimes(3);
  });
});
