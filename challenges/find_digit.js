

function num_of_digits(num) {
    let regex = /\d/g;
    let n = num.toString();
    let s = n.match(regex);
    // console.log(s);
    return s.length;

}

//--or----

function num_of_digits1(num) {
    return `${num}`.match(/\d/g).length;
}

//---or---

function num_of_digits2(num) {
    return Math.abs(num.toString().length);
}

//---or--

function num_of_digits3(num) {
    let regex = /[0-9]$/g;
    //--0r--   let regex = /\d$/g;
    let regexCall = regex.exec(num);
    let l = regex.lastIndex;
    if (num >= 0) {
        return l;

    }
    return l;
}

console.log("------------");
console.log(num_of_digits(4567));
console.log("------------");
console.log(num_of_digits1(4567));
console.log("------------");
console.log(num_of_digits2(4567));
console.log("------------");
console.log(num_of_digits3(4567));
console.log("------------");

