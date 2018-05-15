

var score = 5;
console.log(`We out here ${score}`)

/**
 * 
 * 
 */

 // 1. Timer should start at 30 seconds
 // 2. When the user clicks on start game the timer, should start decreasing by one second.
 // 3. Once the timer starts, the mole needs to appear
 // 4. The mole should appear in a random hole every 1 seocnd.
 // 5. When a user clicks in a mole the score should increment by 1.
 // 6. When the time runs out, a popup message should appear with the users score
 // 7. The game needs to reset once the game ends.

 /**
  * 
  * Technologies we might need
  * 
  */

 // Set interval
 // Add event listeners
 // MATH.random
 // What happens when we click on the start button more than once
 // Callbacks
 // 

 /**
  * WHACK A MOLE GAME
  */




document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('start-button');
    const timer = document.getElementById('timer');
    const score = document.getElementById('score');
    const mole = document.getElementById('mole');
    const holes = document.getElementsByClassName('hole');
    
    
    // Start game function runs when you click the buttom 'Start Game'
    button.addEventListener('click', startGame)
    
    // This function should:
    // 1. Make the mole appear
    // 2. Move the mole every second until timer reaches 0
    // 3. Keep track of "score" (Amount of times the mole was clicked), increasing by 1 each time.
    // 4. Disable the "Start Game" button once it is clicked.
    // 5. 

    

    function startGame() {
        
        button.setAttribute('disabled', true)
        
        // Displays the mole
        var showMole = mole.style.display ='initial'
        
        // Counts down from 30 to 0 then shows an alert with the player score
        var timeLeft = 30
        var timerInterval = setInterval(function() {
            timeLeft -= 1
            timer.innerText = timeLeft
            if(timeLeft <= 0) {
                clearInterval(timerInterval)
                alert(`Game Over! You scored ${scoreBoard} points!`);
            }
        }, 800)


        // Moves the mole to random "holes" and stops moving once the timer reaches 0.
        var moveMoleInterval = setInterval(function() {
            var moleHole = holes[Math.floor(Math.random() * 9)]    
            moleHole.appendChild(mole)
            if(timeLeft <= 1) {
                clearInterval(moveMoleInterval)
            }
        }, 1000)

        // Increases score by 1 when the mole is clicked
        var scoreBoard = 0;
        mole.addEventListener('click', function(){
            scoreBoard++;
            score.innerText = `${scoreBoard} points` ;
        })
    }
    
})

// const reset = document.getElementById('reset');

// button.addEventListener('click', resetGame)

// function resetGame() {
//     location.reload()
// }

// holes is a html collection which is similar to an array
// eg. holes[0] is the first hole.
// holes[5] <- hole you wanna move it to .appendChild(mole)