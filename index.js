const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const Game = require("./models/gameModel");
const Publisher = require("./models/publisherModel");
const {createGame, listGames, updateGame, deleteGame} = require("./methods/gameMethods");
const {createPublisher, listPublishers, updatePublisher, deletePublisher} = require("./methods/publisherMethods");

(async () => {
    await Game.sync({alter: true});
    await Publisher.sync({alter: true});
    Publisher.hasMany(Game, {foreignKey: 'actorId'});
    Game.belongsTo(Publisher, {foreignKey: 'actorId'});

    if(argv.addGame && argv.gameTitle && argv.consoleRelease && argv.releaseYear){
        createGame({gameTitle: argv.gameTitle, consoleRelease: argv.consoleRelease, releaseYear: argv.releaseYear});
    }
    else if(argv.addPublisher && argv.publisherName){
        createPublisher({publisherName: argv.publisherName});
    }
    else if(argv.listAllGames){
        listGames();
    }
    else if(argv.listAllPublishers){
        listPublishers();
    }
    else if(argv.updateGame){
        searchGame = {gameTitle: argv.gameTitle};
        replaceGame = {gameTitle: argv.newGameTitle, consoleRelease: argv.newConsoleRelease, releaseYear: argv.newReleaseYear};
        await updateGame(searchGame, replaceGame);
    }
    else if(argv.updatePublisher){
        searchPublisher = {publisherName: argv.publisherName};
        replacePublisher = {newPublisherName: argv.newPublisherName};
        await updatePublisher(searchPublisher, replacePublisher);
    }
    else if(argv.deleteGame){
        const findGame = {gameTitle: argv.gameTitle}
        await deleteGame(findGame);
    }
    else if(argv.deletePublisher){
        const findPublisher = {publisherName: argv.publisherName}
        await deletePublisher(findPublisher);
    }
})(argv)