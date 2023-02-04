let btnRef = document.querySelectorAll(".box");
let popUp = document.querySelector(".popup");
let newGame = document.querySelector(".new-game");
let restartBtn = document.querySelector(".restart");
let msgRef = document.querySelector(".message");

//winning pattern
let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

//this function is to disable the button
const disabledButton = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //to enable the popup
  popUp.classList.remove("hide");
};
//enable for restart and new game
const enableButton = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popUp.classList.add("hide");
};
newGame.addEventListener("click", () => {
  count = 0;
  enableButton();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});

///this is the function executed when a player is won
//this function is to display when a player wins
const winFunction = (text) => {
  disabledButton();
  if (text == "X") {
    msgRef.innerHTML = "&#129395; <br> 'X' won";
  } else {
    msgRef.innerHTML = "&#129395; <br> 'O' won";
  }
};
const drawFunction = () => {
  disabledButton();
  msgRef.innerHTML = "&#x1F60E; <br> It's a draw";
};

//win checker
winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //check if all the elements are filleeed
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        // if all the elements have the same value then declare the winner as that value
        winFunction(element1);
      }
    }
  }
};

//xturn first
let xTurn = true;
let count = 0;

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    //increment count if it reaches 9 then its a draw because there are 9 boxes
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //check for win after every click
    winChecker();
  });
});
window.onload = enableButton;
