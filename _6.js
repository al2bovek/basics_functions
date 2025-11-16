"use strict";

const t = prompt("positive number");
const fn = () => {
  return (new Date).getSeconds();
};
const callNTimes = (t, fn) => {
  for (let i = 0; i < t; i++) {
    console.log(fn());
  }
}
callNTimes(t, fn);
