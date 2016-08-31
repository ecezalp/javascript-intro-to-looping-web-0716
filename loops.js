function forLoop (array) {
  array.push("I am 1 strange loop.")
  for (let i = 1; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop (num) {
  while (num > 0) {
    console.log(--num)
  }
  return "done"
}




function doWhileLoop (array){
      function maybeTrue() {
      Math.random() >= 0.5
    };
  do {
    array.pop()}
    while (array.length > 0 && maybeTrue()); 
return array
  }