import React, { useEffect, useState } from 'react';
import { Cloud, Sunset, Sun, Moon } from 'lucide-react';

interface WeatherWidgetProps {
  tWeather: string;
  tSunset: string;
  tBlueHour: string;
}

export default function WeatherWidget({ tWeather, tSunset, tBlueHour }: WeatherWidgetProps) {
  const [data, setData] = useState<{ temp: number; sunset: string; isDay: boolean } | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Vientiane Coordinates: 17.9653, 102.6143
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=17.9653&longitude=102.6143&current=temperature_2m,is_day&daily=sunset&timezone=Asia%2FBangkok'
        );
        const json = await res.json();
        
        if (json && json.current && json.daily) {
          const sunsetTime = new Date(json.daily.sunset[0]);
          setData({
            temp: Math.round(json.current.temperature_2m),
            isDay: json.current.is_day === 1,
            sunset: sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
          });
        }
      } catch (err) {
        console.error('Failed to fetch weather data', err);
      }
    }
    fetchWeather();
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-lg text-white">
      <div className="flex items-center gap-3 pr-4 sm:border-r border-slate-700/50">
        {data.isDay ? <Sun className="w-8 h-8 text-yellow-400" /> : <Moon className="w-8 h-8 text-blue-300" />}
        <div>
          <p className="text-xs text-slate-300 font-medium uppercase tracking-wider">{tWeather}</p>
          <p className="text-2xl font-bold text-white">{data.temp}°C</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Sunset className="w-8 h-8 text-sunset-orange" />
        <div>
          <p className="text-xs text-slate-300 font-medium uppercase tracking-wider">{tSunset} & {tBlueHour}</p>
          <p className="text-2xl font-bold text-white">{data.sunset}</p>
        </div>
      </div>
    </div>
  );
}
