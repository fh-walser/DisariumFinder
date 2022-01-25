function isDisarium(n){

    // create an array from the number
    var numArray = String(n).split("").map((n)=>{ return Number(n)});

    // raise each number to the power of it's index + 1
    var powArray = numArray.map((n) => { return Math.pow(n, numArray.indexOf(n)+1)});

    // add the numbers in the array together
    var sum = powArray.reduce((pv, cv) => pv + cv, 0);

    // return true if the sum equals the parameter n else false
    if(sum === n){
        return true;
    }else{
        return false;
    }
}

console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(518));
console.log(isDisarium(544));
console.log(isDisarium(8));
console.log(isDisarium(466));