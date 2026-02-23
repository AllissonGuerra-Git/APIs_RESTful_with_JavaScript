// Mudamos require para import (o padrão moderno que o seu projeto agora exige)
import mysql from "mysql2/promise";
import 'dotenv/config'; 

console.log(process.env.DB_HOST, process.env.DB_PASSWORD, process.env.DB_USER);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});

// A mudança crucial: trocamos module.exports por export default
export default pool;
