//Global variables
var userName;
var timeScoreValue;
//wait until the page loads and add event listeners
//Add event listeners to the main menu
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
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

//Play game function which it controlling the game

/**
 * This function does:
 * - Modify the DOM into the game area
 * - Add an event listener to the menu button
 * - Store the username into a variable and displays it in the top left corner
 * - Assign the random colours to the tiles
 * - Reveal colour after click
 * - Contain the logic for the gameplay
 * - Contain other functions which required for: update the timer and save the highscore [updateTimer(), saveHighScore()]
 */

function playGame() {
//Game content innerHTML for the <body>!
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
            <input id = "usernameinput" name= "username" type="text" maxlength="15" required>
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
    <footer id="footer">
        <a href="https://www.facebook.com/MihalyLovrencsics/" target="_blank" rel="Developers facebook page"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/burnbeyond/" target="_blank" rel="Developers insagram page"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://api.whatsapp.com/send?phone=447305839825" target="_blank" rel="Developers whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
      </footer>
    </div>
    <!--Link to the Javascript file-->
    <script src="assets/javascript/"></script>`;

    document.body.innerHTML = gameContent;
//Add event listener to the menu button
  let menu = document.getElementsByClassName("menu");
  menu[0].addEventListener("click", function () {
    window.location.href = "index.html";
  });
//function variables
  let startTime = null;
  let endTime = null;
  let timerInterval;
  let clickable = false;

//Username input window takes the value and stores it in the userName variable
  let userNameWindow = document.getElementById("usernamewindow");
  let userNameInput = document.getElementById("usernameinput");
  userNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      //Prevent the user typing only spaces into the username input
      let enteredUserName = userNameInput.value.trim();
      if (enteredUserName === "") {
        alert("Please enter a valid username!");
      } else {
//Store the username when its not spaces only
        userName = enteredUserName;
        userNameWindow.style.display = "none";
        let userNameDisplay = document.getElementById("usernamedisplay");
        userNameDisplay.innerHTML = `USERNAME:<br>${userName}`;
        clickable = true;
//start the timer
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
      }
    }
  });
//Assign colours to the tiles
//Base colours:
  let colors = [
    "red",
    "yellow",
    "green",
    "blue",
    "white",
    "black",
    "pink",
    "purple",
  ];
//Duplicate the array into colorsPicklist
  let colorsPickList = [...colors, ...colors];
  let tiles = document.getElementsByClassName("tile");
// Create a shuffled or randomized copy of the colorsPickList and create the firstTile variable
  let shuffledPickList = [...colorsPickList].sort(() => Math.random() - 0.5);
  let firstTile = null;
//Loop for adding color-data and data-revealed attribute to the tiles
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].setAttribute("data-color", `${shuffledPickList[i]}`);
    tiles[i].setAttribute("data-revealed", "false");
    tiles[i].addEventListener("click", function () {
//ignoring the click if the colour has been already revealed
      if (!clickable || this.getAttribute("data-revealed") === "true") {
        return;
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
        if (
          this.getAttribute("data-color") ===
          firstTile.getAttribute("data-color")
        ) {

// ******** MATCH ********
          setTimeout(() => {
            this.setAttribute("data-revealed", "true");
            firstTile.setAttribute("data-revealed", "true");
// Re-enable clicking
            clickable = true;
            firstTile = null;
            if (
              document.querySelectorAll('[data-revealed="true"]').length ===
              tiles.length
            ) {
// All pairs are revealed, stop the timer, store the time and username
              endTime = Date.now();
              let endTimeValue = document.getElementById("timer").textContent;
              let userNameValue = document.getElementById("usernamedisplay").textContent;
// Endgame window with displayed username and time and a save&reset button
              userNameWindow.innerHTML = `<button id="save">Save&Reset</button><span>Congratulations!</span><br><br><span>${userNameValue}</span><br><br><span>Time:${endTimeValue}</span>`;
              userNameWindow.style.display = "block";
              let saveButton = document.getElementById("save");
              saveButton.addEventListener("click", function () {
                timeScoreValue = document.getElementById("timer").textContent;
                userNameWindow.style.display = "none";
                saveHighScore(userName, parseInt(endTimeValue));
                playGame();
              });
            }
          }, 1000);


// ******** NO MATCH ********
        } else {
          setTimeout(() => {
            this.style.backgroundColor = document.body.style.backgroundColor;
            this.setAttribute("data-revealed", "false");
            firstTile.style.backgroundColor =
              document.body.style.backgroundColor;
            firstTile.setAttribute("data-revealed", "false");
            firstTile = null;
            clickable = true;
          }, 1000);
        }
      }
    });
  }

/**
 * This function does:
 * - Update the timer
 * - Display the time in the top right corner
 */

  function updateTimer() {
    if (endTime) {
//game ended stop updating the timer
      clearInterval(timerInterval);
      return;
    }
//Display the time
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = elapsedTime + " ";
  }

/**
 * This function does:
 * - Store the data in the localstore
 * - Push the data into a variable
 * - Sort the values into a descending order based on the time value
 * - Keep the list 10 values long for the top 10 score
 * - Read existing data from the localstore before doing all of this
 */

  function saveHighScore(userName, timeScoreValue) {
//retrieve existing high score from the localstore
    let highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];
//add the current game's highscore
    highScores.push({ userName, timeScoreValue });
//sort the highscores by timescorevalue in descending order
    highScores.sort((a, b) => a.timeScoreValue - b.timeScoreValue);
//keep only 10 highest scores
    highScores = highScores.slice(0, 10);
//save the updated highscores back to the localstore
    localStorage.setItem(`highScores`, JSON.stringify(highScores));
  }
}

/**
 * This function does:
 * - Modify the DOM to display the high score table
 * - Call a function which will turn the data into table data
 * - Add event listener to the manu button
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
    <footer id="footer">
        <a href="https://www.facebook.com/MihalyLovrencsics/" target="_blank" rel="Developers facebook page"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/burnbeyond/" target="_blank" rel="Developers insagram page"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://api.whatsapp.com/send?phone=447305839825" target="_blank" rel="Developers whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
      </footer>
 </div>

<!--Link to the Javascript file-->
<script src="assets/javascript/index.js"></script> `;
  document.body.innerHTML = hiScoresContent;
//Reload the menu page
  let menu = document.getElementsByClassName("menu");
  menu[0].addEventListener("click", function () {
    window.location.href = "index.html";
  });
//Display high scores in the table
  displayHighScores();
/**
* This function does:
* - Display the highscores using data stored in the localstorage
* - Update the content of the table
*/

  function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];
    let highScoresTable =
      "<h2>High Scores</h2><table><tr><th>Username</th><th>Time (seconds)</th></tr>";
    for (let score of highScores) {
      highScoresTable += `<tr><td>${score.userName}</td><td>${score.timeScoreValue}</td></tr>`;
    }
    highScoresTable += "</table>";
