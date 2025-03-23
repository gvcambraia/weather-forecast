import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WeatherData } from '../../../types/weather';
import WeatherCard from '../WeatherCard';

jest.mock('react-icons/gi', () => ({
  GiSpeedometer: () => <span data-testid='pressure-icon' />,
}));

jest.mock('react-icons/io5', () => ({
  IoThermometerOutline: () => <span data-testid='temperature-icon' />,
  IoWaterOutline: () => <span data-testid='humidity-icon' />,
}));

const createMockWeatherData = (temp: number): WeatherData => ({
  name: 'Test City',
  main: {
    temp,
    humidity: 70,
    pressure: 1013,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  sys: {
    country: 'XX',
  },
});

describe('WeatherCard', () => {
  test('renders city name, temperature, humidity and pressure', () => {
    const mockData = createMockWeatherData(20);
    render(<WeatherCard weather={mockData} />);

    expect(screen.getByText('Test City')).toBeInTheDocument();

    expect(screen.getByText('20°C')).toBeInTheDocument();

    expect(screen.getByText('70%')).toBeInTheDocument();

    expect(screen.getByText('1013 hPa')).toBeInTheDocument();
  });

  test('displays temperature in blue when 5°C or below', () => {
    const mockData = createMockWeatherData(5);
    const { container } = render(<WeatherCard weather={mockData} />);

    const tempElement = container.querySelector('p[style*="color"]');
    expect(tempElement).toHaveStyle({ color: '#2563eb' });
  });

  test('displays temperature in orange when between 5°C and 25°C', () => {
    const mockData = createMockWeatherData(20);
    const { container } = render(<WeatherCard weather={mockData} />);

    const tempElement = container.querySelector('p[style*="color"]');
    expect(tempElement).toHaveStyle({ color: '#f97316' });
  });

  test('displays temperature in red when above 25°C', () => {
    const mockData = createMockWeatherData(30);
    const { container } = render(<WeatherCard weather={mockData} />);

    const tempElement = container.querySelector('p[style*="color"]');
    expect(tempElement).toHaveStyle({ color: '#dc2626' });
  });

  test('displays temperature in orange at exactly 5.1°C', () => {
    const mockData = createMockWeatherData(5.1);
    const { container } = render(<WeatherCard weather={mockData} />);

    const tempElement = container.querySelector('p[style*="color"]');
    expect(tempElement).toHaveStyle({ color: '#f97316' });
  });

  test('displays temperature in orange at exactly 25°C', () => {
    const mockData = createMockWeatherData(25);
    const { container } = render(<WeatherCard weather={mockData} />);

    const tempElement = container.querySelector('p[style*="color"]');
    expect(tempElement).toHaveStyle({ color: '#f97316' });
  });
});
