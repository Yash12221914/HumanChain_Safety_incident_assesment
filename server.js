const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/safetyincidents",require("../humanIncidentApi/routes/incidentRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
