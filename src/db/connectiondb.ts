import { Sequelize } from "sequelize";

const sequelize = new Sequelize ("productos", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

export default sequelize;