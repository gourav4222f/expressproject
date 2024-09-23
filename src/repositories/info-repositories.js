const InfoModel = require("../models/info");
const CrudRepositories = require('./crud-repository');

class InfoRepositories extends CrudRepositories {
    constructor() {
        super(InfoModel);
    }
}

module.exports = InfoRepositories;