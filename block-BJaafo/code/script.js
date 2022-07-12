function getFullName(firstName =``, lastName = ``) {  
    let fullName = `${firstName} ${lastName}`;
    return fullName;
};

let result = getFullName(`Arya`, `Stark`);
let expected = `Arya Snow`;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected} `)
};

let resultTwo = getFullName(`John`, `Snow`);
let expectedTwo = `John Snow`;
if (resultTwo !== expectedTwo) {
    throw new Error(`${resultTwo} is not equal to ${expectedTwo} `)
};

function totalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

let resultThree = totalAmount(200, 10);
let expectedThree = 220;
if (resultThree !== expectedThree) {
    throw new Error (`${resultThree} is not equal to ${expectedThree}`)
};

let resultFour = totalAmount(200, 10);
let expectedFour = 2200;
if (resultFour !== expectedFour) {
    throw new Error (`${resultFour} is not equal to ${expectedFour}`)
};