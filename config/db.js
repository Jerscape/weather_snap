const { Pool } = require("pg");
require('dotenv').config({ path: '../.env' })

console.log('PGHOST:', process.env.PGHOST);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('PGUSER:', process.env.PGUSER);
console.log('PGPASSWORD:', process.env.PGPASSWORD ? '****' : 'Not set');
console.log('PGPORT:', process.env.PGPORT);

//connection parameters
const dbParams = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
};

//creates a pool instance
const db = new Pool(dbParams);

//test the database connection
db.connect()
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