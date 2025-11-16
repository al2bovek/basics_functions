 "use strict";
 const namePerson_1 = prompt("name");
 const namePerson_2 = prompt("name");
 const weigthP_1 = prompt("weigth kg");
 const heigthP_1 = prompt("heigth m");
 const weigthP_2 = prompt("weigth kg");
 const heigthP_2 = prompt("heigth m");
 function getBMI(w, h) {
  return Math.round(w / (h*0.01) ** 2 * 10) / 10;
 }
 const compareBMI = (getBMI) => {
return `Is ${namePerson_1}'s BMI higher than ${namePerson_2}'s? ${getBMI(weigthP_1, heigthP_1) > getBMI(weigthP_2, heigthP_2)}`;
 };
document.getElementById("fn").innerHTML = compareBMI(getBMI, weigthP_1, weigthP_2, heigthP_2, heigthP_2);


