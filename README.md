# Forecastly

A simple, frontend-only weather application that provides real-time weather information and forecasts. Built with vanilla JavaScript, Forecastly lets users view current weather conditions for their location, search for weather data across different cities, and access 3-day weather forecasts.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://forecastly-tau.vercel.app/)

## Features

- **Current Location Weather**: Automatically detects and displays weather data based on user's geolocation
- **Global City Search**: Search and view weather information for any city worldwide
- **3-Day Forecast**: Access detailed weather forecasts for the next three days
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Real-time Updates**: Fetches latest weather data from WeatherAPI

## Tech Stack

- **Frontend**: Vite, Vue js, TypeScript, Tailwind CSS
- **API**: [WeatherAPI](https://www.weatherapi.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Demo

Visit the live application: [Forecastly](https://forecastly-tau.vercel.app/)

## Implementation Details

### Weather Data Integration

The application integrates with WeatherAPI to fetch:
- Current weather conditions
- Temperature data
- Humidity levels
- Wind speed and direction
- 3-day weather forecasts

### Core Functionality

1. **Geolocation**
   - Automatically detects user location on load
   - Requests permission for location access
   - Falls back to default location if permission denied

2. **Search System**
   - Real-time city search functionality
   - Global coverage for weather data
   - Error handling for invalid locations

3. **Weather Display**
   - Current conditions visualization
   - Temperature in Celsius/Fahrenheit
   - Detailed meteorological data
   - Multi-day forecast view

## Local Development

### Prerequisites

- Modern web browser
- Internet connection for API calls
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. Clone the repository
```bash
git clone https://github.com/TahaZoabi/Forecastly.git
```

2. Navigate to project directory
```bash
cd Forecastly
```

3. Open in browser
```bash
# Simply open index.html in your preferred browser
```

### Development Notes

- No build process required
- No backend setup needed
- Enable location services in browser for full functionality

## API Integration

### WeatherAPI Setup

1. Visit [WeatherAPI](https://www.weatherapi.com/) to create an account
2. Generate your API key
3. Replace the existing API key in the code with your own

### API Features Used

- Current weather endpoint
- Forecast endpoint
- Location search
- Geolocation support

## Deployment

### Vercel Deployment

The application is hosted on Vercel. To deploy your own instance:

1. Fork this repository
2. Connect your fork to Vercel
3. Deploy with default settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
