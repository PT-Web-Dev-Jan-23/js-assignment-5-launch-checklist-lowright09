// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) { 
    if (testInput === "") {
        return("Empty")
}    else if (isNaN(testInput)){
        return("Is a Number")
    } else if (isNaN(testInput)){
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
                window.alert("All fields are required! ")
            } else if(validateInput(pilot) === "Is a Number " || (validateInput(copilot)) === "Is a Number")
              {  window.alert("Make sure to enter valid information for each field!")
            } else {
                list.style.visibility = "visible";
                pilotStatus.innerHTML = `Pilot ${pilot}`
            } if (fuelStatus < "10,000 liters") {
                list.style.visibility = "visible";
                fuelStatus.innerHTML= `not enough fuel for the journey ${fuelLevel}` ;
                launchStatus.innerHTML = `Shuttle not ready for take off ${launchStatus}`;
            } else if (cargoStatus > "10,000 kilograms"){
                list.style.innerHTML = "visible";
                cargoStatus.innerHTML = `there is too much mass for the shuttle to take off${cargoLevel}`;
                launchStatus.innerHTML = `shuttle not ready for take off ${launchStatus}`
            } 

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
