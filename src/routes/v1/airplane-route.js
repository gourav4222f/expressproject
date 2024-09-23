const express = require("express")

const { AirplaneController } = require("../../controllers")
const router = express.Router()


router.post("/",AirplaneController.createAirplane);

router.get("/",AirplaneController.getAirplanes);

router.get("/:id",AirplaneController.getAirplaneById);

router.put("/:id",AirplaneController.updateAirplane);

router.delete("/:id",AirplaneController.deleteAirplane);


module.exports=router

