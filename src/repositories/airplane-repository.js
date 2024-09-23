const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
    /**
     *This is a constructor to creat the crud function for the Airplane model
     *
     */
    constructor() {
        super(Airplane);
    }
}


module.exports = new AirplaneRepository();