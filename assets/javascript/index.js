//wait until the page loads and add event listeners

var scoreArray;
var userName;
var timeScoreValue;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play") {
                playGame();
                } else {
                if (this.getAttribute("data-type") === "hiScores") {
                    hiScores();   
                } else {
                    if (this.getAttribute("data-type") === "help") {
                        help();
                        }
                    }
                }
            });
        }
    });

/**
 * This function is controlling the game
 */
function playGame() {
    let gameContent = `
    <div id = "fullscreen-container">
    <div id = "header">
    <h1 id="title"><img src="assets/images/logo.png" alt="game logo" width="50" height="50">cogniCraft</h1>
    </div>
    <br>
    <div id="usernamedisplay">USERNAME:</div>
    <div class="timer">TIME:<br><span id="timer">0</span> seconds</br></div>
    <button class="menu">Menu</button>
    <div class="tiles">
    <div id="usernamewindow">
            <label for = "Usernameinput">Username:</label>
            <input id =  "usernameinput" name= "username" type="text">
        </div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        

    </div>
    <div id = "footer">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
    </div>
    </div>
    <script src="assets/javascript/"></script>`;
    document.body.innerHTML = gameContent;
   
    //This reloads the index.html, basically it takes back to the menu.
    
    let menu = document.getElementsByClassName("menu");
    menu[0].addEventListener("click", function(){
    window.location.href = 'index.html';
    });
    //variables
    //timer
    let startTime = null;
    let endTime = null;
    let timerInterval;
    //clickable
    let clickable = false;

    //Username input window takes the value and stores it in the userName variable
    let userNameWindow = document.getElementById("usernamewindow");
    let userNameInput = document.getElementById("usernameinput");
    userNameInput.addEventListener("keydown", function(event)  {
        if (event.key === "Enter") {
            userName = userNameInput.value;
            userNameWindow.style.display = "none";
        let userNameDisplay = document.getElementById("usernamedisplay");
        userNameDisplay.innerHTML = `USERNAME:<br>${userName}`;
        clickable = true;
        //start the timer
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        }
    });
    //Username display paragraph displays the username


    let colors = ["red", "yellow", "green", "blue", "white", "black", "pink", "purple"];
    let colorsPickList = [...colors, ...colors];
    let tiles = document.getElementsByClassName("tile");

    // Create a shuffled copy of the colorsPickList
    let shuffledPickList = [...colorsPickList].sort(() => Math.random() - 0.5);
    let firstTile = null; //variable to store the first clicked tile

    for (let i = 0; i < tiles.length; i++ ) {
        tiles[i].setAttribute("data-color", `${shuffledPickList[i]}`);
        tiles[i].setAttribute("data-revealed", "false");       //adding data-type attributes to the tiles in a random manner
        tiles[i].addEventListener("click", function() {
            if (!clickable || this.getAttribute("data-revealed") === "true") {
                return;     //already revealed, ignore
            }
            let color = this.getAttribute("data-color");
            this.style.backgroundColor = color;
            this.setAttribute("data-revealed", "true");

            if (firstTile === null) {
                //first tile clicked store it
                firstTile = this;
            } else {
                clickable = false;
                //second tile clicked, compare to the first
                if (this.getAttribute("data-color") === firstTile.getAttribute("data-color")) {
                    //match 
                    setTimeout(() => {
                        this.setAttribute("data-revealed", "true");
                        firstTile.setAttribute("data-revealed", "true");
                        clickable = true; // Re-enable clicking
                        firstTile = null;
                        if (document.querySelectorAll('[data-revealed="true"]').length === tiles.length) {
                            // All pairs are revealed, stop the timer
                            endTime = Date.now();
                            let endTimeValue = document.getElementById("timer").textContent;
                            let userNameValue = document.getElementById("usernamedisplay").textContent;

                            saveHighScore(userNameValue, parseInt(endTimeValue));

                            userNameWindow.innerHTML = `<button id="save">Save</button><span>Congratulations!</span><br><br><span>${userNameValue}</span><br><br><span>Time:${endTimeValue}</span>`;
                            userNameWindow.style.display = "block";
                            let saveButton = document.getElementById("save");
                            saveButton.addEventListener("click", function() {
                                
                                timeScoreValue = document.getElementById("timer").textContent;
                                scoreArray = [userName, timeScoreValue];
                                userNameWindow.style.display = "none";
                                

                                return scoreArray;

                            });

                        }
                    }, 1000); // Delay for 1 second to show the matched colors
    
                    // Reset the firstTile variable
                    
                } else {
                    setTimeout(() => {
                        this.style.backgroundColor = document.body.style.backgroundColor;
                        this.setAttribute("data-revealed", "false");
                        firstTile.style.backgroundColor = document.body.style.backgroundColor;
                        firstTile.setAttribute("data-revealed", "false");
                        firstTile = null;
                        clickable = true; // Re-enable clicking
                    }, 1000); 
                }
            }
        });   
    }

/**
 * this function updates the timer
 * 
 */
    
    function updateTimer() {
        if (endTime) {
            //game ended stop updating the timer
            clearInterval(timerInterval);
            return;
        }
    
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);
        const timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = elapsedTime + " ";
    };
};




