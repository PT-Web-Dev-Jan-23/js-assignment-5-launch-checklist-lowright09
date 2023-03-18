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
        return("Empty");
}    else if (isNaN(testInput)){
        return("Not a Number");
    } else if (!isNaN(testInput)){
        return ("Is a Number");
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus =  document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let launchStatus =  document.getElementById("launchStatus");
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");

            if (validateInput(pilot) === "Empty" || (validateInput(copilot) === "Empty"|| validateInput(cargoLevel)=== "Empty") || validateInput(fuelLevel)=== "Empty"){
               alert("All fields are required! ")
            } else if(validateInput(pilot) === "Is a Number " || (validateInput(copilot)) === "Is a Number" || validateInput(cargoLevel)=== "Not a Number" || validateInput(fuelLevel)=== "Not a Number" ){
                  alert("Make sure to enter valid information for each field!")
            } else { 
                list.style.visibility = "visible" ;
                 pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                 copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            }
            
            if (fuelLevel < 10000 && cargoLevel <= 10000) {
                fuel.innerHTML= "Fuel level too low for launch" ;
                cargo.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = ("rgb(199, 37, 78)");
            } else if (fuelLevel >= 10000 && cargoLevel >10000){
                fuel.innerHTML = "Fuel level high enough for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = ("rgb(199, 37, 78)");
            } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = ("rgb(199, 37, 78)");
            } else {
                fuel.innerHTML = "Fuel level high enough for launch";
                cargo.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = ("rgb(65, 159, 106)");
                
            }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json(addDestinationInfo);
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
