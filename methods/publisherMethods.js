const { argv } = require("yargs");
const Publisher = require("../models/publisherModel");

exports.createPublisher = async(publisher) => {
    await Publisher.create(publisher)
    console.log(`Publisher has been added ${publisher.companyName}`)
}

exports.listPublishers = async () => {
    const listAllPublishers = await Publisher.findAll({
        where: {
            attribute: ["publisherName"]
        }
    })
}

exports.updatePublisher = async () => {
    await Publisher.update(replacePublisher, {where: searchPublisher});
    console.log(`${searchPublisher.publisherName} is updated`);
}

exports.deletePublisher = async () => {
    await Publisher.destroy({where: searchPublisher});
    console.log(`${searchPublisher.publisherName} is deleted`);
}