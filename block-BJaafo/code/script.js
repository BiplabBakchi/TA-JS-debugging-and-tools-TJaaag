function getFullName(firstName =``, lastName = ``) {  
    let fullName = `${firstName} ${lastName}`;
    return fullName;
};

let result = getFullName(`Arya`, `Stark`);
let expected = `Arya Snow`;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected} `)
};

result = getFullName(`John`, `Snow`);
expected = `John Snow`;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected} `)
};

function totalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

result = totalAmount(200, 10);
expected = 220;
if (result !== expected) {
    throw new Error (`${result} is not equal to ${expected}`)
};

result = totalAmount(200, 10);
expected = 2200;
if (result !== expected) {
    throw new Error (`${result} is not equal to ${expected}`)
};