import {DataTypes}  from "sequelize";
import sequelize from "../db/connectiondb";

const Venta = sequelize.define('ventas',{
    mes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ventas: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    unidades_vendidas: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    devoluciones: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ingresos_devoluciones: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
},{

    createdAt: false,
    updatedAt: false
})

export default Venta;