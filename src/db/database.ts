import mysql from 'mysql2/promise';
import dotenv from 'dotenv'


dotenv.config();

// Crea una conexión a la base de datos
const connection = mysql.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.SQL_USER,
    password: process.env.PASSWORD, // Si no tienes contraseña, puedes dejarlo vacío

});

// Función para ejecutar consultas
const getConnetion = () => connection

export { connection,getConnetion }
