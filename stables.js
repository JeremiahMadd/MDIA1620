let stableName = "Rito Stable"
let welcomeMessage = `Welcome to ${stableName}! Here you can meet a variety of beautiful horses trained and born in the Rito mainlands, if you have your own horse and would like to take them out, please tell us and we will gladly help! Or you can leave a horse for a fair price depending on their size. Remember the key to a happy horse, is continual monthly payments!!`

console.log(welcomeMessage);

let latePaymentMultiplier = 1.20;

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
    favoriteTreat: "pumkin muffins",
    age: 5,
    monthlyRent: 300,
    location: false,
    breed: "Appaloosa",
    isTrained: true,
}

let horses = [horse1, horse2, horse3];
horses.push(horse4);

horse1.hungry = true;
horse2.hungry = false;
horse3.hungry = true;
horse4.hungry = false;

let totalStalls = 10;

// Create a function that logs how many stalls are available, given how many horses you have in your stable.

function logAvailableStalls(numberOfHorses) {
    let availableStalls = totalStalls - numberOfHorses;

    console.log(`Available stalls at ${stableName}: ${availableStalls}`);
}

// Invoke the function using the number of horses in the array.

logAvailableStalls(horses.length);

// Create a function that logs how much an individual horse will owe if rent is paid late. Invoke the function.

function logLatePayment(horse) {
    let latePayment = horse.monthlyRent * latePaymentMultiplier;

    console.log(`${horse.name} owes $${latePayment} if rent is paid late.`);
}

logLatePayment(horse1);

// Store a late-payment message that includes a horse's name and the amount owing.

let latePaymentMessage1 = `Buddy, your payment is late. You forgot to pay for ${horse1.name}'s monthly rent. The amount owing is $${horse1.monthlyRent * latePaymentMultiplier}.`;

// Display the welcome message and late-payment messages.

console.log(latePaymentMessage1);


// Create and invoke a function that returns the nickname of a chosen horse.
// Log the return value outside of the function.

function getHorseNickname(horse) {
    return horse.nickname;
}

let chosenNickname = getHorseNickname(horse1);

console.log(`The chosen horse's nickname is ${chosenNickname}.`);

// Display the horses to check their information.

console.log(horses);    
