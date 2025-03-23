import WeatherDashboard from '../components/WeatherDashboard/WeatherDashboard';

export default function Home() {
  return (
    <div className='min-h-screen p-8 bg-gray-100'>
      <h1 className='text-3xl font-bold text-center mb-8'>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}
