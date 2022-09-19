
const myFunctions = require("./functions")

test("return two tests", () => {
    expect(myFunctions.returnTwo())===(2)
})

describe('greeting', () => {
test("test Greeting", () => {
    expect(myFunctions.greeting('Jim'))===('Hello Jim.')
})
test("test Greeting", () => {
    expect(myFunctions.greeting('Jill'))===('Hello Jill.')
})
})

describe('Math Functions', () => {
    test('test should add 1,2 to be equal to 3', () => {
        expect(myFunctions.add(1, 1))===(3)
    })
    test('test should add 1,2 to be equal to 3', () => {
        expect(myFunctions.add(5, 9))===(14)
    })

    test('test should multiply 1,2 to be equal to 2', () => {
        expect(myFunctions.multiply(1, 2))===(2)
    })
    
    test('test should divide 6,3 to be equal to 2', () => {
        expect(myFunctions.divide(6, 3))===(2)
    })
    
    test('test should subtract 6,3 to be equal to 3', () => {
        expect(myFunctions.subtract(6, 3))===(2)
    })
})
