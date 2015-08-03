//plug in a number and get all the numbers its divisible by

var isDivisibleBy = function(number){
  if(typeof number === "number"){
    for(var i=0; i<number; i++){
      if(number%i===0){
        console.log(i);
      }
    }
  }
  else {
    console.log(number+" is not a number. please try again.");
    return function() { alert(number+" is not a number!");};
      }
};
isDividedBy(true);
isDividedBy(342);
isDividedBy("a fish");
  