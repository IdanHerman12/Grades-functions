'use strict';
const arr = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
console.log(arr.sort());
//he range of the grades (difference between highest and lowest)
function Range(grades){
  let localArr= grades.sort();
  let max=localArr[localArr.length-1];
  let min=localArr[0];
  console.log("range="+(max-min));
}
Range(arr);

function medianGrade(grades){
    
}