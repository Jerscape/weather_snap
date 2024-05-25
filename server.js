const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'))


// app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page if using HTML files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  // Render the index.ejs template with some example data
  const exampleData = {
    title: 'My Express App',
    message: 'Hello, World!',
    // weatherData: {
    //   name: 'Example City',
    //   temp: 25,
    //   description: 'Sunny'
    // }
  };
  res.render('index', exampleData);
});

app.listen(PORT, ()=> {
  console.log(`Server is running on http://localhost:${PORT}`)
})
