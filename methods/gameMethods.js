const { argv } = require("yargs");
const Game = require("../models/gameModel");

exports.createGame = async (game) => {
    await Game.create(game)
    console.log(`Game Has Been added ${game.gameTitle}`)
}

exports.listGames = async () => {
    const listAllGames = await Game.findAll({
        where: {
            attribute: ["gameTitle", "consoleRelease", "releaseYear"]
        }
    })
}

exports.updateGame = async () => {
    await Game.update(replaceGame, {where: searchGame});
    console.log(`${searchGame.gameTitle} is updated`);
}

exports.deleteGame = async () => {
    await Game.destroy({where: searchGame});
    console.log(`${searchgame.gameTitle} is deleted`);
}