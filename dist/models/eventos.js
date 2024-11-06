"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Eventos = connectiondb_1.default.define('eventos', {
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    inicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    creado_en: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    actualizado_en: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en'
});
exports.default = Eventos;
