const NUM_HARD_GAME = 6;
const NUM_EASY_GAME = 3;
const BGCOLOR = "#232323";
const defaultTitleColor = "rgb(70, 130, 180)";

var title = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var textDispaly = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var colors;
var pickedColor;
var firstGame = 1;
var modeNumber = NUM_HARD_GAME;

var easyBut = document.querySelector("#easy");
var hardBut = document.querySelector("#hard");
var ncBut = document.querySelector("#nc");
newGame(NUM_HARD_GAME);

ncBut.addEventListener("click", ncHandle);
easyBut.addEventListener("click", easyHandle);
hardBut.addEventListener("click", hardHandle);

function newGame(numb) {
  colors = createColorsArr(numb);
  pickedColor = colors[pickedRandomColor(modeNumber)];

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    if (firstGame == 1) {
      hardBut.classList.add("selected");
      squares[i].addEventListener("click", squareClick);
    }
    if (i >= numb && modeNumber == NUM_EASY_GAME) {
      squares[i].style.display = "none";
    }
    if (modeNumber == NUM_HARD_GAME) {
      squares[i].style.display = "block";
    }
  }
  firstGame = 0;
  textDispaly.textContent = pickedColor;
  message.textContent = "";
}

function ncHandle() {
  ncBut.textContent = "NEW COLORS";
  title.style.background = defaultTitleColor;
  newGame(modeNumber);
}
function easyHandle() {
  easyBut.classList.add("selected");
  hardBut.classList.remove("selected");
  modeNumber = NUM_EASY_GAME;
  newGame(modeNumber);
}
function hardHandle() {
  hardBut.classList.add("selected");
  easyBut.classList.remove("selected");
  modeNumber = NUM_HARD_GAME;
  newGame(modeNumber);
}

function squareClick() {
  if (pickedColor == this.style.background) {
    message.textContent = "Correct!";
    title.style.background = this.style.background;
    changeAllSquaresColor(this.style.background);
    ncBut.textContent = "Play Again?";
  } else {
    message.textContent = "Try Again!";
    this.style.background = BGCOLOR;
  }
}

function changeAllSquaresColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickedRandomColor(numb) {
  return Math.floor(Math.random() * numb);
}

function createColorsArr(numberOfColors) {
  var colors = [];
  for (var index = 0; index < numberOfColors; index++) {
    colors.push(random_bg_color());
  }
  return colors;
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + ", " + y + ", " + z + ")";
}
