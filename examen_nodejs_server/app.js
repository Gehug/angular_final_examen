const express = require("express");
const cors = require("cors")
const Meteo = require("./models");

const HOSTNAME = "127.0.0.1";
const PORT = 3001;


let database = [];
let currentId = 0;

const app = express();
app.use(cors())
app.use(express.json()); // add json usage !!!!!!!!!!


function getAverageFormValues() {

    let tempCount = 0;
    let precipitationCount = 0;
    let windCount = 0;

    let averageTemp = 0;
    let averagePrecipitation = 0;
    let averageWind = 0;

    for (let i = 0; i < database.length; i++) {
        console.log(database[i].getFormType());
        console.log(database[i].getFormValue());


        if (database[i].getFormType() == "temperatuur") {
            averageTemp += database[i].getFormValue();
            tempCount++;

        }
        if (database[i].getFormType() == "neerslag") {
            averagePrecipitation += database[i].getFormValue();
            precipitationCount++;
        }
        if (database[i].getFormType() == "windsnelheid") {
            averageWind += database[i].getFormValue();
            windCount++;
        }

    }

    if (tempCount != 0) {
        averageTemp = averageTemp / tempCount;
    }

    if (precipitationCount != 0) {
        averagePrecipitation = averagePrecipitation / precipitationCount;
    }
    if (windCount != 0) {
        averageWind = averageWind / windCount;
    }


    return {"averageTemp": averageTemp, "averagePrecipitation": averagePrecipitation, "averageWind": averageWind};
}


app.listen(PORT, () => {
    console.log(`Server Listener on http://${HOSTNAME}:${PORT}/`);
});

// Get request
app.get("/measurements", (request, response) => {
    console.log(request.baseUrl); // Gets the base URL from the client back
    response.status(200).send(database); // make the status code 200 and add some information "Hello World"

});


// Post request

app.post("/measurements", (request, response) => {


    const {formType, formValue, formDate, formTime} = request.body;

    let meteoMeasurement = new Meteo(currentId, formType, parseInt(formValue), formDate, formTime);
    currentId++;
    database.push(meteoMeasurement);
    console.log(request.baseUrl); // Gets the base URL from the client back
    response.status(200).send("Added"); // make the status code 200 and add some information "Hello World"
});


app.get("/average", (request, response) => {

    console.log(request.baseUrl); // Gets the base URL from the client back
    response.status(200).send(getAverageFormValues()); // make the status code 200 and add some information "Hello World"

});