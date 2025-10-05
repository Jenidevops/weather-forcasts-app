exports.handler = async (event) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  try {
    // Get the city from query parameters
    const { city } = JSON.parse(event.body);
    
    // Make the API call using fetch
    const response = await fetch(
      `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    
    const data = await response.json();
    
    // Return the weather data
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch weather data' })
    };
  }
};