/**
 * This function stores the username and highscore in the localstorage
 */

function saveHighScore (userName, timeScoreValue) {
    //retrieve existing high score from the localstore
    let highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];
    //add the current game's highscore
    highScores.push({userName, timeScoreValue});
    //sort the highscores by timescorevalue in descending order
    highScores.sort((a , b) => b.timeScoreValue - a.timeScoreValue);
    //keep only 10 highest scores
    highScores = highScores.slice(0, 10);
    //save the updated highscores back to the localstore
    localStorage.setItem(`highScores`, JSON.stringify(highScores));
}



/**
 * This function controls the Hi-scores menu.
 * It stores the hi scores DOM and keeps the user times
 */
function hiScores() {
    let hiScoresContent = `
    <div id = "fullscreen-container">
    <div id = "header">
    <h1 id="title"><img src="assets/images/logo.png" alt="game logo" width="50" height="50">cogniCraft</h1>
    </div>
    <button class="menu">Menu</button>
    <table class="highscores">
        <tr>
            <th>Username</th>
            <th>Time</th>
        </tr>
        <tr>
            <td>User1</td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td>User2</td>
            <td>11:30 AM</td>
        </tr>
        <tr>
            <td>User3</td>
            <td>02:15 PM</td>
        </tr>
    </table>
    <div id = "footer">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
    </div>
 </div>

<!--Link to the Javascript file-->
<script src="assets/javascript/index.js"></script> `;
    document.body.innerHTML = hiScoresContent;
    //This reloads the index.html, basically it takes back to the menu.
    let menu = document.getElementsByClassName("menu");
    menu[0].addEventListener("click", function(){
    window.location.href = 'index.html';

});
}
/**
 * This function loads the help menu DOM.
 */
function help() {
    let helpContent = `
    <div id = "fullscreen-container">
    <div id = "header">
    <h1 id="title"><img src="assets/images/logo.png" alt="game logo" width="50" height="50">cogniCraft</h1>
    </div>
    <div class="helptext-container">
    <button class="menu">Menu</button>
        <br>
        <h2>Play</h2>
        <p>Click the Play menu to enter the game!</p>
        <p>After clicking the play menu you will ecounter the game area with 16 tiles. The game asks for your Name.
            After entering your name the game and the timer starts.
        </p>
        <p>Click the first tile (any tile of your choice) and the colour reveals. Try to gess the matching colour!
            If the colour matches the tiles disappear and the score counter counts a 'hit'. If the colours did not 
            match do not worry, try to memorize the colour and reveal other tiles until you find all the matching tiles.
        </p>
        <p>The game ends after finding the last matching pair, the counter stops and you will have 2 choices:
            New game or main menu.
        </p>
        <h2>Hi-Scores</h2>
        <p>This menu will show the Hi-Scores corresponding to the names.</p>
        <h2>Help</h2>
        <p>The help menu provides all of the required information about how the game works!</p>
        <p>Good luck and have fun! </p>
    </div>
    <div id = "footer">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
    </div>
 </div>

<!--Link to the Javascript file-->
<script src="assets/javascript/"></script>`;
document.body.innerHTML = helpContent;
    //This reloads the index.html, basically it takes back to the menu.
    let menu = document.getElementsByClassName("menu");
    menu[0].addEventListener("click", function(){
    window.location.href = 'index.html';
});
}

