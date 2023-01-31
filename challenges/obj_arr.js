

function toArray(obj) {
    let a = [];
    for (let k in obj) {
        let newa = [k, obj[k]]
        a.push(newa)
    }
    return a;
}

console.log(toArray({ a: 1, b: 2 }));