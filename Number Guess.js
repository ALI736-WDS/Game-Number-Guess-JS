const randomNumber = Math.ceil(Math.random() * 100);
// let numberOfGuess = 1;
let numberOfGuess = 0;  //bekhatere hamahangi ba index az 0 shoru mikonim

console.log(randomNumber);

const validateNumber = (value) => {
    if (isNaN(value)) { //isNaN : not a number
        return "Please Enter a Valid Number";
    } else if (+value < 1 || +value > 100) {
        return "Please Enter a number between 1 to 100";
    }
}
const checkGuess = (guess) => {
    numberOfGuess++;
    if (guess === randomNumber) {
        console.log("You guesses correctly.");
    } else if (guess < randomNumber) {
        console.log("Too low!. try again.")
        play()
        // } else if (guess > randomNumber) { //100% akharin shart: in shart bargharar mishe pas niaz be if() mojadad nist
    } else {
        console.log("Too high!. try agin.")
        play()
    }
}

const play = () => {
    const number = prompt("Enter a number between 1 to 100")

    if (number === null) return;

    console.log(`${numberOfGuess} of 10 `);
    // if(numberOfGuess > 10){   //agar (// let numberOfGuess = 1;) bashad
    if (numberOfGuess >= 10) {
        console.log("Game Over");
        return;
    }

    const validation = validateNumber(number);
    if (validation) {
        console.log(validation);
        return play();
    }

    checkGuess(+number);
}

play();