import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Station = db.define(
  "Station",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streamUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    websiteUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Station;
