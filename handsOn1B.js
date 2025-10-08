function calculator(){
    let heigth = document.getElementById("heigth").value;
    let weighty = document.getElementById("weight").value;
    let bmi = weight / (heigth * weight);
    if(bmi<18.5){
      console.log("You are under weigth. Your BMI is " + bmi);
}else if (bmi>=18.5 && bmi<24.9){
    console.log("You have a normal weigth. + Your BMI is " + bmi);
}else if (bmi>25 && bmi<29.9){
    console.log("You are over weight. Your BMI is " + bmi)
}else{
    console.log("You are obese.Your BMI is " + bmi)

}

}