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
npm start
```

This will launch the application, and you can access it via your web browser at `http://localhost:3000`.

## API Key

To fetch weather data, you will need an API key from OpenWeatherMap. Sign up at [OpenWeatherMap](https://openweathermap.org/) and replace the placeholder in `src/services/weatherApi.ts` with your API key.

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

```
MIT License

Copyright (c) 2023 Gabriel Cambraia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
