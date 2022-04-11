const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Publisher = connection.define("Publisher", {
    publisherName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Publisher;