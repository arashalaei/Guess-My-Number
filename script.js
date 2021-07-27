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
    *** 2) Implementing the game logic ***
*/
let number = Math.floor(Math.random() * 20) + 1 // Creating a random number between 1 and 20 to guess.
let score = 20; // Initial score.
let highScore = 0; // Initial highscore.
// Listener for when the check button is clicked. 
elements.checkBtn.addEventListener('click', function(){
    let guess = elements.guessInput.value
    if(!guess)
        elements.message.textContent = '⛔️ No number!'
    else{
        if(+guess < number){
            elements.message.textContent = '📉 Too low';
            score > 1 ? score-- : score = 0
        }else if(+guess > number){
            elements.message.textContent = '📈 Too high';
            score > 1 ? score-- : score = 0
        }else {// guess == number
            elements.message.textContent = '🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            elements.number.textContent = number
            elements.number.style.width = '30rem'
            if(score > highScore){
                highScore = score 
                elements.highScore.textContent = highScore
            }
        }
    }

    elements.score.textContent = score
    if (score == 0)
    elements.message.textContent = '💥 You lost the game!'
})

// Listener for when the again button is clicked. 
elements.againBtn.addEventListener('click', function(){
    number = Math.floor(Math.random() * 20) + 1 // Creating a random number between 1 and 20 to guess.
    score = 20; // Initial score.
    elements.message.textContent = 'Start guessing...'
    elements.score.textContent = score
    elements.number.classList.add('number')
    document.querySelector('body').style.backgroundColor = '#222';
    elements.number.style.width = '15rem'
    elements.number.textContent = '?'
    elements.guessInput.value = ''
})