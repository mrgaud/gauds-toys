// tells you weather N is divisable by x and y;

function isDivisible(n, x, y) {
if(n%x===0 && n%y===0){ return true; }
else{ return false; }
}
console.log(isDivisible(100,5,10));
console.log(isDivisible(100,3,10));
console.log(isDivisible(100,5,4));