export function getTemperatureStyle(temperature: number): React.CSSProperties {
  if (temperature <= 5) return { color: '#2563eb' }; // blue-600
  if (temperature > 5 && temperature <= 25) return { color: '#f97316' }; // orange-500
  return { color: '#dc2626' }; // red-600
}

export function getTemperatureClass(temperature: number): string {
  if (temperature <= 5) return 'text-blue-600';
  if (temperature > 5 && temperature <= 25) return 'text-orange-500';
  return 'text-red-600';
}
