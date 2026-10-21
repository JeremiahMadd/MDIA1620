let stableName = "Rito Stable"
let welcomeMessage = `Welcome to ${stableName}! Here you can meet a variety of beautiful horses trained and born in the Rito mainlands, if you have your own horse and would like to take them out, please tell us and we will gladly help! Or you can leave a horse for a fair price depending on their size. Remember the key to a happy horse, is continual monthly payments!!`


let horse1monthlyRent = 500

let horse1 = {
    name: "Ravenger",
    age: 23,
    favoriteSnack: "steak",
    monthlyRent: horse1monthlyRent,
    latePayment: horse1monthlyRent * 1.20,
}

let latePaymentMessage1 = `Buddy your payment is late. You forgot to pay for ${horse1.name}'s monthly rent. The amount owing is $${horse1.latePayment}.`


let horse2monthlyRent = 400

let horse2 = {
    name: "Rover",
    age: 17,
    favoriteSnack: "almonds",
    monthlyRent: horse2monthlyRent,
    latePayment: horse2monthlyRent * 1.20,
}
let latePaymentMessage2 = `Can't believe you don't care about him. You forgot to pay for ${horse2.name}'s monthly rent. The amount owing is $${horse2.latePayment}.`


let horse3monthlyRent = 200

let horse3 = {
    name: "Rune",
    age: 7,
    favoriteSnack: "carrots",
    monthlyRent: horse3monthlyRent,
    latePayment: horse3monthlyRent * 1.20,
}

let latePaymentMessage3 = `Looks like someone failed to remember their child. Again. You forgot to pay for ${horse3.name}'s monthly rent. The amount owing is $${horse3.latePayment}.`

console.log(welcomeMessage)

console.log(latePaymentMessage1)
console.log(latePaymentMessage2)
console.log(latePaymentMessage3)

// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH