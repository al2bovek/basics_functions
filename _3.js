 "use strict";
 const a = +prompt("side a");
 const b = +prompt("side b");
 const c = +prompt("side c");

 const calcArea = (a, b, c) => {
   const s = (a + b + c) / 2;
   return (Math.sqrt(s*(s - a) * (s - b) * (s - c))).toFixed(2);
 }
 document.getElementById("fn").innerHTML = calcArea(a, b, c);