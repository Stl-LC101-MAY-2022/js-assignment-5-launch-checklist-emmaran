// Write your JavaScript code here!

window.addEventListener("load", function() {    

   let submitButton = document.getElementById("formSubmit");

   // add an alert to say all fields are required
   submitButton.addEventListener("click", function() {
        const launchStatusCheck = document.querySelector("#launchStatusCheck");
        const faultyItemsList = document.querySelector("#faultyItems");
        const pilotNameInput = document.querySelector("input[name=pilotName]");
        const copilotNameInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            formSubmission(document, faultyItemsList, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        };
   }) ;

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
       // ~new code
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)

       // ~end new code
   })
   
   
});