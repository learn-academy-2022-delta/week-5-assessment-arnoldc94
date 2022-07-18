// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMsg",() => {

    it("takes in a string and returns a coded message.", () => {

        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

      expect(codedMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
    })


// ReferenceError: codedMsg is not defined

// b) Create the function that makes the test pass.
// Pseudo---->
// Create a function named codedMsg
// Pass in a string paramater named str
// use the .split("") method to transform the string into an array
// Use the .map() method to iterate over each value in the array
// use if conditional statement to determine if the lowercase value is strictly equal to the letter
// return the coded number for that letter
// use if else conditional statements to do the same for the rest of the letters to be coded
// return the cded number for each if else statement
// create an else statement to return any value that is not to be coded
// use the .join("") method to join the coded array back into a string
// outside of jest testing console log the function and paramater to see result in the console

const codedMsg = (str) => str.split("").map(value=>{
    if(value.toLowerCase() === 'a'){
        return 4
    }else if(value.toLowerCase() === 'e'){
        return 3
    }else if(value.toLowerCase() === 'i'){
        return 1
    }else if(value.toLowerCase() === 'o'){
        return 0
    }else{
        return value
    }
}).join("")

//  PASS  ./code-challenges.test.js
//   codedMsg
//   ✓ takes in a string and returns a coded message. (3 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("codedMsg",() => {

    it("takes in a string and returns a coded message.", () => {

       
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

      expect(matchLetter(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(matchLetter(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
      expect(matchLetter(fruitArray,9)).toEqual("9 is not a letter")
        })
    })

    // ReferenceError: matchLetter is not defined



// b) Create the function that makes the test pass.

// Pseudo---->
// Create a function named matchLetter
// Pass in an array and a letter array named arr and letter
// Create an if conditional statement that compares the typeof the letter paramater strictly equal to the 'string' datatype
// return `${letter} is not a letter` if true
// else filter the array paramater to iterate over the array
// On each iteration set the value.toLowerCase() and check if it .includes() the letter paramater letter.toLowerCase()
// This will return the strings that include the passed in letter
// Outside of jest testing console.log the function and paramaters to see the result in the terminal

const matchLetter = (arr,letter) =>{
     if(typeof letter !== 'string'){
        return `${letter} is not a letter`
     }else{
        return arr.filter(v =>v.toLowerCase().includes(letter.toLowerCase()))
     }
    }


//  PASS  ./code-challenges.test.js
//   codedMsg
//   ✓ takes in a string and returns a coded message. (2 ms)
//   ✓ takes in a string and returns a coded message.



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("codedMsg",() => {

    it("takes in a string and returns a coded message.", () => {

       
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false

      expect(fullHouse([5, 5, 5, 3, 3])).toEqual(true)
      expect(fullHouse([5, 5, 3, 3, 4])).toEqual(false)
      expect(fullHouse([5, 5, 5, 5, 4])).toEqual(false)
        })
    })


// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// Pseudo---->
// Create a function named fullHouse
// Pass in an array paramater named arr
// Create a new variable named newArr 
// Filter over the arr paramater and create a conditional that compares the index of the current item in the array to the current index of the iteration returning values of the item that do not match its own index.
// create an if conditional statement that compares the newArr.length strictly equal to three.
// If true create an if statement that compares the data at the indexes of the new array. If 2 match and one does not then return true. If they do not then return false.
// if the length is not three then return false in an else statement at the end of the first if statement.
// Outside of jest testing console.log the function and pass in the array to see the result in the terminal.

const fullHouse =(arr)=> {
let newArr = arr.filter((item, index) => arr.indexOf(item) !== index)
    if(newArr.length === 3){
        if((newArr[0]===newArr[1]&&newArr[0]!==newArr[2]) || (newArr[0]===newArr[2]&&newArr[0]!==newArr[1])){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

// PASS  ./code-challenges.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. (2 ms)
//   ✓ takes in a string and returns a coded message. (1 ms)
//   ✓ takes in a string and returns a coded message.  
      


