'use strict';
/**
 * @author Arash Alaei <arashalaei22@gmail.com>.
 * @since Tuesday, July 27, 2021.
 * @deprecated This simple project shows how to manipulate the DOM.
 */

/* 
    *** 1) Select the elements ***
*/
const className = {
    again:' .again',
    number: '.number',
    guess: '.guess',
    check: '.check',
    message: '.message',
    score:'.score',
    highScore:'.highscore'
}

const elements = {
    againBtn: document.querySelector(className.again),
    number: document.querySelector(className.number),
    guessInput: document.querySelector(className.guess),
    checkBtn: document.querySelector(className.check),
    message: document.querySelector(className.message),
    score: document.querySelector(className.score),
    highScore: document.querySelector(className.highScore)
}
/* 
    *** 2) Controller ***
*/

const updateMessage = function(message){
    elements.message.textContent = message
}

const updateScore = function() {
    score > 1 ? score-- : score = 0
    elements.score.textContent = score
}

const changeStyle = function(color, number, width){
    document.querySelector('body').style.backgroundColor = color;
    elements.number.textContent = number;
    elements.number.style.width = width;
}

const random = function(start, end){
    return Math.floor(Math.random() * end) + start
}

const handler = {
    checkHandler:function(){
        let guess = elements.guessInput.value

        if(!guess){
            updateMessage('⛔️ No number!');
        }else{
            if(+guess == number){
                updateMessage('🎉 Correct Number!');
                changeStyle('#60b347', number, '30rem');
                if(score > highScore){
                    highScore = score 
                    elements.highScore.textContent = highScore
                }
            }else{
                updateMessage(+guess < number ? '📉 Too low' : '📈 Too high');
                updateScore(); 
            }
        }

        if(score == 0)
            updateMessage('💥 You lost the game!');
    },

    againHandler: function(){
        number = random(1, 20); // Creating a random number between 1 and 20 to guess.
        score = 20; // Initial score.
        updateMessage('Start guessing...');
        changeStyle('#222', '?', '15rem');
        elements.score.textContent = score;
        elements.guessInput.value = '';
    }
}
/* 
    *** 3) Implementing the game logic ***
*/
let number = random(1, 20); // Creating a random number between 1 and 20 to guess.
let score = 20; // Initial score.
let highScore = 0; // Initial highscore.

// Listener for when the check button is clicked. 
elements.checkBtn.addEventListener('click', handler.checkHandler);
// Listener for when the again button is clicked. 
elements.againBtn.addEventListener('click', handler.againHandler)