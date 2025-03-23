export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  sys?: {
    country: string;
  };
  wind?: {
    speed: number;
  };
  dt?: number;
}

export interface City {
  name: string;
  country: string;
  lat: number;
  lon: number;
}
