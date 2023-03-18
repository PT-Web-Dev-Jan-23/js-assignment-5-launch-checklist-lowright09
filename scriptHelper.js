// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
  
}

function validateInput(testInput) { 
    if (testInput === "") {
        return("Empty")
}    else if (isNaN(testInput)){
        return("Is a Number")
    } else if (!isNaN(testInput)){
        return ("Not a Number")
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus =  document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let launchStatus =  document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus")

            if (validateInput(pilot) === "Empty" || (validateInput(copilot)) === "Empty"){
               alert("All fields are required! ")
            } else if(validateInput(pilot) === "Is a Number " || (validateInput(copilot)) === "Is a Number"){
                  alert("Make sure to enter valid information for each field!")
            } else if  (list.style.visibility = "visible") {
                 pilotStatus.innerHTML = `Pilot ${pilot}`
            } 
            
            if (fuelStatus < 10000 && cargoStatus <= 10000) {
                fuelStatus.innerHTML= `not enough fuel for the journey ${fuelLevel}` ;
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = `Shuttle not ready for take off ${launchStatus}`;
                launchStatus.style.color = "rgb (199, 37,78)";
            } else if (fuelStatus >= 10000 && cargoStatus >10000){
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = `Shuttle not ready for take off ${launchStatus}`;
                launchStatus.style.color = "rgb (199, 37,78)";
            } else if (fuelStatus < 10000 && cargoStatus > 10000) {
                fuelStatus.innerHTML = "Fuel level too low enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = `Shuttle not ready for take off ${launchStatus}`;
                launchStatus.style.color = "rgb (199, 37,78)";
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = `Shuttle is ready for take off ${launchStatus}`;
                
            }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
