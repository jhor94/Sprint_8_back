"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Persona = connectiondb_1.default.define('Persona', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    localizacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    hobby: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Persona;
