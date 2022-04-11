const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Publisher = connection.define("Publisher", {
    publisherID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    publisherName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Publisher;