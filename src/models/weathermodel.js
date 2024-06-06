
const db = require('../../config/db');



const saveSnapData = (data) => {
  console.Console.toString("logging data coming into saveSnapData:", data)
  const queryParams = [data.temperature, data.wind, data.description, data.humidity, 
    data.pressure, data.visibility, data.wind_direction, data.sunrise, data.sunset, data.city];

    return db.query(`INSERT INTO weather_now (temperature, wind, description, humidity, pressure, visiblity, 
      wind_direction, sunrise, sunset, city) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING * `, queryParams)
    
}

module.exports = {
  saveSnapData
}

// id             | integer                     |           | not null | nextval('weather_data_id_seq'::regclass)
// temperature    | numeric(5,2)                |           | not null | 
// wind           | numeric(5,2)                |           | not null | 
// humidity       | integer                     |           | not null | 
// created_at     | timestamp without time zone |           |          | CURRENT_TIMESTAMP
// description    | text                        |           |          | 
// pressure       | integer                     |           |          | 
// visibility     | integer                     |           |          | 
// wind_direction | text                        |           |          | 
// sunrise        | time without time zone      |           |          | 
// sunset         | time without time zone      |           |          | 
// city    