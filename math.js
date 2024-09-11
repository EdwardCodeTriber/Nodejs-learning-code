//Normal way/ used way
// const add = (a, b) =>{
//     return a+ b;
// }

// module.exports = add;

// new way or better way 
// module.exports = (a,b) =>{
//     return a + b;
// }

/// more than one function
exports.add = (a, b) =>{
    return a + b;
}

// module.exports = add;

exports.subtract = (a,b) =>{
    return a - b;
}

// module.exports = {
//      add,
//     subtract,
// }