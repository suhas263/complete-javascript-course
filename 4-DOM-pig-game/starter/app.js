/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
var scores, roundScore, activePlayer, gamePlaying;
init();

//dice = Math.floor(Math.random() * 6) + 1;  //we move this to inside the click event listener
// console.log(dice);

// hiding the dice as we don't want to show it unless the '.btn-roll' button is clicked
// document.querySelector('#current-' + activePlayer).textContent = dice;

// var player1 = prompt('Enter player 1');
// var player2 = prompt('Enter player 2');

// document.getElementById('name-0').textContent = player1;
// document.getElementById('name-1').textContent = player2;

document.querySelector('.btn-roll').addEventListener('click', function() {
    //this is an anonymous function as this function has no name and it is called only
    //within this event listener function. since it has no name it cannot be called from the 
    // outside of this event listener function
    if(gamePlaying){
        //1. Random number on every click of the button
        var dice = Math.floor(Math.random() * 6) + 1; // we need this variable only inside this function and hence we remove the assignment and declaration from outside of this scope

        //2. Display the result with the dice image corresponding the number
        //we hid the dice image above, so now we need to display it and we assign the value block to the display property
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block'; 
        diceDom.src = 'dice-' + dice + '.png';

        //3. Make sure the score is updated only when the dice rolls to any number except for 1
        if(dice!==1){
            //add to round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add current score to global score
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //update the ui

        //check if player won the game
        if(scores[activePlayer] >= 10){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});


function nextPlayer(){
    //change the active player 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //setting the current score to 0 when dice rolls to a 1
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    roundScore = 0;
    
    //alternating the active player class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //to hide it after the dice rolls a 1
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true; 
    //adding state variable so that we know if the game is playing or not andf when the game ends the others roll dice and hold buttons do not work

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer, gamePlaying, prevDice, prevDice2;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block'; 
        diceDom.src = 'dice-' + dice + '.png';
        var diceDom2 = document.querySelector('.dice-2');
        diceDom2.style.display = 'block'; 
        diceDom2.src = 'dice-' + dice2 + '.png';

        if(dice !==1 && dice2 !==1){
            var diceScore = dice + dice2;
            roundScore += diceScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;    
        } else if((prevDice === 6 && dice === 6)||(prevDice2 === 6 && dice2 === 6)){
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
            document.querySelector('#score-' + activePlayer).textContent = '0';  
            nextPlayer();
        } else if(dice === 1 || dice2 === 1) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
        } else {
            nextPlayer();
        }
    prevDice = dice;
    prevDice2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.getElementById('win-score').value;

        var winScore = input ? input : 100;

        //check if player won the game
        if(scores[activePlayer] >= winScore){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //setting the current score to 0 when dice rolls to a 1
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    roundScore = 0;

    //alternating the active player class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //to hide it after the dice rolls a 1
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true; 
    prevDice = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};