// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// MY ANSWER
function filter_list(l) {
    let newL = [];
    let stringR = [];
    l.forEach(x => Number.isInteger(x) ? newL.push(x): stringR.push(x))
    return newL
  }     
//   OTHER

function filter_list(l) {
    var integers = []
    for(var i = 0; i < l.length; i++){
    if(Number.isInteger(l[i])){
    integers.push(l[i])
      } 
    }
    return integers
  }


//   
