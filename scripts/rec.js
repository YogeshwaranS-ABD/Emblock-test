

cont.write(recs);

const weight = document.getElementById("weight").value;
const height = document.getElementById("height").value; // Height in centimeters
const age = document.getElementById("age").value;

function result(weight, height, age) {

  const heightInMeters = height / 100; // Convert height from cm to meters
  const bmi = weight / (heightInMeters * heightInMeters);
  

  const roundedBMI = bmi.toFixed(1);

  return parseFloat(roundedBMI);
  document.write(`<divclass="card"><h2>Your BMI is ${parseFloat(roundedBMI)}<h2></div>`)
}


 // Age in years


