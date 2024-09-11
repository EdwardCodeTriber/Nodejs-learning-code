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
module.export.add = (a, b) =>{
    return a+ b;
}

module.exports = add;

module.export.subtract = (a,b) =>{
    return a-b;
}

module.exports = {
     add,
    subtract,
}