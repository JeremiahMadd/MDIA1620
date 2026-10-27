let stableName = "Rito Stable"
let welcomeMessage = `Welcome to ${stableName}! Here you can meet a variety of beautiful horses trained and born in the Rito mainlands, if you have your own horse and would like to take them out, please tell us and we will gladly help! Or you can leave a horse for a fair price depending on their size. Remember the key to a happy horse, is continual monthly payments!!`


let horse1monthlyRent = 500

let horse1 = {
    name: "Ravenger",
    nickname: "Rave",
    favoriteTreat: "apples",
    age: 23,
    monthlyRent: 500,
    location: true, // true = inside, false = outside
    breed: "Mustang",
    isTrained: true
}

let latePaymentMessage1 = `Buddy your payment is late. You forgot to pay for ${horse1.name}'s monthly rent. The amount owing is $${horse1.latePayment}.`


let horse2monthlyRent = 400

let horse2 = {
    name: "Rover",
    nickname: "Ro",
    favoriteTreat: "almonds",
    age: 17,
    monthlyRent: 400,
    location: false,
    breed: "Arabian",
    isTrained: true,
}

let latePaymentMessage2 = `Can't believe you don't care about him. You forgot to pay for ${horse2.name}'s monthly rent. The amount owing is $${horse2.latePayment}.`


let horse3monthlyRent = 200

let horse3 = {
    name: "Rune",
    nickname: "Runey",
    favoriteTreat: "carrots",
    age: 7,
    monthlyRent: 200,
    location: true,
    breed: "Quarter Horse",
    isTrained: false,
}

// Create a variable holding a new horse object

let horse4 = {
    name: "Riana",
    nickname: "Riana",
    favoriteTreat: "muffins",
    age: 5,
    monthlyRent: 300,
    location: false,
    breed: "Appaloosa",
    isTrained: true,
}

let latePaymentMessage3 = `Looks like someone failed to remember their child. Again. You forgot to pay for ${horse3.name}'s monthly rent. The amount owing is $${horse3.latePayment}.`

console.log(welcomeMessage)

console.log(latePaymentMessage1)
console.log(latePaymentMessage2)
console.log(latePaymentMessage3)

    
    
    // MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH

// Logical Operators
// && (AND)
// || (OR)
// == (IS THE SAME AS)
// != (IS NOT THE SAME AS)
// ! (NOT)

// FIX THE LATE PAYMENT MESSAGES, NICKNAME, STABLE STALLS, HUNGER
// TOTAL STALLS, AVAILIBLE STALLS.


// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.