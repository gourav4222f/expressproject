const CrudRepository = require("./crud-repository");

const {Productdata} = require("../models");

class ProductRepository extends CrudRepository{
    constructor(){
        
        super(Productdata)
    }
}

module.exports = new ProductRepository();