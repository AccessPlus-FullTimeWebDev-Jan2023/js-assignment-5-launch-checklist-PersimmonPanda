// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML=
    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(Number(testInput)) === false) {
        return "Is a number"
    } else if (isNaN(Number(testInput)) === true) {
        return "Not a number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Enter valid input")
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        alert("For valid input, enter alphabetic characters")
    } else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("For valid input, enter a number")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
    }

    if (fuelLevel < 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Too much Cargo for launch";
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level a-go for launch";
        cargoStatus.innerHTML = "Too much Cargo for launch";
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo is a-go for launch";
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level is a-go for launch";
        cargoStatus.innerHTML = "Cargo is a-go for launch";
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle Ready for Launch";
    }

}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
