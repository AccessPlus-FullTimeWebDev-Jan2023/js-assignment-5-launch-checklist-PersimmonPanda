// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let pilotName = document.querySelector("input[name=pilotName]")
    let copilotName = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoMass = document.querySelector("input[name=cargoMass]")
    let faultyItems = document.getElementById("faultyItems")
    let launchForm = document.getElementById("launchForm")
    launchForm.addEventListener("submit", function(event) {
        event.preventDefault()
        formSubmission(window.document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    })


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.

       let pickyPlanets = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickyPlanets.name, pickyPlanets.diameter, pickyPlanets.star, pickyPlanets.distance, pickyPlanets.moons, pickyPlanets.image,);
   })
   
});