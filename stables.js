
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
    isHorseInside: true,
    breed: "Mustang",
    isTrained: true
}

let horse2 = {
    name: "Rover",
    nickname: "Ro",
    favoriteTreat: "almonds",
    age: 17,
    monthlyRent: 400,
    isHorseInside: false,
    breed: "Arabian",
    isTrained: true,
}

let horse3 = {
    name: "Rune",
    nickname: "Runey",
    favoriteTreat: "carrots",
    age: 7,
    monthlyRent: 200,
    isHorseInside: true,
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
    isHorseInside: false,
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

function logAvailableStalls(totalStalls, numberOfHorses) {
    let availableStalls = totalStalls - numberOfHorses;

    console.log(`Available stalls at ${stableName}: ${availableStalls}`);
}

logAvailableStalls(totalStalls, horses.length);

// Create a function that logs how much an individual horse will owe if rent is paid late. Invoke the function.

function logLatePayment(horse, latePaymentMultiplier) {
    let latePayment = horse.monthlyRent * latePaymentMultiplier;

    console.log(`${horse.name} owes $${latePayment} if rent is paid late.`);
}

logLatePayment(horse1, latePaymentMultiplier);

// Store a late-payment message that includes a horse's name and the amount owing.

let latePaymentMessage1 = `Buddy, your payment is late. You forgot to pay for ${horse1.name}'s monthly rent. The amount owing is $${horse1.monthlyRent * latePaymentMultiplier}.`;

// Display the welcome message and late-payment messages.

console.log(latePaymentMessage1);

// Create and invoke a function that logs the nickname of a chosen horse.

function getHorseNickname(horse) {
    console.log(`The chosen horse's nickname is ${horse.nickname}.`);
}

getHorseNickname(horse1);

// Search for a horse that likes a particular treat.

function findHorseWithTreat(treatToFind) {
    for (const horse of horses) {
        if (horse.favoriteTreat === treatToFind) {
            console.log(`${horse.name} likes ${treatToFind}!`);
            return;
        }

        console.log(`${horse.name} doesn't like ${treatToFind}. Checking the next horse.`);
    }
}

findHorseWithTreat("carrots");

// Create a function that checks a horse's training.

function checkHorseTraining(horse) {
    if (horse.isTrained === true) {
        console.log(`${horse.name} is trained and ready to ride.`);
    }

    if (horse.isTrained === false) {
        console.log(`${horse.name} still needs training.`);
    }
}

for (const horse of horses) {
    checkHorseTraining(horse);
}

// Morning: Move selected horses outside.

function moveHorsesOutside(horsesToMove, isGettingDark) {
    for (const horse of horsesToMove) {
        if (isGettingDark === false) {
            if (horse.isHorseInside === true) {
                horse.isHorseInside = false;
                console.log(`${horse.name} has been moved outside into the sun.`);
            }
        }

        if (isGettingDark === true) {
            if (horse.isHorseInside === false) {
                horse.isHorseInside = true;
                console.log(`${horse.name} has been called inside for the night.`);
            }
        }
    }
}

moveHorsesOutside([horse1, horse3], false);

// Feeding: Bring outside horses inside and feed them their favorite treats.

function feedHorses(horsesToFeed) {
    for (const horse of horsesToFeed) {
        if (horse.isHorseInside === false) {
            horse.isHorseInside = true;
            console.log(`${horse.name} has been called inside to eat.`);
        }

        console.log(`${horse.name} has been fed ${horse.favoriteTreat}.`);
    }
}

feedHorses(horses);

// Bedtime: Call horses inside if it is getting dark.

moveHorsesOutside(horses, true);

// Display the horses to check their information.

console.log(horses);
