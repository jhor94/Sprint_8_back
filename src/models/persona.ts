import { DataTypes } from "sequelize";
import baseDatos from "../db/connectiondb"
import sequelize from "../db/connectiondb"
const Persona = sequelize.define('Persona', {

    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    localizacion: {
        type: DataTypes.STRING,
    },
    hobby: {
        type: DataTypes.STRING,
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Persona
