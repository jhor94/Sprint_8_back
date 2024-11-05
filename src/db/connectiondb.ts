import { Sequelize } from "sequelize";

const sequelize = new Sequelize ("Personas", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

export default sequelize;

