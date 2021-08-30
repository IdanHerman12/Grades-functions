'use strict';
const arr = [73, 91, 88, 56, 62, 84, 95, 96, 88,92];
console.log(arr.sort((a,b)=> b-a));
//he range of the grades (difference between highest and lowest)
function RangeGrades(grades){
  let localArr= grades.sort((a,b)=> b-a);
  let max=localArr[0];
  let min=localArr[localArr.length-1];
  console.log("range="+(max-min));
}
RangeGrades(arr);
//finding the the median grade (the grade in the middle)
function medianGrade(grades){
    let localArr= grades.sort((a,b)=> b-a);
    let mid=(grades.length-1)/2;
    console.log("middle grade="+localArr[Math.floor(mid)]);
}
