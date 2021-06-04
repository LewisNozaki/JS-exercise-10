"use strict";

// Solution 1
function solution(list){
  let result = [];
  
  for (let i = 0; i < list.length; i++) {
    let j = i + 1;
    let group = "";
    let arr = [];
    
    if (list[j] !== (list[i] + 1)) {
      result.push(list[i]);
    } else {
      while (list[j] === (list[i] + 1)) {
        arr.push(list[i]); 

        if (list[j + 1] !== (list[j] + 1)) {
          arr.push(list[j]);
        }

        i = j;
        j++;
      }
    }
    
    if (arr.length > 2) {
      group = arr[0] + "-" + arr[arr.length-1];
      result.push(group);
    } else {
      arr.forEach(number => result.push(number));
    }
  }
  
  return result.join(",");
}
