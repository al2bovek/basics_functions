 "use strict";
 
const n = prompt("positive number");
const d = prompt("positive number");
const getRemainder = (n, d) => {
  return n % d;
}
 document.getElementById("fn").innerHTML = getRemainder(n, d);
