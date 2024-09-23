const airplaneRepository = require("../repositories/airplane-repository");

/**
 * This createAirplane function will create the airplane using the airplane repository
 * @param {*} data The data is an object which will get created in the database
 * @returns This function will return the created airplane if successful, otherwise an error
 */

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * This getAirplane function will retrieve the data using the id 
 * @param {*} id The id used to retrieve the data
 * @returns This function will return the data if successful, otherwise an error
 */
async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id)        
        return airplane
    } catch (error) {
        console.error(error);
        throw error;        
    }   
}

/**
 * This getAirplanes function will retrieve all data from the table
 * @returns This function will return an array of data if successful, otherwise an error
 */

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll()
        return airplanes;
    } catch (error) {
        console.error(error);
        throw error;                
    }   
}

/**
 * This destroyAirplane function will destroy the data from the table by id 
 * @param {*} id The id used to find the data to destroy
 * @returns This function will return true if successful, otherwise an error/false
 */
async function destroyAirplane(id){
    try {
        console.log(`i m deleteing ${id} from the model`)            
        const result = await airplaneRepository.destroy(id)
        return result;
    } catch (error) {
        console.log(error)        
        throw error;
    }    
}

/**
 * This updateAirplane function updates the data of the airplane using the id.
 * @param {*} id The id used to find the data.
 * @param {*} data The data used to update from the last data.
 * @returns It returns the updated data.
 */
async function updateAirplane(id, data) {
    try {
        const updatedAirplane = await airplaneRepository.update(id, data);        
        return updatedAirplane;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createAirplane,
    updateAirplane,
    getAirplane,
    getAirplanes,
    destroyAirplane,
};

