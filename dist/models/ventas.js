"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Venta = connectiondb_1.default.define('ventas', {
    mes: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ventas: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    unidades_vendidas: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    devoluciones: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    ingresos_devoluciones: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Venta;
