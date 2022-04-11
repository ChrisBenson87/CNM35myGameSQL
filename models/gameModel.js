const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Game = connection.define("Game", {
    gameID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gameTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    consoleRelease: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Game;