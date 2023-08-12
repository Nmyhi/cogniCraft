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

function playGame() {
    let gameContent = `
    <div id = "fullscreen-container">
    <div id = "header">
        <h1 id="title">cogniCraft</h1>
    </div>
    <div class="tiles">
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
}

function hiScores() {
    let hiScoresContent = `
    <div id = "fullscreen-container">
    <div id = "header">
        <h1 id="title">cogniCraft</h1>
    </div>
    <p>Hi</p>
    <div id = "footer">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
    </div>
 </div>

<!--Link to the Javascript file-->
<script src="assets/javascript/index.js"></script> `;
    document.body.innerHTML = hiScoresContent; 
}

function help() {
    let helpContent = `
    <div id = "fullscreen-container">
    <div id = "header">
        <h1 id="title">cogniCraft</h1>
    </div>
    <div class="helptext-container">
        <h1>Help</h1>
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
}