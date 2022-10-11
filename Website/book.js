"use strict";

let bookForm = document.getElementById("book-form");
let date = document.getElementById("date");
let patientID = document.getElementById("pid");
let time = document.getElementsByName("time[]");
let reason = document.getElementById("reason");

// Intitial Checking 
date.min = new Date().toISOString().split("T")[0];
let formCheckInputs = document.querySelectorAll(".form-check-input");
let formCheckLabels = document.querySelectorAll(".form-check-label");
checkRadioBox();


// Adding Event Listener
bookForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkPatientID();
    checkDate();
    checkTime();
});

for(let i = 0; i < formCheckInputs.length; i++){
    formCheckInputs[i].addEventListener("click", ()=>{
        checkRadioBox();
    });
}
patientID.addEventListener("input", ()=>{
    patientID.value = patientID.value.toUpperCase();
});
reason.addEventListener("change", checkReason);


function checkPatientID(){

    let patientIdError = document.getElementById("patient-id-error");
    let patientIDValue = patientID.value

    if(patientIDValue.match("^([A-Z])+([1-9])+([A-Z])$")){
        let alphabet = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
        let IdNumber = parseInt(patientIDValue.match(/\d+/)[0]);
        let IdString = patientIDValue.slice(-1);
        if (alphabet[IdNumber%26 ] == IdString){
            console.log("yes");
        } else {
            patientIdError.innerHTML = "Patient ID is not valid";
            console.log(IdNumber%26 + alphabet[IdNumber%26]);
            console.log(IdString);
        }
    } else {
        patientIdError.innerHTML = "Patient ID is not valid";
    }
}
function checkDate(){
    let dateValue = date.value;
    console.log(dateValue);
}
function checkTime(){
    let timeValue = time;
    for(let i = 0; i < time.length; i++){
        console.log(timeValue[i].value);
    }
}
function checkRadioBox(){
    for(let i = 0; i < formCheckInputs.length; i++){
            if(formCheckInputs[i].checked){
                formCheckLabels[i].classList.add("checked");
            } else {
                formCheckLabels[i].classList.remove("checked");
            }
    }    
}
function checkReason(){
    let reasonValue = reason.value
    let reasonText = document.querySelector(".reason-text")
    if (reasonValue == "Choose..."){
        reasonText.innerHTML = "";
    } else if (reasonValue == "Childhood Vaccination Shots"){
        reasonText.innerHTML = "Childhood vaccines: A disclaimer that multiple vaccines are normally administered in combination and may cause the child to be sluggish or feverous for 24 – 48 hours afterwards."
    } else if (reasonValue == "Influenza Shot") {
        reasonText.innerHTML = "Influenza: The best time to get vaccinated is in April and May each year for optimal protection over the winter months."
    } else if (reasonValue == "Covid Booster Shot") {
        reasonText.innerHTML = "Covid Booster Shot: Advice that everyone should arrange to have their third shot as soon as possible and adults over the age of 30 should have their fourth shot to protect against new variant strains.lood Test"
    } else if (reasonValue == "Blood Test") {
        reasonText.innerHTML = "Blood test: That some tests require some fasting ahead of time and that a staff member will advise them on this prior to the appointment."
    }
}
