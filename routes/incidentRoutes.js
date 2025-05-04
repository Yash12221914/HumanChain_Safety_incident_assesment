const express = require("express");
const router = express.Router();

const {
    getIncidents,
    getIncident,
    createIncident,
    deleteIncident,
} = require("../controllers/incidentControllers");

// router.route("/").get((req,res)=>{
//     res.status(200).json("Get all incidents");
// });

// router.route("/").post((req,res)=>{
//     res.status(200).json("create incident");
// });


// router.route("/:id").put((req,res)=>{
//     res.status(200).json("update incident");
// });


router.route("/").get(getIncidents).post(createIncident);

router.route("/:id").get(getIncident).delete(deleteIncident);
module.exports = router;