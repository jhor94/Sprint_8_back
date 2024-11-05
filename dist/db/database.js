"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnetion = exports.connection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Crea una conexión a la base de datos
const connection = promise_1.default.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.SQL_USER,
    password: process.env.PASSWORD, // Si no tienes contraseña, puedes dejarlo vacío
});
exports.connection = connection;
// Función para ejecutar consultas
const getConnetion = () => connection;
exports.getConnetion = getConnetion;