// Display the highscore table on the page
    let highScoreTableHtml = document.querySelector(".highscores");
    highScoreTableHtml.innerHTML = highScoresTable;
  }
}

/**
 * This function does: 
 * - Modify the DOM into the help text.
 * - Add event listener to the menu button
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
        <p>After clicking the play menu, you will encounter the game area with 16 tiles. The game asks for your Name.
            After entering your name, the game and the timer start. Do not enter spaces only; the game will not like you! :). The 
            maximum amount of characters allowed for the username is 15. After you enter the username you must hit ENTER!
            Click the first tile (any tile of your choice) and the color reveals. Try to guess the matching color!
            If the color matches, the tiles remain revealed; if you fail to find a match, the colors are going hidden again.
            Try to memorize the color and reveal other tiles until you find all the matching tiles.
        </p>
        <p>The game ends after finding the last matching pair, the counter stops, and the game displays your username and your time.
        Click on the Save & Reset button to store your score and start a new game as well.
        </p>
        <h2>Hi-Scores</h2>
        <p>This menu will show the top 10 Hi-Scores corresponding to the names in descending order, starting with the best time-score.</p>
        <h2>Help</h2>
        <p>The help menu provides all of the required information about how the game works!</p>
        <p>Good luck and have fun! </p>
    </div>
    <footer id="footer">
        <a href="https://www.facebook.com/MihalyLovrencsics/" target="_blank" rel="Developers facebook page"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/burnbeyond/" target="_blank" rel="Developers insagram page"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://api.whatsapp.com/send?phone=447305839825" target="_blank" rel="Developers whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
      </footer>
 </div>

<!--Link to the Javascript file-->
<script src="assets/javascript/"></script>`;
  document.body.innerHTML = helpContent;
  //This reloads the index.html, basically it takes back to the menu.
  let menu = document.getElementsByClassName("menu");
  menu[0].addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
