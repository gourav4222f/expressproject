const { StatusCodes } = require('http-status-codes');
const { ProductService  } = require("../services");


async function createProducts(req, res) {
    try {
        const Product = await ProductService.createProduct({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock_quantity: req.body.stock_quantity,
        })
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an Products",
            data: Product,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while create an Products',
            data: {},
            error: error.message
        });
    }
}


async function getProducts(req, res) {
    try {
        const Products = await ProductService.getProducts()
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an Products",
            data: Products,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while geting Productss',
            data: {},
            error: error.message
        });
    }
}


async function getProductsById(req, res) {
    try {
        const id = req.params.id;
        
        const Product = await ProductService.getProduct(id)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an Products",
            data: Product,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while geaing an Products',
            data: {},
            error: error.message
        });
    }
}


async function updateProducts(req, res) {
    try {
        const id = req.params.id;
        const data = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock_quantity: req.body.stock_quantity,
        }                

        const updatedProducts = await ProductService.updateProduct(id,data)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an Products",
            data: updatedProducts,
            error: {}
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while updating an Products',
            data: {},
            error: error.message
        });
    }
}


async function deleteProducts(req, res) {
    try {
        const id = req.params.id;
        console.log(id)        

        const deleteProduct = await ProductService.destroyProduct(id);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully created an Products",
            data: deleteProduct,
            error: {}
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while deleteing an Products',
            data: {},
            error: error.message
        });
    }
}


// Exporting the functions to be used elsewhere
module.exports = {
    createProducts,
    getProducts,
    getProductsById,
    updateProducts,
    deleteProducts,
};