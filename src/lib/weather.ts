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

  condition: Condition;
}

export interface WeatherData {
  location: Location;
  current: Current;
  forecast?: object;
}
