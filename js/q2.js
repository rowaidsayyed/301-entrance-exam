'use strict';

function stars(num){
  for(var i = 0 ; i<num ; i++){
    var u = '';
    for(var j = 0 ; j< i+1 ;j++){
      u +='*';
    }
    console.log(u);
  }
}

stars(5);
