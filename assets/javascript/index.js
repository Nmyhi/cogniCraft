//wait until the page loads and add event listeners
const userName = null;

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
        <h1 id="title">cogniCraft</h1>
    </div>
    <br>
    <div id="usernamedisplay">USERNAME:</div>
    <div class="timer">TIME:</div>
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


    //Username input window takes the value and stores it in the userName variable
    let userNameWindow = document.getElementById("usernamewindow");
    let userNameInput = document.getElementById("usernameinput");
    userNameInput.addEventListener("keydown", function(event)  {
        if (event.key === "Enter") {
            const userName = userNameInput.value;
            userNameWindow.style.display = "none";
        console.log(userName);
        let userNameDisplay = document.getElementById("usernamedisplay");
        userNameDisplay.innerHTML = `USERNAME:<br>${userName}</br>`;
        }
    });
    //Username display paragraph displays the username

    



    let colors = ["red", "yellow", "green", "blue", "white", "black", "pink", "purple"];
    let colorsPickList = [...colors, ...colors];
    console.log(colorsPickList);        //console.log the picklist values
    let tiles = document.getElementsByClassName("tile");
    console.log(tiles);
    let shuffledPickList = colorsPickList.sort(() => Math.random() - 0.5);
    console.log(shuffledPickList);           //console.log the shuffled picklist
    for (let i = 0; i < tiles.length; i++ ) {
        tiles[i].setAttribute("data-color", `${shuffledPickList[i]}`);       //adding data-type attributes to the tiles in a random manner
    }

    //Add event listener to the tiles and once they got clicked the progr+am will add the corresponding data-color attributo to the actual div
    //background color, revealing the colour

    //!!!!!!!!Unfortunately it works even before we set the username!!!!!!!!!!

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", function() {
            let color = this.getAttribute("data-color");
            this.style.backgroundColor = color;
        });
    }



}
/**
 * This function controls the Hi-scores menu.
 * It stores the hi scores DOM and keeps the user times
 */
function hiScores() {
    let hiScoresContent = `
    <div id = "fullscreen-container">
    <div id = "header">
        <h1 id="title">cogniCraft</h1>
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
        <h1 id="title">cogniCraft</h1>
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