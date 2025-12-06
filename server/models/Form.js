import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Form = db.define("Forms", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default Form;