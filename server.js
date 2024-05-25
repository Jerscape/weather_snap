const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios')
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));


// app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page if using HTML files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const lon = -89.224115;
  const lat = 48.436762;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url)
    const weatherData = response.data
    //this passes the weather data to the index.ejs template
    console.log('Weather data:', JSON.stringify(weatherData, null, 2));
    res.render('index', {
      weather: weatherData,
      title: 'My Express App',
      message: 'Hello, World!'
    })

  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.render('index', { 
      weather: null,
      title: 'My Express App',
      message: 'Hello, World!'
     });
  
  }
  //https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}&units=metric
  // Render the index.ejs template with some example data
  // const exampleData = {
  //   title: 'My Express App',
  //   message: 'Hello, World!',
  //   // weatherData: {
  //   //   name: 'Example City',
  //   //   temp: 25,
  //   //   description: 'Sunny'
  //   // }
  // };
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
