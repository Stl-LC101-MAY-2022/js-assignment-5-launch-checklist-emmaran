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

    // ~new code
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = `
    <div>
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src=${imageUrl}></img>
    </div>`;
    // ~end new code
}

function validateInput(testInput) {
    //~new code
    if (testInput.value === '') {
        return 'Empty';
    } else if (isNaN(testInput.value) === true ) {
        return 'Not a Number';
    } else if (isNaN(testInput.value) === false) {
        return 'Is a Number';
    } else {
        return 'You broke our code.';
    };
    //~end new code
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //~new code
    const pilotStatus = document.querySelector("#pilotStatus");
    const coPilotStatus = document.querySelector("#coPilotStatus");
    const fuelStatus = document.querySelector("#fuelStatus");
    const cargoStatus = document.querySelector("#cargoStatus");
    const launchStatus = document.querySelector("#launchStatus");

    function validatePilot() {
    if (validateInput(pilot) === 'Is a Number' || validateInput(pilot) === 'Empty' || validateInput(pilot) === 'You broke our code.') {
        alert("Pilot Name should not be a number.");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
        return 'Ready';
    };
};

    function validateCopilot() { 
        if (validateInput(copilot) === 'Is a Number' || validateInput(copilot) === 'Empty' || validateInput(copilot) === 'You broke our code.') {
        alert("Co-pilot Name should not be a number.");
    } else {
        coPilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
        return 'Ready';
    };
};
    
    function validateFuel() {
        if (validateInput(fuelLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Empty' || validateInput(fuelLevel) === 'You broke our code.') {
        alert("Fuel Level should be a number.");
    } else if (fuelLevel.value <= 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level too low for launch.`;
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        event.preventDefault();
    } else {
        fuelStatus.innerHTML = `Fuel level is ready for launch.`;
        return 'Ready';
    };
};

    function validateCargo() {
        if (validateInput(cargoLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Empty' || validateInput(cargoLevel) === 'You broke our code.') {
        alert("Cargo Mass should be a number.");
    } else if (cargoLevel.value >= 10000) {
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo Mass exceeds the maximum.`;
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        event.preventDefault();
    } else {
        cargoStatus.innerHTML = `Cargo is ready for launch.`;
        return 'Ready';
    };
};

    // if (validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && cargoLevel.value >= 10000 && fuelLevel.value <= 10000) {
    //     list.style.visibility = 'visible';
    //     launchStatus.style.color = 'green';
    //     launchStatus.innerHTML = 'Shuttle Is Ready for Launch';
    //     event.preventDefault();
    // }

    if (validatePilot() === 'Ready' && validateCopilot() === 'Ready' && validateFuel() === 'Ready' && validateCargo() === 'Ready') {
        list.style.visibility = 'visible';
        launchStatus.style.color = 'green';
        launchStatus.innerHTML = 'Shuttle Is Ready for Launch';
        event.preventDefault();
    };

    //~end new code
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        // ~new code
        return response.json();
        // ~end new code
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    // ~new code
    planetNumber = Math.floor(Math.random()*(planets.length));

    return planets[planetNumber];
    // ~end new code
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
