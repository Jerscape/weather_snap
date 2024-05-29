const { Pool } = require("pg");
require('dotenv').config({ path: '../.env' })


//connection parameters
const dbParams = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
};

//creates a pool instance
const pool = new Pool(dbParams);

//test the database connection
pool.connect()
  .then(client => {
    console.log("sucessful connection to db");
    return client.query('SELECT * FROM weather_data')
      .then(result => {
        console.log('Test query result:', result.rows);
        client.release();
      })
      .catch(e => {
        console.error('Error during test query', e);
        client.release();
      })
  })
  .catch(e => console.error('Error connecting to the database', e));

module.exports = pool;