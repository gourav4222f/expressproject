const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
    const requiredFields = ['name', 'description', 'stock_quantity', 'price'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: "Missing required fields",
                data: {},
                error: `The following fields are required: ${missingFields.join(', ')}`
            });
    }
    next();
}

module.exports = { validateCreateRequest };