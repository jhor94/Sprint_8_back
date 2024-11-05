"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Book = connectiondb_1.default.define('Book', {
    id_book: {
        type: sequelize_1.DataTypes.INTEGER().UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    title: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: false
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER(),
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: 1
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Book; //exportar la clase para poderla usar en otros archivos
