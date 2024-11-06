import {DataTypes}  from "sequelize";
import sequelize from "../db/connectiondb";

const Eventos = sequelize.define('eventos',{
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    creado_en: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    actualizado_en: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: 'CURRENT_TIMESTAMP'
    }
},{
    timestamps:true,
    underscored:true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en'
})

export default Eventos