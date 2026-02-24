import mysql from "mysql2/promise";
import 'dotenv/config'; 

// Log para conferir se as variáveis estão carregando no terminal
console.log("Conectando ao host:", process.env.DB_HOST);

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

export default pool; // O 'require' do seed vai buscar esse carinha aqui