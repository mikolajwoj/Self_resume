// index js 

// var number = 5; 
// let name = "Mikolash"; 

// number = 12; 
// name ="Andriej "; 
// //Writing to the document
// document.writeln(name + number);
// alert("Hello Website") 
const formInfo = document.getElementById("formInfo"); 

let hasJob = false; 
if(hasJob){
    // I have a job 
    showMessage("Thanks for visiting, I'm curentlly employed."); 
}
else{
    showMessage("Please look around, I'm currently looking for a position"); 
}

let today = new Date(); 
let dayOfWeek = today.getDay(); 

if (dayOfWeek === 0 || dayOfWeek === 6){
    showMessage("Since it is the weekend please be patience with my returning to your email"); 
} 

function showMessage(message){  
    formInfo.innerHTML = "<p>" + message + "</p>" ;
    // document.writeln("<p>" + message + "</p>"); 
    // document.writeln("<hr/>")
} 

function clearMessage(){
    formInfo.innerHTML = ""; 
} 

const contactForm = document.getElementById("contactForm"); 
contactForm.addEventListener("submit", function(event){
    event.preventDefault(); 
    showMessage("Please wait, sending your email");
}); 

// // const experiences = document.getElementsByClassName("experience"); 
// // for(let x=0; x < experiences.length; x++){

// // }