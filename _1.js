 "use strict";
 function celsiusToFahrenheit(temp) {
  return (9/5 * temp) + 32;
}
const temp = prompt("temperature in Celsius");
document.getElementById("fn").innerHTML = celsiusToFahrenheit(temp);