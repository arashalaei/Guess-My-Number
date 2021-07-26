'use strict';
/**
 * @author Arash Alaei <arashalaei22@gmail.com>.
 * @since Tuesday, July 27, 2021.
 * @deprecated This simple project shows how to manipulate the DOM.
 */

// 1) Select the elements
let className = {
    again:' .again',
    number: '.number',
    guess: '.guess',
    check: '.check',
    message: '.message',
    score:'.score',
    highscore:'.highscore'
}

let elements = {
    againBtn: document.querySelector(className.again),
    number: document.querySelector(className.number),
    guessInput: document.querySelector(className.guess),
    checkBtn: document.querySelector(className.check),
    message: document.querySelector(className.message),
    score: document.querySelector(className.score),
    highscore: document.querySelector(className.highscore)
}