// returns a masked version of the string 
// all but the last 4 will be covered

function maskify(cc) {

  for(var i=0; i<cc.length-4; i++){
    cc = cc.replace(cc[i], '#')
  }
  return cc;
}
console.log(maskify("1654613218498321"));
console.log(maskify("peanutbutter"));
console.log(maskify("i love you"));
console.log(maskify("dick sausage"));
console.log(maskify("asdjfkjq;wern"));