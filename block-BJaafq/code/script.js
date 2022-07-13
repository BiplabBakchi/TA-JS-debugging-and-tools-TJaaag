//Testing Framework
let result, expected;
function test(message, callback) {
    try {
        callback();
        console.log(`✅`,message);
    } catch (error) {
        console.error(error);
        console.log(`❌`, message);

    }
}
// Assertion
function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }

        },
        toBeEqual: function(expected) {
            if (typeof actual !== expected) {
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }

    };
}
// Two test
function add(a, b) {
    return a + b;
}


function testAdd() {
    result = add(6, 7);
    expected = 15;
    expect(result).toEqual(expected);
}
test(`add 6 and 7`, testAdd);


function subtract(a, b) {
    return a - b;
}

function testSubstraction() {
    result = subtract(12, 8);
    expected = 4;
    expect(result).toEqual(expected);
}
test(`subtract 8 from 12`, testSubstraction);

// Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
function addingNumbers(numA, numB) {
    return numA + numB;
};

function testAddition() {
    result = addingNumbers(10, 'arya');
    expected = 'number';
    expect(result).toBeEqual(expected);
}
test(`add 10 and Arya`, testAddition);

// 5 tests
//1
test(`add 10 + 10 to be equal to 20`, ()=> {
    expect(addingNumbers(10, 10)).toEqual(20);
 });
//2
 test(`add 5 + 10 to be equal to 15`, ()=> {
    expect(addingNumbers(5, 10)).toBeEqual('number');
 });
//3
 test(`add 20 + 30 to be equal to 50`, ()=> {
    expect(addingNumbers(20, 30)).toEqual(50);
 });
//4
 test(`add 5 + 5 to be equal to 10`, ()=> {
    expect(addingNumbers(5, 5)).toEqual(10);
 });
//5
 test(`add 6 + 5 to be equal to 10`, ()=> {
    expect(addingNumbers(6, 5)).toEqual(7);
 });

// Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
function multiply(numA, numB) {
    return numA * numB;
};


function testMultiplication() {
    result = multiply(10, 8);
    expected = 'number';
    expect(result).toBeEqual(expected);
}
test(`multiply 10 and 8`, testMultiplication);


//5 tests
//1
test(`mulitpy 7 * 5 to be equal to 35`, ()=> {
    expect(multiply(7, 5)).toEqual(35);
 });
//2
 test(`mulitpy 4 * 3 to be equal to 12`, ()=> {
    expect(multiply(4, 3)).toEqual(12);
 });
//3
 test(`mulitpy 40 * 3 to be equal to 40`, ()=> {
    expect(multiply(40, 3)).toEqual(40);
 });
//4
 test(`mulitpy 3 * 3 to be equal to 12`, ()=> {
    expect(multiply(3, 3)).toEqual(9);
 });
//5
 test(`mulitpy 7 * 3 to be equal to 26`, ()=> {
    expect(multiply(7, 3)).toEqual(26);
 });

 
 


