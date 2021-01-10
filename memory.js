// Randomly arranges images on the memory board. 
const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Example: var exampleArray = [1, 2, 3, 4, 5] | array.length - 1 ensures that there won't be an "out of bounce" error. In this case, -1 means that the array starts at 0. | Since Math.random() creates a random number from 0 to 1, (for example 0.5) you will get a number like 2.5 because 0.5 * 5 = 2.5. | var temp = array[i] will save a random number from 1 to 4, array[i] = array[j] will set a random number from 0 to 4 equal to the randomly generated number, and array[j] = temp will set the randomly generated number equal to the temporary variable from earlier.
function shuffle(array) { 
    for (var i = array.length - 1; i > 0; i--) {  
        var j = Math.floor(Math.random() * (i + 1)); 
        var temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    }        
    return array; 
} 

/* Given max = 5 and min = 1: Math.floor(Math.random()*(5-1+1)+1) = Math.floor(Math.random()*5 +1). This can be thought as as "give me a percentage of 5 (from 0 to 99%) and add 1 to it". The percentage will always give you some value between 0 and 4.99. Since +1 is outside the scope of the random() range, it will guarantee that the random number is between 1 and 5.99. Floor() will guarantee that it's between 1 and 5 because 5.99 gets rounded down to 5. By extension, this will also mean that the possible output can only contain the following numbers: 1, 2, 3, 4, and 5.*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Counts = 2 (number of duplicates) | fromPopulation is a continuous sequence of numbers, meaning that the images need to be named 1, 2, 3, 4, 5 ... n. If the images in the image folder are not named in said sequence, the program will most likely throw an error. | k = the numbers of pairs. 
function sample(fromPopulation, counts) {
    let result = [];
    let k = fromPopulation.length/2;    
    let randomSample = [];

    while (randomSample.length < k) {
        randomNumber = getRandomNumber(Math.min(...fromPopulation), Math.max(...fromPopulation));
        if (!randomSample.includes(randomNumber)) {
            randomSample.push(randomNumber);
        }
    }

    for (let index = 0; index < counts; index++) {
        result.push(...randomSample);                
    }

    return shuffle(result);
}

let sampledNumbers = (sample(availableNumbers, 2));

//This function makes sure that all the images appear on the board.
function getRandomImage() {
    for(let i = 1; i <= sampledNumbers.length; i++){
        document.getElementById(`${i}`).src ="img/" + sampledNumbers[i-1] + ".jpg";
    }
}

// Game Logic 
class Card
{
    constructor(index, value){
        this.index = index;
        this.value = value;
        this.filename = `${this.value}.jpg`;
        this.revealed = false;
        this.outOfGame = false;
    }

    hide(){
        document.getElementById(`${this.index}`).src = "files/Concealed.svg";
        this.revealed = false;
    }

    reveal(){
        document.getElementById(`${this.index}`).src = `img/${this.filename}`;
        this.revealed = true;
    }

    flipBack(){
        cards.forEach(function(card){
            if(card.revealed === true && card.outOfGame === false){
                document.getElementById(`${card.index}`).src = "files/Concealed.svg";
                card.revealed = false;
            }
        })
    }
}

// Create array of card objects
const cards = [];
for(let i = 0; i < sampledNumbers.length; i++){
    cards.push(new Card(i+1, sampledNumbers[i]));
}

// Implements the game logic
function checkGameState(cards){
    let tmp = [];
    let cardsWon = [];
    cards.forEach(function(card){
        if(card.revealed === true && card.outOfGame === false) {
            tmp.push(card);
            cardsWon.push(card);
            if(tmp.length === 2 && tmp[0].value === tmp[1].value){
                tmp[0].outOfGame = true;
                tmp[1].outOfGame = true;
                tmp = [];
                console.log("It's a match.");
                /*if(cardsWon.length === 2 && cardsWon[0].value === cardsWon[1].value){
                    console.log(cardsWon);
                }*/
            }
        }
        if(card.revealed === true && card.outOfGame === true){
            cardsWon.push(card);
            console.log(cardsWon);
        } 
        if(tmp.length === 2 && tmp[0].value != tmp[1].value){
            tmp.push(card);
            tmp = [];
            console.log("These two cards don't match.");
            setTimeout(card.flipBack, 2000);
        }
        if(cardsWon.length === availableNumbers.length){
            setTimeout(alert("You win!"), 2000);
        }
    });
}

cards.forEach(function(card){
    console.log(`card value ${card.value} is at index ${card.index}`);
    card.hide();
    document.getElementById(`${card.index}`).addEventListener('click', function(){
        card.reveal();
        checkGameState(cards);
    });
});
