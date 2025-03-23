export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}°C`;
}

export function formatHumidity(humidity: number): string {
  return `${humidity}%`;
}

export function formatPressure(pressure: number): string {
  return `${pressure} hPa`;
}