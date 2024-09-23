const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require("../services");


async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        })
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an airplane",
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while create an airplane',
            data: {},
            error: error.message
        });
    }
}


async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes()
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an airplane",
            data: airplanes,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while geting airplanes',
            data: {},
            error: error.message
        });
    }
}


async function getAirplaneById(req, res) {
    try {
        const id = req.params.id;
        const airplane = await AirplaneService.getAirplane(id)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an airplane",
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while geaing an airplane',
            data: {},
            error: error.message
        });
    }
}


async function updateAirplane(req, res) {
    try {
        const id = req.params.id;
        const data = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }                

        const updatedAirplane = await AirplaneService.updateAirplane(id,data)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an airplane",
            data: updatedAirplane,
            error: {}
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while updating an airplane',
            data: {},
            error: error.message
        });
    }
}


async function deleteAirplane(req, res) {
    try {
        const id = req.params.id;
        console.log(id)        

        const updatedAirplane = await AirplaneService.destroyAirplane(id)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an airplane",
            data: updatedAirplane,
            error: {}
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while deleteing an airplane',
            data: {},
            error: error.message
        });
    }
}


// Exporting the functions to be used elsewhere
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    updateAirplane,
    deleteAirplane,
};