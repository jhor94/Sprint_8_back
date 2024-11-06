"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Localizacion = connectiondb_1.default.define('localizaciones', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: sequelize_1.DataTypes.DECIMAL(10, 8),
        allowNull: false
    },
    longitud: {
        type: sequelize_1.DataTypes.DECIMAL(11, 8),
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Localizacion;
