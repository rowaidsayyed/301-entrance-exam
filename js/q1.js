'use strict';
function greaterThan(arr,num){
  var counter =0;
  for(var i =0 ; i<arr.length ; i++){
    if(arr[i]>num){
      counter++;
    }
  }

  return counter;
}
console.log(greaterThan([1,2,3,4],2));
