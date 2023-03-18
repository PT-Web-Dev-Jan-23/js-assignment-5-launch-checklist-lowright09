// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanetsResponse = myFetch();
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
        let list = document.getElementById("faultyItems");
        list.style.visibility = "hidden";
        let form = document.querySelector("form");
       form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilot = document.querySelector("input[name=pilotName]").value;
       let copilot = document.querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel = document.querySelector("input[name=cargoMass]").value;
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       });
});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;