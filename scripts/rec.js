function result() {

  var form_ele = document.forms.bmi_form;

  var formD = new FormData(form_ele);

  var age = formD.get('age')
  var height = formD.get('height')
  var weight = formD.get('weight') 

  var heightInMeters = height / 100; // Convert height from cm to meters
  var bmi = weight / (heightInMeters * heightInMeters);
  

  var roundedBMI = bmi.toFixed(1);

  document.write(`<divclass="card"><h2>Your BMI is ${parseFloat(roundedBMI)}<h2></div>`)
  
}




 // Age in years


