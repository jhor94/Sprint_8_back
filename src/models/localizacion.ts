import {DataTypes}  from "sequelize";
import sequelize from "../db/connectiondb";

const Localizacion = sequelize.define('localizaciones',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: DataTypes.DECIMAL(10,8),
        allowNull: false
    },
    longitud: {
        type: DataTypes.DECIMAL(11,8),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt:false
})

export default Localizacion