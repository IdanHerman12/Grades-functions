'use strict';
const arr = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
console.log(arr);

//he range of the grades (difference between highest and lowest)
function RangeGrades(grades){
  let localArr=grades.slice();
   localArr.sort((a,b)=> b-a);
  let max=localArr[0];
  let min=localArr[localArr.length-1];
  console.log(localArr);
  console.log("Stats:");
  console.log("range="+(max-min));
}
RangeGrades(arr);
//finding the the median grade (the grade in the middle)
function medianGrade(grades){
    let mid;
    let localArr=grades.slice();
    localArr.sort((a,b)=> b-a);
    if(localArr.length %2===0){
        mid=(localArr[localArr.length/2] + localArr[(localArr.length/2)-1])/2;
        console.log("Median="+mid);
    }
    else{
     mid=(grades.length-1)/2;
    console.log("Median="+localArr[Math.floor(mid)]);
}
}
medianGrade(arr);

//The range of the grades from the second half of the school year
function halfRange(grades){
    let min;
    let max;
    let localArr=grades.slice();
    let halfArr=localArr.slice(Math.floor(((localArr.length)/2)));
halfArr.sort((a,b)=> b-a);
min=halfArr[halfArr.length-1];
max=halfArr[0];
    console.log("Half range="+(max-min));
}
halfRange(arr);
