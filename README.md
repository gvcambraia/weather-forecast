# Project

## Features

- Displays current weather information (temperature, humidity, pressure) for Joinville, San Francisco, and Urubici.
- Color-coded temperature display for easy interpretation of weather conditions.
- Responsive design that works on various screen sizes.
- Easy city selection to view weather data for different locations.

## Technologies Used

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **TypeScript**: For type safety and better development experience
- **API**: OpenWeatherMap API for fetching weather data

## Project Structure

```
project
├── src
│   ├── app
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components
│   │   ├── WeatherCard
│   │   │   ├── __tests__
│   │   │   │   └── WeatherCard.test.tsx
│   │   │   └── index.ts
│   │   └── WeatherDashboard
│   │       ├── __tests__
│   │       │   └── WeatherDashboard.test.tsx
│   │       └── WeatherDashboard.tsx
│   ├── constants
│   │   └── cities.ts
│   ├── services
│   │   └── weatherApi.ts
│   ├── types
│   │   ├── jest-dom.d.ts
│   │   └── weather.ts
│   └── utils
│       ├── colorCoder.ts
│       └── formatters.ts
└── README.md
```

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/gvcambraia//weather-forecast.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-forecast
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

To start using the project, run the following command:

```bash
npm run dev
```

This will launch the application, and you can access it via your web browser at `http://localhost:3000`.

## API Key

To fetch weather data, you will need an API key from OpenWeatherMap. Sign up at [OpenWeatherMap](https://openweathermap.org/) and replace the placeholder in `src/services/weatherApi.ts` with your API key.

Once you have the API Key, you must add that to your env variables as `NEXT_PUBLIC_OPEN_WEATHERMAP_API_KEY`

## Contributing

We welcome contributions to the project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

## Contact

For any questions or feedback, please contact us at [gabriel@cambraia.com.br].

## License

This project is licensed under the MIT License.
