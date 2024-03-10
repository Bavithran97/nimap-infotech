// const { Client } = require('pg');

// async function connectToDatabase() {
//     const client = new Client({
//         user: process.env.POSTGRES_USER,
//         host: process.env.POSTGRES_HOST,
//         database: process.env.POSTGRES_DB,
//         password: process.env.POSTGRES_PASSWORD,
//         port: 5432,
//     });

//     try {
//         await client.connect();
//         console.log('Connected to the database');
//         return client;
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//         throw error;
//     }
// }

// module.exports = connectToDatabase;

// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
           host: process.env.POSTGRES_HOST,
     database: process.env.POSTGRES_DB,
             password: process.env.POSTGRES_PASSWORD,
         port: 5432,
});

pool.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(error => console.error('Error connecting to the database:', error));


const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

module.exports = {
  query,
};