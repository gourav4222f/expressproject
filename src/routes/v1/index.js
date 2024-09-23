const express = require("express");
const router = express.Router();

/*
* Routes imports
*/
const airplaneRoutes = require("./airplane-route")
const ProductRoutes = require("./Product-route")


/*
* Routes mounting
*/
router.use("/airplane",airplaneRoutes)
router.use("/Product",ProductRoutes)



/*
* Routes export
*/
module.exports = router;