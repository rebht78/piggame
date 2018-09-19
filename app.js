/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer = 0;

var btnRoll = document.querySelector('.btn-roll');
 
btnRoll.addEventListener('click', (event) => {
    // Generate random number from 1 to 6
    let btnNumber = Math.floor(Math.random() * 6) + 1;
    let currentScore = parseInt(document.querySelector('#score-'+activePlayer).textContent);
    document.querySelector('#current-'+activePlayer).textContent = btnNumber;
    currentScore += btnNumber;
    document.querySelector('#score-'+activePlayer).textContent = currentScore;
    activePlayer = (activePlayer == 0) ? 1 : 0;

});