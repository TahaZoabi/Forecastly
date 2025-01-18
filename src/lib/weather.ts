export interface Location {
  name: string;
  localtime: string;
  country: string;
  region: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  wind_kph: number;
  humidity: number;
  feelslike_f: number;
  feelslike_c: number;
  last_updated: string;
  is_day: number;

  condition: Condition;
}

export interface Day {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    avghumidity: number;
    condition: Condition;
  };
}

export interface WeatherData {
  location: Location;
  current: Current;
  forecast: {
    forecastday: Day[];
  };
}
