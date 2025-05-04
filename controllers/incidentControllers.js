const asyncHandler = require("express-async-handler");
const Incident = require("../models/incidentModel");

//@desc Get all incidents
//@route GET /api/safetyincidents


const getIncidents = asyncHandler(async(req,res)=>{
    const incidents = await Incident.find();
    res.status(200).json(incidents);
});

const getIncident = asyncHandler(async(req,res)=>{
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404);
        throw new Error("Incident not found");
    }
    res.status(200).json(incident);
});

//@desc Create an incident
//@route POST /api/safetyincidents

const createIncident = asyncHandler(async(req,res)=>{
    console.log("The request body is : ",req.body);
    const { title, description, severity } = req.body;
    if (!title || !description || !severity) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const incident = await Incident.create({
        title,
        description,
        severity,
        //user_id: req.user.id
    });
    res.status(201).json(incident);
});

//@desc Delete specific incident by id
//@route DELETE /api/safetyincidents/:id

const deleteIncident = asyncHandler(async(req,res)=>{
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404);
        throw new Error("Incident not found");
    }
    await Incident.remove();
    res.status(200).json(incident);
});

module.exports = { 
    getIncidents,
    getIncident,
    createIncident,
    deleteIncident
};
