// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');

// Initialize express
const app = express();
const port = process.env.PORT || 3000;

// Create a new PostgreSQL pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test PostgreSQL connection
pool.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, PostgreSQL with Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
