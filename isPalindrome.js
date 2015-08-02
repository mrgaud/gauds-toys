//This function will take a string("str") and return true if it is spelled the same forward as backwards.
//Made as a project for Codewars.

function isPalindrome(str) {
  if(str === null) {
    return false;
    }
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g,''); 
    var std = str.replace(" ", "").split('').reverse().join('');
  if(str == std){
    return true;
  }
  else{
    return false;
    }
  }
console.log(isPalindrome("cat"));
console.log(isPalindrome("dick 'x' fart"));
console.log("...............");
console.log(isPalindrome("faraf"));
console.log(isPalindrome("Race, car"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("12321"));
